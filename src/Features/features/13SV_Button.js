module.exports = (client) => {
    client.on('interactionCreate', async interaction => {
        if (!interaction.isButton()) return;
        if (interaction.isButton()) {
            const code1 = 'MED01'
            const code2 = "TK002"
            const BUTTONID = interaction.customId;
            const member = interaction.member;

            if (interaction.guild.id === "703937875720273972") {
            
            // Roles ---//
            const hs = "750853349984829460"
            const Batchelor = "750853181193322627"
            const Master = "751095914583818381"
            const PhD = "750853030303498263"
            const Working = "750853283576414290"
            const He_Him = "751415673611223170"
            const She_Her = "751415779504685146"
            const They_Them = "751415880730148975"
            const __Personal__ = "751089899603493014"
            const Asia = "832986544431955998"
            const Australia = "832986668860178484"
            const Africa = "832986647482073128"
            const Europe = "832986654788681729"
            const North = "832986661478465557"
            const South = "832986665097101372"
            const Antartica = "834056553497624627"
            const T30 = "751085843443089519"
            const T60 = "751085980663939093"
            const T180 = "751086099580977287"
            const __Tree_Length__ = "751089212463382538"
            const Coffee = "932779131945496626"
            const Tree = "932779493930725376"
            const Pom = "932779503200129074"
            const StudyLog = "932779509692915712"
            const week = "932780006600486942"
            const __Special__ = "751090050573533215"
            const YT = "779417807095201813"
            const Meditation = "980134800549609513"
            const Water = "884001024581439489"
            const Fun = "998504872959815690"
            const StudyEvent = "955012907807158302"
            const BOOKCLUB = "1008417034499006544"
            const arabic = "1010619457825153116"
            const dutch = "1010620511807619132"
            const french = "1010620981439635559"
            const hindi = "1010622275399188500"
            const turkish = "1010622322845155421"
            const anos = "1010759103955599411"
            const nezuko = "1010760039037935677"
            const gojo = "1010759561394794647"
            const naruto = "1010760042871529544"
            const anya = "1010760575279698030"
            const focus = "729706682308886548"
            const Vincent = "1023582277399228466"

            const Code1 = "HS0001"
            const Code2 = "BL0002"
            const code3 = "MS0003"
            const code4 = "PH0004"
            const code5 = "WK0005"
            const code6 = "HE006"
            const code7 = "SH0008"
            const code8 = "TH0009"
            const code9 = "AC0009" // Africa 
            const code10 = "AS0010" // Asia
            const code11 = "AA0011" // Australia
            const code12 = "EP0012" // Europe 
            const code13 = "NA0013" // NA
            const code14 = "SA0014" // SA
            const code15 = "ANT0015" // antartica
            const code16 = "3T0015"
            const code17 = "6T0016"
            const code18 = "8T0017"
            const code19 = "CS0019"
            const code20 = "FS0020"
            const code21 = "PS0021"
            const code22 = "SL0022"
            const code23 = "SN0023"
            const code24 = "FG0024"
            const code25 = "WR0026"
            const code26 = "YT0027"
            const code27 = "MD0028"  
            const code28 = "SE0029" 
            const code29 = "BC0030"
            const code30 = "ARABIC"
            const code31 = "DUTCH"
            const code32 = "FRENCH"
            const code33 = "HINDI"
            const code34 = "TURKISH"
            const code35 = "Anos"
            const code36 = "Nezuko"
            const code37 = "Gojo"
            const code38 = "Naruto"
            const code39 = "Anya"
            const code40 = "Focus"
            const code41 = "VS0001"

            if (BUTTONID === Code1) {
                if (member.roles.cache.has(hs)) { // if they already have the role
                    member.roles.remove(hs); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(hs); // add it
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }

            }
            if (BUTTONID === Code2) {
                if (member.roles.cache.has(Batchelor)) { // if they already have the role
                    member.roles.remove(Batchelor); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(Batchelor); // add it
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }

            }
            if (BUTTONID === code3) {
                if (member.roles.cache.has(Master)) { // if they already have the role
                    member.roles.remove(Master); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(Master); // add it
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }

            }
            if (BUTTONID === code4) {
                if (member.roles.cache.has(PhD)) { // if they already have the role
                    member.roles.remove(PhD); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(PhD); // add it
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }

            }
            if (BUTTONID === code5) {
                if (member.roles.cache.has(Working)) { // if they already have the role
                    member.roles.remove(Working); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(Working); // add it
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }

            }
            if (BUTTONID === code6) {
                if (member.roles.cache.has(He_Him)) { // if they already have the role
                    member.roles.remove(He_Him); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(He_Him); // add it
                    member.roles.add(__Personal__);
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }

            }
            if (BUTTONID === code7) {
                if (member.roles.cache.has(She_Her)) { // if they already have the role
                    member.roles.remove(She_Her); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(She_Her);
                    member.roles.add(__Personal__); // add it
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }

            }
            if (BUTTONID === code8) {
                if (member.roles.cache.has(They_Them)) { // if they already have the role
                    member.roles.remove(They_Them); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(They_Them); 
                    member.roles.add(__Personal__);// add it
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }

            }
            if (BUTTONID === code9) {
                if (member.roles.cache.has(Africa)) { // if they already have the role
                    member.roles.remove(Africa); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(Africa); // add it
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }

            }
            if (BUTTONID === code10) {
                if (member.roles.cache.has(Asia)) { // if they already have the role
                    member.roles.remove(Asia); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(Asia); // add it
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }

            }
            if (BUTTONID === code11) {
                if (member.roles.cache.has(Australia)) { // if they already have the role
                    member.roles.remove(Australia); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(Australia); // add it
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }

            }
            if (BUTTONID === code12) {
                if (member.roles.cache.has(Europe)) { // if they already have the role
                    member.roles.remove(Europe); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(Europe); // add it
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }

            }
            if (BUTTONID === code13) {
                if (member.roles.cache.has(North)) { // if they already have the role
                    member.roles.remove(North); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(North); // add it
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }

            }
            if (BUTTONID === code14) {
                if (member.roles.cache.has(South)) { // if they already have the role
                    member.roles.remove(South); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(South); // add it
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }

            }
            if (BUTTONID === code15) {
                if (member.roles.cache.has(Antartica)) { // if they already have the role
                    member.roles.remove(Antartica); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(Antartica); // add it
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }

            }
            if (BUTTONID === code16) {
                if (member.roles.cache.has(T30)) { // if they already have the role
                    member.roles.remove(T30); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(T30);
                    member.roles.add(__Tree_Length__) // add it
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }
            }
            if (BUTTONID === code17) {
                if (member.roles.cache.has(T60)) { // if they already have the role
                    member.roles.remove(T60); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(T60); // add it
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }
            }
            if (BUTTONID === code18) {
                if (member.roles.cache.has(T180)) { // if they already have the role
                    member.roles.remove(T180); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(T180); // add it
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }
            }
            if (BUTTONID === code19) {
                if (member.roles.cache.has(Coffee)) { // if they already have the role
                    member.roles.remove(Coffee); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(Coffee);
                    member.roles.add(__Special__); // add it
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }
            }
            if (BUTTONID === code20) {
                if (member.roles.cache.has(Tree)) { // if they already have the role
                    member.roles.remove(Tree); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(Tree); // add it
                    member.roles.add(__Special__);
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }
            }
            if (BUTTONID === code21) {
                if (member.roles.cache.has(Pom)) { // if they already have the role
                    member.roles.remove(Pom); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(Pom); // add it
                    member.roles.add(__Special__);
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }
            }
            if (BUTTONID === code22) {
                if (member.roles.cache.has(StudyLog)) { // if they already have the role
                    member.roles.remove(StudyLog); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(StudyLog); // add it
                    member.roles.add(__Special__);
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }
            }
            if (BUTTONID === code23) {
                if (member.roles.cache.has(week)) { // if they already have the role
                    member.roles.remove(week); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(week); // add it
                    member.roles.add(__Special__);
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }
            }
            if (BUTTONID === code24) {
                if (member.roles.cache.has(Fun)) { // if they already have the role
                    member.roles.remove(Fun); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(Fun); // add it
                    member.roles.add(__Special__);
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }
            }
            if (BUTTONID === code25) {
                if (member.roles.cache.has(Water)) { // if they already have the role
                    member.roles.remove(Water); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(Water); // add it
                    member.roles.add(__Special__);
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }
            }
            if (BUTTONID === code26) {
                if (member.roles.cache.has(YT)) { // if they already have the role
                    member.roles.remove(YT); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(YT); // add it
                    member.roles.add(__Special__);
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }
            }
            if (BUTTONID === code27) {
                if (member.roles.cache.has(Meditation)) { // if they already have the role
                    member.roles.remove(Meditation); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(Meditation); // add it
                    member.roles.add(__Special__);
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }
            }
            if (BUTTONID === code28) {
                if (member.roles.cache.has(StudyEvent)) { // if they already have the role
                    member.roles.remove(StudyEvent); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(StudyEvent); // add it
                    member.roles.add(__Special__);
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }
            }
            if (BUTTONID === code29) {
                if (member.roles.cache.has(BOOKCLUB)) { // if they already have the role
                    member.roles.remove(BOOKCLUB); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(BOOKCLUB); // add it
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }
            }
            if (BUTTONID === code30) {
                if (member.roles.cache.has(arabic)) { // if they already have the role
                    member.roles.remove(arabic); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(arabic); // add it
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }
            }
            if (BUTTONID === code31) {
                if (member.roles.cache.has(dutch)) { // if they already have the role
                    member.roles.remove(dutch); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(dutch); // add it
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }
            }
            if (BUTTONID === code32) {
                if (member.roles.cache.has(french)) { // if they already have the role
                    member.roles.remove(french); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(french); // add it
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }
            }
            if (BUTTONID === code33) {
                if (member.roles.cache.has(hindi)) { // if they already have the role
                    member.roles.remove(hindi); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(hindi); // add it
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }
            }
            if (BUTTONID === code34) {
                if (member.roles.cache.has(turkish)) { // if they already have the role
                    member.roles.remove(turkish); // remove it
                    return interaction.reply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add(turkish); // add it
                    return interaction.reply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    });
                }
            }
            const TREEE = require("../../models/42Tree");
            const GG = "703937875720273972"
            if (BUTTONID === code35) {
                if (member.roles.cache.has(anos)) { // if they already have the role
                    member.roles.remove(anos); // remove it
                    return interaction.reply({
                        content: 'Successfully removed from Anos team!',
                        ephemeral: true,
                    });
                } else { // if they don't have the role
                    member.roles.add(anos); // add it
                    const T2 = await TREEE.findOneAndUpdate({
                        GG,
                        user: member.id,
                    },{
                        TEAM: "Anos",
                        Goal: "Not Set",
                        ALLDONE: "2",
                    },{
                        upsert: true,
                        new: true,
                    })
                    return interaction.reply({
                        content: 'Successfully added **Anos** team role!',
                        ephemeral: true
                    });
                }
            }
            if (BUTTONID === code36) {
                if (member.roles.cache.has(nezuko)) { // if they already have the role
                    member.roles.remove(nezuko); // remove it
                    return interaction.reply({
                        content: 'Successfully removed from nezuko team!',
                        ephemeral: true,
                    });
                } else { // if they don't have the role
                    member.roles.add(nezuko); // add it
                    const T2 = await TREEE.findOneAndUpdate({
                        GG,
                        user: member.id,
                    },{
                        TEAM: "Nezuko",
                        Goal: "Not Set",
                        ALLDONE: "2",
                    },{
                        upsert: true,
                        new: true,
                    })
                    return interaction.reply({
                        content: 'Successfully added **Nezuko** team role!',
                        ephemeral: true
                    });
                }
            }
            if (BUTTONID === code37) {
                if (member.roles.cache.has(gojo)) { // if they already have the role
                    member.roles.remove(gojo); // remove it
                    return interaction.reply({
                        content: 'Successfully removed from gojo team!',
                        ephemeral: true,
                    });
                } else { // if they don't have the role
                    member.roles.add(gojo); // add it
                    const T2 = await TREEE.findOneAndUpdate({
                        GG,
                        user: member.id,
                    },{
                        TEAM: "Gojo",
                        Goal: "Not Set",
                        ALLDONE: "2",
                    },{
                        upsert: true,
                        new: true,
                    })
                    return interaction.reply({
                        content: 'Successfully added **Gojo** team role!',
                        ephemeral: true
                    });
                }
            }
            if (BUTTONID === code38) {
                if (member.roles.cache.has(naruto)) { // if they already have the role
                    member.roles.remove(naruto); // remove it
                    return interaction.reply({
                        content: 'Successfully removed from naruto team!',
                        ephemeral: true,
                    });
                } else { // if they don't have the role
                    member.roles.add(naruto); // add it
                    const T2 = await TREEE.findOneAndUpdate({
                        GG,
                        user: member.id,
                    },{
                        TEAM: "Naruto",
                        Goal: "Not Set",
                        ALLDONE: "2",
                    },{
                        upsert: true,
                        new: true,
                    })
                    return interaction.reply({
                        content: 'Successfully added **Naruto** team role!',
                        ephemeral: true
                    });
                }
            }
            if (BUTTONID === code39) {
                if (member.roles.cache.has(anya)) { // if they already have the role
                    member.roles.remove(anya); // remove it
                    return interaction.reply({
                        content: 'Successfully removed from Anya team!',
                        ephemeral: true,
                    });
                } else { // if they don't have the role
                    member.roles.add(anya); // add it
                    const T2 = await TREEE.findOneAndUpdate({
                        GG,
                        user: member.id,
                    },{
                        TEAM: "Anya",
                        Goal: "Not Set",
                        ALLDONE: "2",
                    },{
                        upsert: true,
                        new: true,
                    })
                    return interaction.reply({
                        content: 'Successfully added **Anya** team role!',
                        ephemeral: true
                    });
                }
            }
            if (BUTTONID === code40) {
                if (member.roles.cache.has(focus)) {
                    member.roles.remove(focus);
                    return interaction.reply({
                        content: "Removed focus role!!",
                        ephemeral: true,
                    });
                } else {
                    member.roles.add(focus);
                    return interaction.reply({
                        content: 'Successfully added focus role! \n Good luck 🍀',
                        ephemeral: true
                    })
                }
            }

            if (BUTTONID === code41) {
                if (member.roles.cache.has(Vincent)) {
                    member.roles.remove(Vincent);
                    return interaction.reply({
                        content: "Removed vincent studz straming role",
                        ephemeral: true,
                    });
                } else {
                    member.roles.add(Vincent);
                    return interaction.reply({
                        content: 'Added Vincent Studz role',
                        ephemeral: true,
                    });
                }
            }
        }
    } else return;
    });
}