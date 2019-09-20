var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

window.consentLog = "";
window.addToConsentLog = function(log){
  var dateTimeStamp = new Date();
  window.consentLog = "<strong style='font-size:10px'>"+moment().format('MMMM Do YYYY, h:mm:ss a')+"</strong><br/>"+log+"<hr/>"+window.consentLog;
  document.getElementById('consentLog').innerHTML = "Event log<hr/>"+window.consentLog;
}
window.formatConsentsMessage = function(consent){
  var returnVal = "<div style='text-align:left;font-size:10px'>";
  purposeConsentsDictionary.map(function(object){
    returnVal+= object.name+" : "+consent.standardPurposeConsents[object.standardPurposeConsentsIndex]+"<br/>";
  });
  return returnVal+"</div>";
}
function sendEvent(){
  analytics.track('SegmentEvent',{test:'yes'});
  window.addToConsentLog("<div style='text-align:left;font-size:10px'>Event Sent!</div>");
}
