const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('avatar')
    .setDescription('Shows the avatar of the specified user or you.')
    .addUserOption(option => 
      option.setName('kullanıcı')
        .setDescription('The user whose avatar you want to see')
    ),
  async execute(interaction) {
    const user = interaction.options.getUser('user') || interaction.user;

    const embed = new EmbedBuilder()
      .setColor(config.embedcolor)
      .setAuthor({ name: user.tag, iconURL: user.displayAvatarURL({ dynamic: true }) })
      .setTitle('Avatar')
      .setImage(user.displayAvatarURL({ dynamic: true, size: 512 }));

    await interaction.reply({ embeds: [embed] });
  },
}; // Made by Danteon0 | github.com/Danteon0 <3