const fs = require('fs');
const data = `const a = 123`;

// 创建一个可以写入的流，写入到文件out
const writeStream = fs.createWriteStream('out.js');

// 使用UTF8编码写入
writeStream.write(data,'UTF8');

// 标记文件末尾
writeStream.end();

// 处理流事件 -->data,end,and error
writeStream.on('finish',() => {
    console.log(`写入完成`);
})

writeStream.on('error',() => {
    console.log(err.stack);
})