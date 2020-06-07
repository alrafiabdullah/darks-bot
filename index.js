const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzE5MTI2MTc1NzkxOTcyNDQz.Xty7_w.a_uiJC6L96t85xYDFTduvsuoZw8';

bot.on('ready', () =>{
    console.log("Battle Bot is online!");
})

bot.login(token);