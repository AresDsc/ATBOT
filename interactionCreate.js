module.exports = {
    name: "interactionCreate",
    once: false,
    async execute(client, interaction) {
       if (interaction.isCommand()) {
        const cmd = client.commands.get(interation.commandName);
        if (!cmd) return interaction.reply('Command existe pas!');
        cmd.runSlash(client, interaction);
       }
    },
};