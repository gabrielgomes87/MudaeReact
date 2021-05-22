const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Mudae React ON!');
});

client.login('TOKEN_HERE');


client.on("message", (msg) => {
    msg.embeds.forEach((embed) => {
        var str = embed.description
        var color = embed.color
        console.log(embed.description);
        console.log(str.includes('React'));
        if (color === 16751916)
            msg.react('♥️');
        });
});
