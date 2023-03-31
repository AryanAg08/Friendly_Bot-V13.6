module.exports = {
    commands: ["verify"],
    minArgs: 0,
    permissions: ["MANAGE_CHANNELS"],
    GUILD: ["703937875720273972"],
    callback: async (message, arguments) => {
        const { author, guild } = message;

        const userr = arguments[1];

        console.log(userr);


 
        
    }
}