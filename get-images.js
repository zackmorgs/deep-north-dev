// var readline = require('linebyline'),
//   rl = readline('./imglist.txt');

// let images = [];

// rl.on('line', function(line, lineCount, byteCount) {
//   // do something with the line of text
//   // console.log(line);
//   console.clear();
//   images.push(line);
//   console.log(images);
// }).on('error', function(e) {
//   // something went wrong
//   console.log('error');
// });

// console.log(images);

var ls = require('ls');

((ls)=>{
  String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
  };


  console.log('[');

  let files = ls('./public/img/instagram/*');
  // console.log(files.length);
  // ./
  for (var i = 0; i < files.length; i++) {
    // console.log(i);
    let filePath = files[i].full;
    if (i !== files.length - 1) {
      console.log('"' + filePath.replaceAll('./public', '') + '"' + ', ');
    } else {
      console.log('"' + filePath.replaceAll('./public', '') + '"');
    }
  }
  console.log(']');
})(ls);


