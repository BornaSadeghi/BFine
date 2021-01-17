// Authentication Service
const message = require('./messaging');
const sessionModel = require('../models/session');

const donorModel = require('../models/donor');
const bloodBankModel = require('../models/bloodBank');

const auth = {};

auth.init = async(phoneNumber) => {
    return new Promise(async(resolve) => {
        try {

            let request_id = await message.otp(phoneNumber);
            resolve({res: true, request_id: request_id});
    
        } catch(e) {
            resolve({res: false, reason: e});
        }
    });
}

auth.establish = async(request_id, otp, phoneNumber, type) => {
    return new Promise(async(resolve) => {
        let result = {};

        try {
            await message.check_otp(request_id, otp);
            result = {res: true};
        } catch(e) {
            result = {res: false, reason: e};;
        }

        let selectedModel = undefined;
        if (type === 'donor' && phoneNumber) {
            selectedModel = donorModel;
        } else if (type === 'bloodbank' && phoneNumber) {
            selectedModel = bloodBankModel;
        } else {
            result.res = false;
            result.reason = 'invalid type or missing phone number';
        }

        if (selectedModel) {
            selectedModel.findOne({phoneNumber: phoneNumber}, async(err, docs) => {
                if (err) {
                    result.res = false;
                    result.reason = 'Could not search DB';
                    resolve(result);
                }
                else {
                    if (docs) {
                        result.exists = true;
                        const doc = await sessionModel.create({ phoneNumber: phoneNumber, type: type, timestamp: new Date()});
                        result.sessionId = doc._id;
                        resolve(result);
                    } else {
                        if (result.res) {
                            result.exists = false;
                            if (type == 'donor') {
                                await selectedModel.create({phoneNumber: phoneNumber});
                                const doc = await sessionModel.create({ phoneNumber: phoneNumber, type: type, timestamp: new Date()});
                                result.sessionId = doc._id;
                                resolve(result);
                            } else {
                                result.res = false;
                                result.message = "no blood bank with associated number, blood banks cannot sign up through this form";
                                resolve(result);
                            }
                        } else {
                            resolve(result);
                        }
                    }
                }
            });
        } else {
            resolve(result);
        }

    });
    
}

auth.verifySession = async(sessionId) => {
    sessionModel.findOne({_id: sessionId}, async(err, docs) => {
        if (err) return {res: false, err: err};
        else {
            if (docs) {
                if (new Date() - docs.timestamp < 86400000) {
                    return {res: true};
                } else {
                    return {res: false};
                }
            } else {
                return {res: false};
            }
        }
    });
}

auth.purgeSession = (sessionId) => {
    sessionModel.findOneAndDelete({_id: sessionId}, function (err, docs) { 
        if (err){ 
            return {res: false};
        } 
        else{ 
            return {res: true}
        } 
    }); 
}

module.exports = auth;