// Authentication Service

const message = require('./messaging');

const auth = {};

auth.init = async(number) => {
    try {

        let request_id = await message.otp(number);
        return {resolved: true, request_id: request_id};

    } catch(e) {
        return {resolved: false, reason: e};;
    }
}

auth.establish = async(request_id, otp) => {
    try {

        await message.check_otp(request_id, otp);

        // @TODO Create session

        // @TODO return session id
        return {res: true, session_id: null};

    } catch(e) {
        return {res: false, reason: e};;
    }
}

auth.verifySession = (session_id) => {

}

auth.purgeSession = (session_id) => {

}

const debug = async() => {
    //let a = await auth.init('919899233217');
    //let a = await auth.establish('283ba9161cee44d89d9ee40cc1b8f9e8', '807055');
    //console.log(a);
}

debug();

module.exports = auth;