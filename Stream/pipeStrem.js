const fs = require('fs');

// 创建一个可读流
const readerStream = fs.createReadStream('input.txt');

// 创建一个可写流
const writeStream = fs.createWriteStream('out.txt');

// 管道流
readerStream.pipe(writeStream);

console.log(`写入完成`);