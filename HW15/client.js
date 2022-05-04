
const http = require('http');
var fs = require('fs');
const querystring = require("querystring");

// Options to be used by request 
let options =
{
  host: 'localhost',
  port: '5501',
  path: 'index.html',
  method: 'GET' 
};

// Callback function is used to deal with response
let callback = function (response)
 {
        // Continuously update stream with data
        var body = '';
        response.on('data', function (data) 
        {
              body+= data;
              console.log(obj);
        });


//this where I would put the readerStream---- to do the file stuff

        response.on('end', function () 
        {

            var stream = fs.createReadStream('index.html',
            {

              flags: 'r',
              encoding: 'utf8',


            });
            var writerStream = fs.createWriteStream('output.txt',
            {
              flags: 'w',
              encoding: 'utf8',

              headers: {
                 value: ''
              }
            });
      // Pipe the read and write operations
      stream.pipe(writerStream);
   
      //console.log(JSON.parse(body));
      console.log("piping Ended");
  });
}
// Make a request to the server
let req = http.request(options, callback);
req.end();

  
