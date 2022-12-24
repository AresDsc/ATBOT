const { promisify } = require ("util");
const { glob } = require ("glob");
const pGlob = promisify(glob);

module.exports = async (client) => {
    (await pGlob(`${process.cwd()}/commands/*/*.js`)).map(async (cmFile) => {
        const cmd = require(cmdFile);

        if (!cmd.nam || !cmd.description) return console.log(`Commande non-chargée: pas de nom/description\nFichier = ${cmdFile}`);

        client.commands.set(cmd.name, cmd);
        console.log(`Commande chargée: ${cmd.name}`);
    });
};