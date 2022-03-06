const { Client, Collection, Intents } = require("discord.js");

process.on("unhandledRejection", (err) => {
    console.log(err);
});

client = new Client({ intents: [
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGES, 
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_MEMBERS
]});

require("./src/index")(client)

client.login("OTM3MDcwMDE0ODYxODAzNTcx.YfWYdQ.PJ8yPhR70G0P1XOv5bQYso_93qE")