const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Mudae React ON!');
});

client.login('TOKEN_HERE');


client.on("message", (msg) => {
    msg.embeds.forEach((embed) => {
        var str = embed.description
        console.log(embed.description);
    try{
        if (str.includes('Reaja')){
          msg.react('♥️');
        console.log(str.includes('Reaja'))
        } else if (str.includes ('React')){
          msg.react('♥️');
        console.log(str.includes('React'))
        } else if (str.includes('Reaccione')){
          msg.react('♥️');
        console.log(str.includes('Reaccione'))
        } else if (str.includes ('Réagissez')){
          msg.react('♥️');
        console.log(str.includes('Réagissez'))
        }
    }
    catch(e) {
      if (e.name.toString() == "TypeError")
        console.log("Error Null")
    }
})});