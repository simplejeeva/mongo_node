const fs = require("fs");
// const quotes = "no  beauty brighter then good hearts";
// fs.writeFile("./osm.html", quotes, (err) => {
//   console.log("complted succesfully");
// });

// const quotes2 = "live more worry less";

// for (let i = 1; i <= 10; i++) {
//   fs.writeFile(`./backup/text-${i}.html`, quotes2, (err) => {
//     console.log("complted succesfully");
//   });
// }
// const [, , noOfFilce] = process.argv;
// console.log(noOfFilce);
// for (let i = 1; i <= noOfFilce; i++) {
//   fs.writeFile(`./backup/text-${i}.html`, quotes2, (err) => {
//     console.log("complted succesfully");
//   });
// }
// const [, , noOfFilce] = process.argv;
// console.log(noOfFilce);
// genFiles(noOfFilce);

// function genFiles(noOfFilce) {
//   if (noOfFilce > 50) {
//     console.log("Maximum number reached");
//     return;
//   }
//   for (let i = 1; i <= noOfFilce; i++) {
//     fs.writeFile(`./backup/text-${i}.html`, quotes2, (err) => {
//       console.log("complted succesfully");
//     });
//   }
// }

// fs.readFile("./cool.txt", "utf8", (err, data) => {
//   console.log(data);
// });
// const quotes3 = "i like to javascrit";

// fs.appendFile("./fun.html", "\n" + quotes3, (err) => {
//   console.log("complted succesfully");
// });

// delet foile
fs.unlink("./delete.css", (err) => {
  console.log("complted deleted");
});
