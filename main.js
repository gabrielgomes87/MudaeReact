const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('O MudaeReact esta online!');
});

client.login('ODAzOTkzMTcwODYxNzUyMzYw.YBF2_Q.sEVdMEBHAx0jhfrlEDMx9iAMbZM');


client.on("message", (msg) => {
    msg.embeds.forEach((embed) => {
        var str = embed.description
        console.log(embed.description);
        console.log(str.includes('Claims:'));
        if (str.includes('Claims:'))
            msg.react('❤️');
        });
});
