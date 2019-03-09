const accountSid = "AC85ad0c2a71bb16f2f29b196540f5730d";
const authToken = "ac7537fc8ffe7e294acaf85428eeeeac";
const client = require("twilio")(accountSid, authToken);

export function sendTwilioSMS() {
  client.messages
    .create({
      body:
        "Warning - You have just received a red alert for Wind Turbine #001",
      from: "+61480016883",
      to: "+61431473207"
    })
    .then(message => console.log(message.sid));
}
