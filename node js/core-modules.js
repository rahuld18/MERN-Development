var os=require('os')
var b=os.totalmem/1024;
b1=b/(3*1024);
console.log('Host:=' +os.hostname());
console.log('Free Memory:=' +os.freemem()/1024);
console.log('Available Memory:=' +b1);
