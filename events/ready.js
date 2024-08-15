const { ActivityType } = require('discord.js');

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}.`);
        
        // Bot ready
        client.user.setPresence({
            activities: [{ name: 'github.com/Danteon0', type: ActivityType.Watching }],
            status: 'online',
        });

        //* Discord Activity Types!
        //
        // Listening => Listening to {name}
        // Playing => Playing {name}
        // Streaming => Streaming {name}
        // Watching => Watching {name}

        //* Dİscord Bot Status Types!
        //
        // Idle
        // Online
        // Offline
        // Dnd

    },
}; // Made by Danteon0 | github.com/Danteon0 <3