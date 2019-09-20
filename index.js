var consentDictionary;

getJSON('https://segment-consent-demo.s3-us-west-2.amazonaws.com/vendorlist.json',
function(err, data) {
  if (err !== null) {
    console.log('Something went wrong retrieving consentDictionary: ' + err);
  } else {
    consentDictionary = data;
  }
});
