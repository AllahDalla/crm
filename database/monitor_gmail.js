const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { google } = require("googleapis")
const fs = require("fs")

const access_token_file = 'access_token.txt'

fs.readFile(access_token_file, 'utf-8', function (err, data) {
    if(err) console.log(err);
    let userTokens = data.split('\n')
    console.log(userTokens.length)
    let accessToken = "Not set"
    for(let index = 0; index < (userTokens.length - 1); index++){
        // console.log(JSON.parse(userTokens[index]))
        accessToken = JSON.parse(userTokens[index]).useraccessToken
    }
    console.log(accessToken)


    const oauth2Client = new google.auth.OAuth2(
        "631728215664-i5pubfjfk6lqu2ehha81452ukih96osl.apps.googleusercontent.com",
        "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",
        "http://localhost:7000/google-redirect"
    );

    oauth2Client.setCredentials({
        access_token: accessToken
    });

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const queryDate = `${month}/${day}/${year}`

    const gmail = google.gmail({version: 'v1', auth: oauth2Client});
    gmail.users.messages.list({
        userId:'me',
        q:`in:inbox after:${queryDate} category:primary`
    }, (err, res) => {
        if (err) return console.log(`The API returned an error: ${err}`);
        const newMsgCount = res.data.resultSizeEstimate;
        console.log("New Messages = " + newMsgCount)
        const messages = res.data.messages;
        if(newMsgCount > 0){
        for(let x = 0; x < messages.length; x++){
            gmail.users.messages.get({
            userId:'me',
            id:messages[x].id
            }, (err, res) => {
            if (err) return console.log(`The API returned an error getting message: ${err}`);
            const messageContent = res.data;
            if(messageContent.payload.body === undefined){
                // Do nothing if undefined
                // console.log("I did nothing!")
            }else{
                try {
                // const decodedMsg = Buffer.from(messageContent.payload.body.data.toString(), 'base64').toString('ascii')
                // console.log(stripTags(decodedMsg));
                const filename = 'gmail_messages.txt'
                let subject = ""
                let msg = "No message!"
                if(messageContent.payload.body.data !== undefined){
                    msg = Buffer.from(messageContent.payload.body.data.toString(), 'base64').toString('ascii')
                }

                fs.access(filename, (err) =>{
                    for(let index = 0; index < messageContent.payload.headers.length; index++){
                    if(messageContent.payload.headers[index].name === "Subject"){
                        subject = messageContent.payload.headers[index]
                    }
                    }

                    const data = {
                    headers:subject,
                    body: msg
                    }
                    if(err){

                    fs.writeFile(filename, JSON.stringify(data) + '\n', (err) => {
                        if (err) {
                        console.error(err);
                        } else {
                        console.log(`File '${filename}' created successfully.`);
                        console.log("Message added successfully!")
                        }
                    })
                    }else{
                    fs.appendFile(filename, JSON.stringify(data) + '\n', (err) =>{
                        if(err){
                        console.log(err)
                        }else{
                        console.log("File written to successfully~")
                        }
                    })
                    }

                })

                } catch (error) {
                console.log(error)
                console.log("Server crashed but has been handled!")
                }
            }
            })
        }
        }else{
        console.log("There are no new messages!")
        }

    })

})





