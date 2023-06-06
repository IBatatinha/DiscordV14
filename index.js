const { GatewayIntentBits, Client, Collection } = require("discord.js")

const config = require("dotenv").config().parsed;

const client = new Client({ 
  intents: [ 
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent, 
    GatewayIntentBits.GuildMembers,  
    GatewayIntentBits.GuildVoiceStates, 
   ]
});

client.on("error", (error) => {
  console.error("An error has occurred:", error);
});

module.exports = client;

client.slashCommands = new Collection();
client.prefixCommands = new Collection();

require("./handlers")(client);

client.login(config.TOKEN);