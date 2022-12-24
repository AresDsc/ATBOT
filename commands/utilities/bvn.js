const { MessageEmbed } = require ('discord.js');
const { userMention } = require('@discordjs/builders');
module.exports = {
    name: 'bvn',
    description: 'Welcome a member.',
    options:[
        {
            name: "user",
            description: "Choose an user.",
            type: "USER",
            required: true
        },
    ],
    execute(client, interaction) {
        const User = interaction.options.getUser("user");
        interaction.followUp(`${interaction.user} souhaite **la bienvenue** à ${User}!`)
    }
}