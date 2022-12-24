const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [32767] });
module.exports = client;
const { SlashCommandBuilder } = require("@discordjs/builders");
const fs = require('fs')
const Discord = require("discord.js")
const { clientconfig } = require('./config.json');
const { executionAsyncResource } = require('async_hooks');

  
client.commands = new Discord.Collection()

const jsp = [`events`, `commands`];
jsp.forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

require("dotenv").config();
client.on("guildMemberAdd", (member) => {
    let guild = client.guilds.cache.get("980907088479916032");
    let channel = client.channels.cache.get("986597792006959124");

   if (guild != member.guild) {
        return console.log('Un nouveaux membre est arrivé !')
    }else {

        channel.send({content: `<@!${member.id}>  ×  ||<@&1049086045444120656>||`})
        
    const embed  = new Discord.MessageEmbed()
    .setAuthor(member.user.tag + " vient d'apparaître.")
    .setColor('#5ac26d')
    .setDescription(`> <a:AIconWelcome:986700801634336828> Souhaitez lui la bienvenue dans **Zero Dawn** !`);

channel.send({embeds: [embed] })
    }
})

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.login(process.env.TOKEN);