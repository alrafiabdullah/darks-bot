const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = '%';


var version = 'The Beta Version';
var channelId = /*Enter your channel ID */;
var date = new Date().toLocaleTimeString();
var riotId = "Coming Soon...";
var dateString = "Created at: " + date;

const token = /* Enter your token */;

//Sends messages on Interval
bot.on('ready', () =>{
    console.log("Battle Bot is online!");
    console.log("Logged in at: " + date);

    var generalChannel = bot.channels.cache.find(channel => channel.id === channelId);
        
    // setInterval( ()=>{
    //     generalChannel.send("Hello")
    // }, 2000);
})


//Command Lines
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
            } else if (args[1] === '-profile' || args[1] === '--p'){
                const embed = new Discord.MessageEmbed()
                .setTitle('Player Information')
                .addField('Player Name', messsage.author.username, true)
                .addField('Riot ID', riotId, true)
                .addField('Current Server', messsage.guild.name, true)
                .addField('Bot Version', version, true)
                .setColor(0x069740)
                .setThumbnail(messsage.author.defaultAvatarURL)
                .setFooter('By DarkRafe')
                .setDescription(dateString)
                messsage.channel.send(embed)
            } else {
                messsage.channel.send("(❁´◡`❁) Welcome to Dark's Bot (❁´◡`❁)\n\n%hello = Replies Hi\n%ping = Replies pong\n%info -version/--v = Shows bot version\n%info -profile/--p = Shows profile information")
            }
            break;
}
})


//Sends welcome messages to everyone who joins the server
bot.on('guildMemberAdd', guild=>{
    var userName = guild.displayName

    guild.send("Welcome to Noobs of Valorant, " + userName + ". You have joined the server at:\n\n" + guild.joinedAt + ".\n\nPlease send your riot ID at the text channel #riot_id.\nEnjoy your stay! (●'◡'●)");
})


bot.login(token);