module.exports = {
    commands: ['focus'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        if (message.guild.id === "780879327263719424") {
        //add member focus role and remove verified role
        
        const focus = message.client.channels.cache.get('797803212224200765');
        focus.send(`Welcome in **Focus** mode <@${message.author.id}>. Remember not to talk here. :eyes: `);
        message.member.roles.add('797802469190926376');
        message.member.roles.remove('787329191799685120');
        const user = message.author.id
    } else {
        const focus = message.client.channels.cache.get('730185814822223962');
        focus.send(`Welcome in **Focus** mode <@${message.author.id}> - to exit please use **!leavefocus**. To end both the team and the focus use **!end**.`);
        message.member.roles.add('729706682308886548');
        message.member.roles.remove('707547622591692911');
    }
},
}