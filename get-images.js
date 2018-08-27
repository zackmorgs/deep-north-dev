// stack overflow classic : string.replaceAll funciton.
// String.prototype.replaceAll = function (search, replacement) {
//   var target = this;
//   return target.replace(new RegExp(search, 'g'), replacement);
// };
// array of json objects with pair of 'folder path - json file' pairing

const hasImageFileExtension = (filepath) => {
  let extensions = ['.jpg', '.png', '.jpeg', 'gif'];
  // let isImage = true;
  return extensions.some(ext => {
    return filepath.includes(ext);
  }, filepath)
    ? () => {
      true;
    }
    : false;
};

hasImageFileExtension('test');
hasImageFileExtension('test',()=>{console.log('testy')});

[
  {
    imageFolderPath: './public/img/instagram/',
    jsonFilePath: './src/Data/image-list.json'
  },
  {
    imageFolderPath: './public/img/carousel-images/',
    jsonFilePath: './src/Data/carousel-list.json'
  }
].forEach(obj => {
  // get correct file paths
  // obj.imageFolderPath = require.resolve(obj.imageFolderPath);

  const targetDirectory = obj.imageFolderPath;
  const jsonFile = obj.jsonFilePath;
  require('fs').readdir(targetDirectory, function (err, files) {
    // error hanlding
    if (err) {
      console.error('internal', 2002, 'could not read folder');
      process.abort();
      throw Error;
    }
    // add to local array
    let arrayToWrite = [];
    files.forEach(function (subfile) {
      let output_filepath = targetDirectory.replace('./public/', '') + subfile;

      hasImageFileExtension( output_filepath) && arrayToWrite.push(output_filepath)
    });
    // console.log(arrayToWrite);
    // write array to json file
    require('fs').writeFileSync(obj.jsonFilePath, JSON.stringify(arrayToWrite));
  });
});
