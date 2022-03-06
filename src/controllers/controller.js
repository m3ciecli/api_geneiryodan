const { Client } = require("discord.js")
const { badges } = require("discord-badges")

const fetch = require("node-fetch-commonjs")
module.exports = {
    /**
     * @param {Client} client
     */
    getUserInformation: async (req, res, client) => {
        const { id } = req.params;

        if(!id) return res.json({ message: "Insira o id de um usuário. "});

        let userObj = await client.users.fetch(id);

        userObj.nitro = false;
        userObj.badges = [];
		
        try {
            if((await client.guilds.resolve("221998834308349952").members.fetch(id)).premiumSince) {
                userObj.nitro = true;
            }
        } catch(err) {
            userObj.nitro = false;
        }

        userObj.badges = await badges(userObj);

        return res.json(userObj)
    }
}