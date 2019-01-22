const fs = require("fs");

//CREATE A FOLDER
// fs.mkdir("tutorial", err => {
//   if (err) console.log(err);
//   else console.log("successfully created folder");
// });

//DELETE A FOLDER
fs.rmdir("tutorial", err => {
  if (err) console.log(err);
  else console.log("successfully deleted the folder");
});

//CREATE A FOLDER WITH A FILE
// fs.mkdir("tutorial", err => {
//   if (err) console.log(err);
//   else {
//     fs.writeFile("./tutorial/example.txt", "123", err => {
//       if (err) console.log(err);
//       else console.log("successfulle created file");
//     });
//   }
// });
