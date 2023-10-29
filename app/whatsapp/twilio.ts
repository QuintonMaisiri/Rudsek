const accountSid = 'AC3d7d215251a3530154dbfd1baccc1d53';
const authToken = '2001f0207a7e447838970c3e57534ecb';

const client = require('twilio')(accountSid, authToken);

export async function sendMessage(msg: string) {
    client.messages
        .create({
            body: msg,
            to: '+263776441883', // Text your number
            from: '+14406075022', // From a valid Twilio number
            mediaUrl: '/images/test.jpg'
        })
        .then((message: any) => console.log(message.sid));
}
