const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("button-rolebox")
    .setDescription("Setup your rolebox using new and exciting buttons")
    .addSubcommand((subcommand) => 
    subcommand
    .setName('set-name')
    .setDescription('Give the name to your role')
    .addStringOption((option)=> 
    option
    .setName('embed-description')
    .setDescription("Write all the text you want in your embed!! **Tip: use `\ n` for space** ")
    .setRequired(true)
    )
    .addRoleOption((option) => 
    option
    .setName('role')
    .setDescription("Provide the role which you want to add")
    .setRequired(true)
    )
    .addRoleOption((option) => 
    option
    .setName('role1')
    .setDescription("Provide Role")
    .setRequired(false)
    )
    .addRoleOption((option) => 
    option
    .setName('role2')
    .setDescription("Provide Role")
    .setRequired(false)
    )
    .addRoleOption((option) => 
    option
    .setName('role3')
    .setDescription("Provide Role")
    .setRequired(false)
    )
    .addRoleOption((option) => 
    option
    .setName('role4')
    .setDescription("Provide Role")
    .setRequired(false)
    )
    )
}