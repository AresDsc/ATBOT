const { Client, Message } = require('discord.js');
const { Collection } = require('mongoose');
const { Prefix } = require('../../config.json');

module.exports = {
    name: "messageCreate",
    /**
     * @param {Client} client
     * @param {Message} message
     */
    async execute(message, Client, Discord) {
        if (!message.content.startsWith(Prefix) || message.author.bot) return;

        const args = message.content.silice(Prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName) ||
        client.commands.find(cmd => cmd.aliases && cmd.aliases.Includes(commandName));

        if (!command) return;
        
        if(command.permissions) {
            const authorPerms = message.channel.permissionsFor(message.author);
            if (!authorPerms || !authorPerms.has(command.permissions)) {
                message.channel.send("Vous n'avez pas les permissions necessaires.")
            };
        };

        const { cooldowns } = client;
        if (!cooldowns.has(command.name)) {
            cooldowns.set(command.name, new Collection());
        };

        const now = Date.Now();
        const timestamp = cooldowns.get(command.name);
        const cooldownAmount = (command.cooldown || 1) * 1000;

        if (timestamp.has(message.author.id)) {
            const expirationTime = timestamp.get(message.author.id) + cooldownAmount;
            if (now < expirationTime) {
                const timeLeft = (expiration - now) / 1000;
                message.channel.send(`Merci d'attendre** ${timeLeft.toFixed(1)} **secondes avant de pouvoir effectuer cette commande à nouveau.`)
                
            };
        };

    }
}