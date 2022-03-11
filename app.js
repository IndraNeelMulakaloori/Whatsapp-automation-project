const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');

// Path where the session data will be stored
const SESSION_FILE_PATH = './session.json';

// Load the session data if it has been previously saved
let sessionData;
if(fs.existsSync(SESSION_FILE_PATH)) {
    sessionData = require(SESSION_FILE_PATH);
}

// Use the saved values
const client = new Client({
    session: sessionData
});






client.on('qr', (qr) => {
    qrcode.generate(qr,{small:true});
    console.log('Scan the Above Qr Code');
});

client.on('ready', () => {
    console.log('Client is ready!');
});


// Save session values to the file upon successful auth
client.on('authenticated', (session) => {
    sessionData = session;
    fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
        if (err) {
            console.error(err);
        }
    });
});

client.initialize();

const preMsg = [{
      id : 1,
      number : '112222',
      msg : "Hello "
},{
    id:2,
    number : '2222',
    msg : "Sry I am bit busy",
},{
    id : 3,
    msg : "Who are you"
}];

const num = "8374171670";
// Listening to the message


const firstDate = new Date();
    const secDate = new Date(2022,02,27,14,31);
client.on('message',(message) => {
     
    fromNum = message.from;
    var foundValue = preMsg.filter(obj => '91' + obj.number + "@c.us" == fromNum);
    // if(!foundValue.length)
    // // message.reply(preMsg[2].msg);
    // console.log(message);
    // else
    // message.reply(foundValue[0].msg);

   
    
    //Scheduling Messages
   
    

});



client.on('ready',() => {
   
    // client.sendMessage(num,"Hello");
   for(let i = 0 ;  i < 7 ; i++)
   client.sendMessage("919686873459@c.us","Hello Mowa");
   
});



