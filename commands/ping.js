const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong and shows the bot\'s ping!'),
  async execute(interaction) {
    const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });

    const embed = new EmbedBuilder()
      .setColor(config.embedcolor)
      .setTitle('Pong!')
      .setDescription(`🏓 Latency is ${sent.createdTimestamp - interaction.createdTimestamp}ms\n
      📡 API Latency is ${Math.round(interaction.client.ws.ping)}ms`)
      .setTimestamp();

    await interaction.editReply({ content: null, embeds: [embed] });
  },
}; // Made by Danteon | github.com/Danteon0 <3