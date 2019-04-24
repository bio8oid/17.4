var os = require('os');

function timeMachine() {
    var uptime = os.uptime();
    console.log('Uptime: ', (Math.floor(uptime / 3600)) + 'h ' + (Math.floor(uptime % 3600 / 60)) + 'm ' + (Math.floor(uptime % 3600 % 60)) + 's ');   
}

exports.print = timeMachine;
