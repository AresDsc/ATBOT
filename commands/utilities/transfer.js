const { MessageEmbed } = require ('discord.js');
module.exports = {
    name: 'transfer',
    description: "Transfer.",
    execute(client, interaction) {
        interaction.followUp("Please wait...").then(async msg => {
            await msg.edit(`Transfer **done** with <@1051605537147592815>.`)
          });
    }
}