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
        console.log(str.includes('Reaja'));
        if (str.includes('Reaja'))
        console.log(str.includes('React'));
        if (str.includes('Reaja'))
            msg.react('♥️');
        if (str.includes('React'))
            msg.react('♥️');
        });
});
