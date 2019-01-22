const fs = require("fs");

//CREATE A FILE
// fs.writeFile("example.txt", "this is an example", err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file successfilly created");
//     fs.readFile("example.txt", "utf8", (err, file) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(file);
//       }
//     });
//   }
// });

//RENAME A FILE
// fs.rename("example.txt", "example2.txt", err => {
//   if (err) console.log(err);
//   else console.log("successfully renamed");
// });

//APPEND DATA TO A FILE
// fs.appendFile("example2.txt", " fart append", err => {
//   if (err) console.log(err);
//   else console.log("successfully appended data to file");
// });

//DELETE A FILE
// fs.unlink("example2.txt", err => {
//   if (err) console.log(err);
//   else console.log("successsfully deleted the file");
// });
