const fs = require('fs');

console.log('deleting' + process.argv[2]);

const filePath = process.argv[2];



// fs.access(filePath, error => {
//   if (!error) {
//     fs.unlinkSync(require.resolve(filePath));
//   } else {
//     console.log(error);
//   }
// });
