const { EmbedBuilder, ApplicationCommandType } = require("discord.js");

module.exports = {
  name: "about",
  description: "description!",
  type: ApplicationCommandType.ChatInput,
  run: async (client, interaction) => {
    const about = new EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL() })
    .setDescription(`> *${interaction.user}!*\n\n> test test test test command execute!*`)

    return await interaction.reply({ embeds: [about] })
  },
};


