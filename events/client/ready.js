const { execute } = require("../../interactionCreate");

module.exports = {
    name: "ready",
    execute(client) {
        console.log('bot oppérationnel !');
        client.user.setActivity('Zero Dawn', {type: 'STREAMING', url:'https://twitch.tv/twitch'});
    }
};