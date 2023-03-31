const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("pom")
    .setDescription("Make your pomodoro timer!!")
    .addSubcommand((cmd) => 
    cmd
    .setName("start")
    .setDescription("Start your sessions!!")
    .addNumberOption((optn) => 
     optn
     .setName("session-time")
     .setDescription("Enter session time in minutes")
     .setMinValue(15)
     .setMaxValue(180)
     .setRequired(true)
    )
    .addNumberOption((optn) => 
     optn 
     .setName("break-time")
     .setDescription("Enter break time in minutes")
     .setMaxValue(50)
     .setMinValue(5)
     .setRequired(true)
    )
    .addNumberOption((optn) => 
    optn 
    .setName("session-count")
    .setDescription("Enter the number of sessions you want to perform")
    .setRequired(true)
    .setMaxValue(12)
    .setMinValue(2)
    )
    )

    .addSubcommand((cmd) => 
    cmd
    .setName("session")
    .setDescription("change your session time!!")
    .addNumberOption((opt) => 
    opt
    .setName("session-time")
    .setDescription("Set your session time (IN MINUTES)!! Effective from next session!!")
    .setRequired(true)
    .setMinValue(15)
    )
    )
    
    .addSubcommand((cmd) => 
    cmd
    .setName("break")
    .setDescription("set your break Time!!")
    .addNumberOption((opt) => 
    opt
    .setName("break-time")
    .setDescription("Change your break time!! (IN MINUTES)")
    .setRequired(true)
    )
    )

    .addSubcommand((cmd) => 
    cmd
    .setName("close-pom")
    .setDescription("Close your pom session channels!!")
    )
    
}