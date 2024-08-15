const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong and shows the bot\'s ping!'),
  async execute(interaction) {
    const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });

    const embed = new EmbedBuilder()
      .setColor(0x0099FF)
      .setTitle('Pong!')
      .setDescription(`🏓 Latency is ${sent.createdTimestamp - interaction.createdTimestamp}ms\n
      📡 API Latency is ${Math.round(interaction.client.ws.ping)}ms`)
      .setTimestamp();

    await interaction.editReply({ content: null, embeds: [embed] });
  },
}; // Made by Danteon0 | github.com/Danteon0 <3