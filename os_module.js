const os =require("os");
console.log("platform:",os.platform());
console.log("userinfo:",os.userInfo());

console.log("CPU Architecture:",os.arch())
console.log("free memory:",os.freemem(),"bytes");

console.log("total memory :",os.totalmem(),"bytes");

console.log("system uptime:",os.uptime(),"seconds");

console.log("home directory:",os.homedir());

console.log("host name:",os.hostname());
// console.log("network interfaces:",os.networkInterfaces());

// console.log("cpu info:",os.cpus());

console.log("temperroary directory:",os.tmpdir());

