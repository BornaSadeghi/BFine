const uworker = require('./workers/urgent-requests');



const interval = 30000;

let bkw = {}; 

bkw.init = async() => {
    console.log(1);
    setInterval(async() => {
        console.log(2);
        await uworker.exe();
    }, interval)
}

module.exports = bkw;