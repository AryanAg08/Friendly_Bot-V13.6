module.exports = {
    commands: ['end', 'leave'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {

        if (message.guild.id === "780879327263719424") {
        //add member focus role and remove verified role
       if (message.member.roles.cache.has('802162782907793418')) {
           message.channel.send('You are **Locked** You cannot leave by this command. Please ping any mod or use **!ticket** to get unlocked.')
       } else {
        const focus = message.client.channels.cache.get('787049814118498315');
        focus.send(`Welcome to normal mode <@${message.author.id}>.You are now free. :partying_face:`);
        message.member.roles.add('787329191799685120');
        message.member.roles.remove('797802469190926376');
        message.member.roles.remove('797955709319774218');
        message.member.roles.remove('803985889083654191');  
        message.member.roles.remove('811553891187032084');   
    }
} else {
        if (message.member.roles.cache.has('735089477088837673')) {
        message.reply(`You are **Locked in Focus**, I will not remove the focus role. If you are stuck please write the command **!ticket** to get you in a Support Channel.`)
    } else {
        const general = message.client.channels.cache.get('765171377447239700');
       
        general.send(`<@${message.author.id}> you have left the **Focus Mode** and the **Study Team**!`)
         message.member.roles.remove('729706682308886548');
         message.member.roles.add('707547622591692911');
    }
}
    },
}