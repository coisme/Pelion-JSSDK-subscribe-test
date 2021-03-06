var dateformat = require('dateformat');
var MbedCloudSDK = require("mbed-cloud-sdk");

var connect = new MbedCloudSDK.ConnectApi({
    apiKey: "<< Your API Key >>"
});

var deviceId = "<< Your Device Id >>"; // Endpoint Name
var resourceURI = "/3200/0/5501";  // Button Count

process.on('uncaughtException', function (err) {
    console.log(dateformat(new Date(), 'isoTime') + " " + 'Caught exception: ' + err);
  });
 
process.on('exit', function () {
    console.log(dateformat(new Date(), 'isoTime') + " " + 'EXIT.');
});

const btn_obj = connect.subscribe.resourceValues({resourcePaths: [resourceURI], deviceId: [deviceId]});

var myListener = (data) => {
    console.log(dateformat(new Date(), 'isoTime') + " " + JSON.stringify(data));
}

btn_obj.addListener(myListener);

