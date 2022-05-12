module.exports = {
    commands: ["Hello"],
    minArgs: 0,
    permissions: ["MANAGE_ROLES"],
    callback: async (message) => {
        message.reply(`hiii!!`)
    }
}