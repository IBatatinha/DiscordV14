const client = require("../../index");
const Discord = require("discord.js")
client.on("interactionCreate", async interaction =>{
  if(interaction.isChatInputCommand()){

    const cmd = client.slashCommands.get(interaction.commandName);

    if(!cmd) return interaction.reply(`There was a friend error.`);
    
    interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);

    cmd.run(client, interaction)

  }

});