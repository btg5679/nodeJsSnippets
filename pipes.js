const fs = require("fs");
//COMPRESSION
const zlib = require("zlib");
//SOURCE STREAM AND DESTINATION STREAM
const gzip = zlib.createGzip();
const readStream = fs.createReadStream("./example2.gz");
const writeStream = fs.createWriteStream("./example2.gz");
readStream.pipe(gzip).pipe(writeStream);
