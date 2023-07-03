module.exports = {
    commands: ["addvc"],
    minArgs: 1,
    callback: async (message, arguments) => {
        console.log(arguments[0]);
        
    }
}