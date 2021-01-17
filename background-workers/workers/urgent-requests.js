const donorModel = require('../../models/donor');
const bloodBankModel = require('../../models/bloodBank');
const requestModel = require('../../models/urgentRequest');

const geolib = require('geolib');
const message = require('../../services/messaging');
let worker = {};

worker.exe = async() => {
    return new Promise(async(resolve) => {
        
        requestModel.find({status:'open'}, async(err, docs) => { 
            if (err){ 
                console.log(err);
                resolve();
            } 
            else{
                docs.forEach(async(doc) => {

                    bloodBankModel.find({_id: doc.bloodBankId}, async(err, banks) => { 
                        if (!err) {
                
                            let possibleDonors = await findNearbyDonors(banks[0]);
                            await contactDonors(possibleDonors, banks[0], doc);
                            try {
                                doc.attempt = doc.attempt + 1;
                                if (doc.attempt > 2) {
                                    doc.status = 'closed';
                                }
                                await requestModel.updateOne({ _id: doc._id }, doc);
                            } catch (e) {
                                console.log(e);
                            }
                        } else {
                            console.log(err);
                        }
                    });
    
                });
                resolve();
            } 
        }); 
    })
    
}

findNearbyDonors = (bank) => {
    return new Promise((resolve) => {
        donorModel.find({isUrgentDonor: true}, function (err, docs) { 
            if (err){ 
                console.log(err);
                resolve([]);
            } 
            else {
                let possibleDonors = [];
                docs.forEach(donor => {
                    console.log(bank.address.address);
                    let lat1 = bank.address.lat;
                    console.log(lat1);
                    let long1 = bank.address.long;
                    let lat2 = donor.address.lat;
                    let long2 = donor.address.long;
    
                    let dist = geolib.getPreciseDistance({ latitude: lat1, longitude: long1 }, { latitude: lat2, longitude: long2 });
    
                    if (dist <= 3000) {
                        possibleDonors.push(donor);
                    }
                });
                resolve(possibleDonors);
            }
        }); 
    });
    
}

contactDonors = (list, bank, req) => {
    return new Promise(async(resolve) => {
        list.forEach(async(donor) => {
            try {
                if (req.attempt == 0) {
                    console.log(bank);
                    await message.sms(`Hello ${donor.name}, We are in urgent need of ${req.unitsNeeded} units of ${req.bloodType} blood at ` + 
                    `${bank.name} - ${bank.address.address}. If you would be willing to donate, please click the link below: [placeholder] - BFine`, donor.phoneNumber);
                } else {
                    await message.tts(`Hello ${donor.name}... This is a call from Bee Fine... We are in urgent need of ${req.unitsNeeded} units of your
                    blood type... at ${bank.name}... We have sent further details over SMS... Do note that we are having difficulty in finding a donor...
                    your consideration would be highly appreciated... Thank you for your time...`, donor.phoneNumber);
                }
            } catch(e) {
                console.log(e);
            }
        });
        resolve();
    });

}

module.exports = worker;