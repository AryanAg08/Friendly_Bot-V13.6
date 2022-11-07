const { Verification, HELP } = require("../functions/3Slash(b)");

module.exports = (client) => {
    client.on('interactionCreate', async interaction => {
        if (!interaction.isCommand()) return;
        if (interaction.channel.type === "DM") return;
        const {
            help,
            SetupBday,
            SetupDisable,
            SetupEnable,
            SetupForest,
            SetupPrefix,
            SetupSchedule,
            SetupStats,
            SetupVcStudy,
            SetupWelcome,
            BdayAdd,
            BdayList,
            Bdayhelp,
            Warning,
            WarningStats,
            ServerInvites,
            Ping,
            Quote,
            Dashbaord,
            CustomCmd,
            Schedule,
            Report,
            StudyTime,
            ForestCode,
            ForestHelp,
            TODOADD,
            TODODONE,
            TODOREMOVE,
            TODORESET,
            TODOSCORE,
            TicketClose,
            TicketOpen,
            Purge,
            TODOLIST,
            SetupSupport
        } = require("../functions/1slash");
        const { commandName } = interaction;

        if (commandName === "help") {
            HELP(interaction);
        }

        if (commandName === "setup") {
            const SUB = interaction.options.getSubcommand();
            if (SUB === "stats") {
                SetupStats(interaction);
            }
            if (SUB === "support") {
                SetupSupport(interaction);
            }
            if (SUB === "schedule") {
                SetupSchedule(interaction);
            }
            if (SUB === "vc-study") {
                SetupVcStudy(interaction);
            }
            if (SUB === "forest-session") {
                SetupForest(interaction);
            }
            if (SUB === "bday") {
                SetupBday(interaction);
            }
            if (SUB === "prefix") {
                SetupPrefix(interaction);
            }
            if (SUB === "welcome") {
                SetupWelcome(interaction);
            }
            if (SUB === "enable-commands") {
                SetupEnable(interaction);
            }
            if (SUB === "disable-commands") {
                SetupDisable(interaction);
            }
        }

        if (commandName === "birthday") {
            const SUB = interaction.options.getSubcommand();
            if (SUB === "help") {
                Bdayhelp(interaction);
            }
            if (SUB === "add") {
                BdayAdd(interaction);
            }
            if (SUB === "list") {
                BdayList(interaction);
            }
        }

        if (commandName === "warn") {
            const SUB = interaction.options.getSubcommand();

            if (SUB === "warn-user") {
                Warning(interaction);
            }
            if (SUB === "stats") {
                WarningStats(interaction);
            }
        }

        if (commandName === "server-invites") {
            ServerInvites(interaction);
        }

        if (commandName === "purge") {
            Purge(interaction);
        }

        if (commandName === "ticket") {
            const SUB = interaction.options.getSubcommand();
            if (SUB === "open") {
                TicketOpen(interaction);
            }
            if (SUB === "close") {
                TicketClose(interaction);
            }
        }

        if (commandName === "ping") {
            Ping(interaction);
        }

        if (commandName === "quote") {
            Quote(interaction);
        }

        if (commandName === "forest") {
            const SUB = interaction.options.getSubcommand();

            if (SUB === "help") {
                ForestHelp(interaction);
            }
            if (SUB === "code") {
                ForestCode(interaction);
            }
        }

        if (commandName === "todo") {
            const SUB = interaction.options.getSubcommand();
            if (SUB === "add") {
                TODOADD(interaction);
            }
            if (SUB === "done") {
                TODODONE(interaction);
            }
            if (SUB === "list") {
                TODOLIST(interaction);
            }
            if (SUB === "reset") {
                TODORESET(interaction);
            }
            if (SUB === "remove") {
                TODOREMOVE(interaction);
            }
            if (SUB === "score") {
                TODOSCORE(interaction);
            }
        }

        if (commandName === "studytime") {
            StudyTime(interaction);
        }

        if (commandName === "report") {
            Report(interaction);
        }

        if (commandName === "schedule") {
            Schedule(interaction);
        }

        if (commandName === "create-cmd") {
            CustomCmd(interaction);
        }

        if (commandName === "dashboard") {
            Dashbaord(interaction);
        }

        if (commandName === "verification") {
               Verification(interaction);
        }
    });

} 