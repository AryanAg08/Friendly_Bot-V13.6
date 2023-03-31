module.exports = {
    commands: ["verify"],
    minArgs: 0,
    permissions: ["MANAGE_CHANNELS"],
    GUILD: ["703937875720273972"],
    callback: async (message, arguments) => {
        const { author, guild } = message;

        const userr = arguments[0];

        try {
            const check = message.guild.members.cache.get(userr);

            if (check) {
                check.roles.add("707547622591692911");
                check.roles.remove("739920051208978495");
                message.reply("verified ;)");
            }
        } 
        catch (err) {
            console.log(err);
        }

 
        
    }
}