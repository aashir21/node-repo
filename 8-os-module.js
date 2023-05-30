const os = require('os');

// info about current usr

const user = os.userInfo()

console.log(user);

//method returns the system update in hrs

console.log(os.uptime() / 3600)


const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(currentOS);