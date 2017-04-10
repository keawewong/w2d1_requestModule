var request = require('request');

var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(err) {
    throw err;
  })
  .on('response', function(response) {
    var responseCode = response.statusCode;
    if (responseCode !== 200) {
      console.log('Response Status Code: ', responseCode);
      return
    }
    console.log(`Response Code: ${responseCode} Downloading...`)
  })
  .on('end', () => {
    console.log(`Download completed.`)

  })
  .pipe(fs.createWriteStream('./images/future.jpg'));
