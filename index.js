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

client.login("NDkxMjgyNzg2OTQ3MzAxMzg4.W5_UwA.Rl3KTCtj_k9R2Raqm_MfMtNpSoU")
