
const http = require('http');
// Options to be used by request 
let options =
{
  host: 'localhost',
  port: '5501',
  path: 'index.html',
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'firstName': '',
    'lastName': ''
  }

};

// Callback function is used to deal with response
let callback = function (response) {
  // Continuously update stream with data
  var body = '';
  response.on('data', function (data) {
    body += data;
    //querystring.parse('firstName=&lastName=&norefresh=1','&','=');
    //querystring.stringify({ firstName: '', lastName: '' }, ';', ':');
  });

  response.on('end', function () {
    // Data received completely.
    console.log(body);

  });
}
// Make a request to the server
let req = http.request(options, callback);
req.end();

  ////>>>>>>>>>>>>>others i looked into but did not work

/* // Continuously update stream with data
  const req = http.request(options, (res) => {
     let data = ''
      
     res.on('data', (chunk) => {
         data += chunk;
     });
     
     // Ending the response 
     res.on('end', () => {
         console.log('Body:', JSON.parse(data))
     });
        
 }).on("error", (err) => {
     console.log("Error: ", err)
 }).end()
*/
/*const http = require('http');

let request = http.get('http://127.0.0.1:5502/index.html', (res) => {
  if (res.statusCode !== 200) {
    console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
    res.resume();
    return;
  }

  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('close', () => {
    console.log('Retrieved all data');
    console.log(JSON.parse(data));
  });
});

request.on('error', (err) => {
  console.error(`Encountered an error trying to make a request: ${err.message}`);
});
*/


