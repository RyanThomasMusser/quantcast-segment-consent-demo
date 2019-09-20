//Plug into Quantcast's callback
window.__cmp('setConsentUiCallback', function(a,b,c){
  //If the Quantcast CMP is made aware of a user's consent, then we want to grab the consent
  window.__cmp('getVendorConsents', null, function(results) {
    if(results) {
      //And let Segment know what's up
      resetConsentValues(results.vendorConsents,results.purposeConsents);
    }
  });
});

function resetConsentValues(vendorConsentValuesParams,purposeConsentValuesParams){
  //
  var atleastOneConsentTrue = false;
  //Let's iterate over our consents, from our cloud consent store
  consentDictionary.vendors.map(function(vendor){
      //then we simply map the user's consent choice to segment
      segmentIntegrations.integrations[vendor.segmentName] = vendorConsentValuesParams[vendor.id];
      if(vendorConsentValuesParams[vendor.id] == true){
        //and if any of the consents are true, we know to turn on segment
        atleastOneConsentTrue = true;
      }
  });
  //so, based on the above, should we initialize segment?
  segmentIntegrations.integrations["Segment.io"] = atleastOneConsentTrue;
  if(analytics && analytics.initialized == undefined && segmentIntegrations.integrations["Segment.io"] == true){
    //Should we load segment but we haven't?
    analytics.load("ryine8ECeyjqXxGNVQxf0Qy1fELbVJQw",segmentIntegrations);
    analytics.page();
  }else{
    //Let's update segment based on user consent
    if(analytics && analytics.initialized){
      location.reload();
    }
  }
}
