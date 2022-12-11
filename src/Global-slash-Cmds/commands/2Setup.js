const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions  } = require("discord.js") 

const FLAGS = [
    "ADMINISTRATOR"
]

const perms = new Permissions(FLAGS); 

module.exports = {
    data: new SlashCommandBuilder()
        .setName("setup")
        .setDescription('Setup the bot features!!')
        .setDefaultPermission(perms['bitfield'])
        .addSubcommand((subcommand) =>
            subcommand
                .setName('stats')
                .setDescription(`Create 2 default vc count.`)
        )

        .addSubcommand((subcommand) => 
        subcommand
        .setName('support')
        .setDescription("Setup your server's support channel category!!")
        .addChannelOption((option) => 
             option
             .setName("category")
             .setDescription('Select only category!!')
             .setRequired(true)
        )
        )
        .addSubcommand((subcommand) => 
        subcommand 
        .setName('deadline')
        .setDescription('Setup Deadline module for your server')
        .addChannelOption((options)=> 
        options
        .setName('deadline-channel')
        .setDescription('Setup deadline channel')
        )
        .addRoleOption((options) =>
        options 
        .setName('deadline-role')
        .setDescription('Setup deadline role')
        )
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName('schedule')
                .setDescription('Sets schedule channel')
                .addChannelOption((option) =>
                    option
                        .setName('schedule-channel')
                        .setDescription('Select a channel')
                        .setRequired(false)
                )
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName("vc-study")
                .setDescription("Sets Voice channel for couting study-time and role!!")
                .addRoleOption((option) =>
                    option
                        .setName('study-role')
                        .setDescription('select role that will be given to user when joining vc for counting time!!')
                        .setRequired(false)
                )
                .addChannelOption((option) =>
                    option
                        .setName('vc-channel')
                        .setDescription('set channel where you want to count time!!')
                        .setRequired(false)
                )
                .addChannelOption((option) =>
                    option
                        .setName('logs-channel')
                        .setDescription('Notifications when user joins the vc!!')
                        .setRequired(false)
                )
                .addStringOption((option) =>
                    option
                        .setName("custom-message")
                        .setDescription('set custom message for users joining vc! *for pinging user use **${user}***')
                        .setRequired(false)
                )
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName('forest-session')
                .setDescription("set the forest sessions channel!!")
                .addChannelOption((option) =>
                    option
                        .setName('forest-channel')
                        .setDescription('Select the channel for forest sessions')
                        .setRequired(false)
                )
                .addRoleOption((option) =>
                    option
                        .setName('forest-role')
                        .setDescription('select role for pinging when tree is planted')
                        .setRequired(false)
                )
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName('bday')
                .setDescription('Set channel to display birthday and wishes. !bday or /bday for more info')
                .addChannelOption((option) =>
                    option
                        .setName('bday-channel')
                        .setDescription('select bday wishes channel!!')
                        .setRequired(true)
                )
                .addRoleOption((option) =>
                    option
                        .setName("bday-role")
                        .setDescription('set bday role for user')
                        .setRequired(false)
                )
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName('prefix')
                .setDescription('change prefix for your server!!')
                .addStringOption((option) =>
                    option
                        .setName('new-prefix')
                        .setDescription("new prefix for the bot!!")
                        .setRequired(true)
                )
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName("welcome")
                .setDescription('Set welcome channel and autom role to give user which joins the server!!')
                .addIntegerOption((option) =>
                    option
                        .setName('welcome-dm')
                        .setDescription('If you wanna set welcome direct messages to users!! 1- for YES 2 for NO')
                        .setRequired(true)
                        .setMaxValue(2)
                        .setMinValue(1)
                )
                .addChannelOption((option) =>
                    option
                        .setName('welcome-channel')
                        .setDescription('select a channel')
                        .setRequired(false)
                )
                .addRoleOption((option) =>
                    option
                        .setName('auto-role')
                        .setDescription('role given to users automatically when joining server!')
                        .setRequired(false)
                )
                .addStringOption((option) =>
                    option
                        .setName('welcome-message')
                        .setDescription('Set a welcome message for newcomers!!')
                )

        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName('enable-commands')
                .setDescription('Functions list for your server!!')
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName('disable-commands')
                .setDescription('disable functions for your server!!')
        )
};
//   const clientId = '788504398912290887'; // 790503195620671498  --> Friendly_bot