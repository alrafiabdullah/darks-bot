const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '%';
var version = 'The Alpha Version';

const token = 'Enter Your Token Here';

bot.on('ready', () =>{
    console.log("Battle Bot is online!");
})

bot.on('message', messsage=>{
    let args = messsage.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'hello':
            messsage.reply('Hi, Sweetheart!')
            break;
        
        case 'ping':
            messsage.channel.send('pong!')
            break;

        case 'info':
            if(args[1] === '-version' || args[1] === '--v'){
                messsage.channel.send('Version: ' + version)
            } else {
                messsage.channel.send("(❁´◡`❁) Welcome to Dark's Bot (❁´◡`❁)\n\n%hello = Replies Hi\n%ping = Replies pong\n%info -version/--v = Shows bot version")
            }
            break;

        case 'clear':

    }
})

bot.login(token);