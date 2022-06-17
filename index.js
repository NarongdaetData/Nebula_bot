
//import DiscordJS, {Intents} from 'discord.js'
const { Client, Intents } = require('discord.js');
require('dotenv').config();

// const myIntents = new Intents();
// myIntents.add(Intents.FLAGS.GUILDS
//               ,Intents.FLAGS.GUILD_MESSAGES);


const client = new Client({ intents: 32767 });



client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("messageCreate", msg => {

  //if (!msg.isChatInputCommand()) return;
  
  if (msg.content === "pingg") {
    msg.reply("pong") 
  }
})


client.login(process.env.DISCORD_BOT_TOKEN)

