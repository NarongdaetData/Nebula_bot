const { Client, Intents } = require('discord.js');
require('dotenv').config();

const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILDS
              ,Intents.FLAGS.GUILD_MESSAGES);

const client = new Client({ intents: myIntents });



client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {

  //if (!msg.isChatInputCommand()) return;
  
  if (msg.content === "pingg") {
    msg.reply("pong")
    
  }
})

const mySecret = process.env.DISCORD_BOT_TOKEN
console.log(mySecret)
client.login(mySecret)

