# quantcast-segment-consent-demo

This demo is designed to illustrate how Quantcast can be integrated with Segment's analytics.js client side library. 

In this demo, the most important file to note is *segmentQuantcast.js* as it contains the script that actually integrated Quantcast and Segment. We plug into *window.__CMP*'s callback upon detection of user preferences, and load Segment's integrations accordingly.

You will also notice that we are using a hosted version of Quantcast's CMP script (*cmp.js*), as we wanted to use a custom vendor list (*vendorlist.json*) for this demonstration to keep our UI simple. 

There is no build process needed with this demo, and as such, please note that cookie preferences may not be respected as files would be hosted locally if you simply open index.html on your machine. I have a hosted version of this demo here: https://segment-consent-demo.s3-us-west-2.amazonaws.com/index.html

If you have any questions or concerns please don't hestiate to reach out to me at ryan.musser@segment.com - thank you!
