module.exports = {
    app: {
        playing: "Created by Christian Bossé 🎮",
    },
    opt: {
        defaultvolume: 80,
        maxVol: 100,
        minVol: 0,
        leaveOnEndCooldown: 3000, // 3 seconds
        leaveOnEmpty: true,
        leaveOnEnd: true,
        leaveOnEmptyCooldown: 30000, // 30 seconds
        leaveOnStop: true,
        discordPlayer: {
            ytdlOptions: {
                quality: "highestaudio",
                highWaterMark: 1 << 25,
            },
        },
        maxNumberOfChoices: 10,
    },
    paginate: {
        pageTravel: true,
        fastSkip: true,
        time: 60000,
        disableButtons: true,
        itemsPerPage: 8,
    },
};
