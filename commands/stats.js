const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const moment = require('moment');
require('moment-duration-format');
const os = require('os');
const config = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('statistics')
        .setDescription('Displays the bot statistics.'),
    async execute(interaction) {
        const uptime = moment.duration(interaction.client.uptime).format("D [days], H [hours], m [minutes], s [seconds]");
        const statistics = new EmbedBuilder()
            .setColor(config.embedcolor)
            .setFooter({ text: 'Your Bot Statistics', iconURL: interaction.client.user.avatarURL() })
            .addFields(
                { name: "» **Bot Owner**", value: "<@AUTHOR_ID> | Your Bot", inline: false },
                { name: "» **Developer**", value: "<@AUTHOR_ID>", inline: false },
                { name: "» **Memory Usage**", value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, inline: true },
                { name: "» **Uptime**", value: `${uptime}`, inline: false },
                { name: "» **Users**", value: `${interaction.client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, inline: true },
                { name: "» **Servers**", value: `${interaction.client.guilds.cache.size.toLocaleString()}`, inline: true },
                { name: "» **Channels**", value: `${interaction.client.channels.cache.size.toLocaleString()}`, inline: true },
                { name: "» **Discord.JS Version**", value: `v${require('discord.js').version}`, inline: true },
                { name: "» **Node.JS Version**", value: `${process.version}`, inline: true },
                { name: "» **Ping**", value: `${interaction.client.ws.ping} ms`, inline: true },
                { name: "**» Bot Invite**", value: "[Invite](YOUR BOT INVITE ADRESS)", inline: false },
                { name: "**» Support Server**", value: "[Join our server](YOUR SUPPORT SERVER)", inline: false },
                { name: "**» Vote Page**", value: "[Vote for us!](VOTE LINK)", inline: false }
            );
        
        await interaction.reply({ embeds: [statistics] });
    },
};
