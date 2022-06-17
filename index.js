
//import DiscordJS, {Intents} from 'discord.js'
const { Client, Intents, CommandInteraction } = require('discord.js');
require('dotenv').config();

// const myIntents = new Intents();
// myIntents.add(Intents.FLAGS.GUILDS
//               ,Intents.FLAGS.GUILD_MESSAGES);


const client = new Client({ intents: 32767 });



client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)

  const guildID = '260718135341088769'
  const guild = client.guilds.cache.get(guildID)
  let command
  if(guild){
    command = guild.commands
  }else {
    command =  client.application?.commands
  }
  
  command?.create({
    name: 'pingg',
    description : 'Replies with pong',
  })

})

client.on("messageCreate", msg => {

  //if (!msg.isChatInputCommand()) return;
  
  if (msg.content === "pingg") {
    msg.reply("pong") 
  }
})

client.on('interactionCreate', async (interaction)=>{
  if(!interaction.isCommand()){
    return
  }
  const {commandName,options} = interaction
  if(commandName === 'pingg'){
    interaction.reply({
      content:'eiei2',
      ephemeral : true,
    })
  }
})


client.login(process.env.DISCORD_BOT_TOKEN)

