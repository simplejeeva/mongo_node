const os = require("os");
console.log("freememomry", os.freemem() / 1024 / 1024 / 1024);
console.log("totalmemomry", os.totalmem() / 1024 / 1024 / 1024);
console.log(os.version());
console.log(os.cpus());
