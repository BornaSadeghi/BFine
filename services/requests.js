const message = require('./messaging');
const donorModel = require('../models/donor');
const bloodBankModel = require('../models/bloodBank');

const requestModel = require('../models/urgentRequest');
const reqs = {};

reqs.make = async(body) => {
    return new Promise(async(resolve) => {
        try {
            await requestModel.create(body);
            resolve({res: 'true'});
        } catch (e) {
            resolve({res: false, reason: e});
        }
    })
}

reqs.close = async(id, number) => {
    return new Promise(async(resolve) => {
        requestModel.find({_id:id}, async(err, docs) => {
            if (!err){
                let doc = docs[0];
                doc.status = 'closed';
    
                bloodBankModel.find({_id: doc.bloodBankId}, async(err, banks) => { 
                    if (!err) {
                        await message.sms(`Donor found for urgent request, please contact at ${number}`, banks[0].phoneNumber);
                        try {
                            await requestModel.updateOne({ _id: doc._id }, doc);
                            resolve({res: true});
                        } catch (error) {
                            resolve({res: false, reason: e});
                        }
                    } else {
                        resolve({res: false, reason: 'err'});
                    }
                });
            }
        }); 
    })
}

module.exports = reqs;