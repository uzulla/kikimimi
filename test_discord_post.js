require('dotenv').config()

const web_hook_id = process.env.DISCORD_CH_WEBHOOK_ID;
const web_hook_token = process.env.DISCORD_CH_WEBHOOK_TOKEN;

const Discord = require('discord.js');
const hook = new Discord.WebhookClient(web_hook_id, web_hook_token);

const p = hook.send('pooh pooh pooh');
p.then(() => {
    console.log("sent message!");
}).catch(err => {
    console.log('got error');
    console.error(err);
}).finally(()=>{
    process.exit();
});

