const { MessageEmbed } = require ('discord.js');
module.exports = {
    name: 'update',
    description: "Update.",
    execute(client, interaction) {
        interaction.followUp("Please wait...").then(async msg => {
            await msg.edit(`Update **done**.`)
          });
    }
}