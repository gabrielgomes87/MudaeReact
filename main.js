const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
    ],
});

client.once('ready', () => {
    console.log(`logged ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
    if (message.embeds.length > 0) { 
        message.embeds.forEach((embed) => {
            const description = embed.description.toLowerCase();             
            if (description.includes('reaja') || description.includes('react') || description.includes('reaccione') || description.includes('réagissez')) {
                message.react('❤️') 
                    .then(() => console.log('React Emoji Sent!')) 
                    .catch(console.error); 
            }
        });
    }
});

client.login('BOT_TOKEN_HERE'); 
