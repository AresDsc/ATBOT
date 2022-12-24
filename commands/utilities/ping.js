const { MessageEmbed } = require ('discord.js');
module.exports = {
    name: 'ping',
    description: "Sends the client's ping.",
    execute(client, interaction) {
        interaction.followUp("Please wait...").then(async msg => {
            await msg.edit(`**Client** ping is currently** ${Math.floor(msg.createdTimestamp - interaction.createdTimestamp)} ms**.`)
          });
    }
}