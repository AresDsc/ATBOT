const { on } = require('events');
const { readdirSync } = require('fs');

module.exports = (client, Discord) => {
  const commandFolders = readdirSync('./commands');
    for (const folder of commandFolders) {
    const commandFiles = readdirSync(`./commands/${folder}`).filter(files => files.endsWith('.js'));
    const commandsArry = [];
        for (const file of commandFiles) {
        const command = require(`../commands/${folder}/${file}`);
        client.commands.set(command.name, command);
        commandsArry.push(command);

          client.on("ready", () =>{
            client.guilds.cache.get("980907088479916032").commands.set(commandsArry);
          });
        };
    };
};