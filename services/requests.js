const message = require('./messaging');
const donorModel = require('../models/donor');
const bloodBankModel = require('../models/bloodBank');

const requestModel = require('../models/urgentRequest');
const reqs = {};

reqs.make = (body) => {
    return new Promise(async(resolve) => {
        try {
            await requestModel.create(body);
            resolve({res: 'true'});
        } catch (e) {
            resolve({res: false, reason: e});
        }
    })
}

reqs.close = (id, number) => {
    requestModel.find({_id:id}, async(err, docs) => {
        
    }); 
}