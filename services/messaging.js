// Messaging Service - Powered by Vonage.
const Nexmo = require('nexmo');
require('dotenv').config();

const gateway = new Nexmo({
  apiKey: process.env.NEXMO_API_KEY,
  apiSecret: process.env.NEXMO_API_SECRET,
  applicationId: process.env.NEXMO_APPLICATION_ID,
  privateKey: process.env.NEXMO_PRIVATE_KEY.replace(/\\n/g, '\n')
});

const message = {};

message.sms = (text, to) => {
    return new Promise((resolve, reject) => {
        const from = 'BFine Proto';
        gateway.message.sendSms(from, to, text, (err, res) => {
            if (err) {
                reject("Could not send message.");
            } else {
                if(res.messages[0]['status'] === "0") {
                    resolve();
                } else {
                    reject("Could not send message.")
                }
            }
        })
    });
}


message.tts = (text, to) => {
    return new Promise((resolve, reject) => {
        let ncco = [{ "action": "talk", "language": "en-US", "style": 11, "text": text }];
        gateway.calls.create(
            {
              to: [{ type: 'phone', number: to }],
              from: { type: 'phone', number: '17052011119' },
              ncco
            },
            (err, result) => {
              if (err) {
                  reject("Something went wrong while calling...");
              } else {
                  resolve();
              }
            },
          );
    });
}

message.otp = (to) => {
    return new Promise((resolve, reject) => {
        gateway.verify.request({
            number: to,
            brand: 'BFine verification',
            code_length: '6'
          }, (err, result) => {
            if (err) {
                reject("Could not send OTP to this number");
            } else {
                resolve(result.request_id);
            }
          });
    });
}

message.check_otp = (request_id, otp) => {
    return new Promise((resolve, reject) => {
        gateway.verify.check({
            request_id: request_id,
            code: otp
          }, (err, result) => {
            if (err) {
                reject("Server Error - Could not verify OTP.");
            } else if (result.status == '0') {
                resolve();
            } else {
                reject("Incorrect OTP");
            }
          });
    });
}

module.exports = message;