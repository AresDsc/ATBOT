const { commands } = require("../..");

module.exports = {
    name: "interactionCreate",
    
    async execute(interaction, client) {
        if (interaction.isCommand()) {
            await interaction.deferReply({ ephemeral: false}).catch(() => {});

            const command = client.commands.get(interaction.commandName);
            if (!command) return interaction.followUp({content: "Cette commande n'existe pas."}) && client.commands.delete(interaction.commandName);

            command.execute(client, interaction);
        }
    }
}