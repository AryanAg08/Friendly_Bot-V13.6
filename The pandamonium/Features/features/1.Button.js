module.exports = (client) => {
    client.on('interactionCreate', async interaction => {
        if (!interaction.isButton()) return;
        if (interaction.isButton()) {
            const BUTTONID = interaction.customId;
            const member = interaction.member;
            if (interaction.guild.id === "701822879066619995") {
                const code1 = "TH0001"
                const code2 = "SH0002"
                const code3 = "HE0003"
                const code4 = "NO0004"
                const code5 = "OR0005"
                const code6 = "AP0006"
                const code7 = "XE0007"
                const code8 = "gm0008"
                const code9 = "ch0009"
                const code10 = "ko0010"
                const code11 = "Sp0011"
                const code12 = "FR0012"
                const code13 = "EN0013"
                const code14 = "JP0014"
                const code15 = "NW0015"
                const code16 = "FN0016"
                const code17 = "SD0017"
                const code18 = "PY0018"
                const code19 = "SH0019"
                const code20 = "CC0020"
                const code21 = "JA0021"
                const code22 = "CS0022"
                const code23 = "LX0023"
                const code24 = "RY0024"
                const code25 = "JS0025"
                const code26 = "RS0026"
                const code27 = "GO0027"
                const code28 = "DT0028"
                const code29 = "KT0029"
                const code30 = "GM0030"
                const code31 = "WT0040"
                const code32 = "SG0041"
                const code33 = "FR0042"
                const code34 = "RD0043"


                const they = "876767498798792704"
                const she = "876767536203591730"
                const he = "876767562833219605"
                const NOPronoun = "876767593644576818"
                const Other = "876767637336653845"
                const anypronoun = "876842695388200960"
                const xexem = "993099506264576060"
                const German = "998716480705265664"
                const Chinese = "998716932754768022"
                const Korean = "998717625511182439"
                const Spanish = "998718052235481182"
                const French = "998717739600453742"
                const English = "998720676875747439"
                const Japanese = "998779804197343332"
                const Norwegian = "998899629959675975"
                const Finnish = "1000369913342459934"
                const Swedish = "1000370307137290271"
                const Python = "918275939169890354"
                const Shell = "918276697042853918"
                const C = "918276907240423434"
                const Java = "918277304076087307"
                const R = "918277427027927090"
                const Html = "918278240261513246"
                const css = "918278570353233960"
                const javascript = "918497144258822166"
                const rust = "918497437772050432"
                const go = "918497895131533312"
                const Dart = "918498009027850260"
                const Kotlin = "918498193522712606"
                const Gamers = "796749776590340116"
                const Watchers = "796750010032979978"
                const StudyGRP = "849573138022531094"
                const Forest = "917025985302515753"
                const RumpleDiary = "899935455494176838"
 
                if (BUTTONID === code1) {
                    if (member.roles.cache.has(they)) { // if they already have the role
                        member.roles.remove(they); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(they); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
                }
                if (BUTTONID === code2) {
                    if (member.roles.cache.has(she)) { // if they already have the role
                        member.roles.remove(she); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(she); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
                }
                if (BUTTONID === code3) {
                    if (member.roles.cache.has(he)) { // if they already have the role
                        member.roles.remove(he); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(he); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
                if (BUTTONID === code4) {
                    if (member.roles.cache.has(NOPronoun)) { // if they already have the role
                        member.roles.remove(NOPronoun); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(NOPronoun); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
                if (BUTTONID === code5) {
                    if (member.roles.cache.has(Other)) { // if they already have the role
                        member.roles.remove(Other); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(Other); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
                if (BUTTONID === code6) {
                    if (member.roles.cache.has(anypronoun)) { // if they already have the role
                        member.roles.remove(anypronoun); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(anypronoun); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
                if (BUTTONID === code7) {
                    if (member.roles.cache.has(xexem)) { // if they already have the role
                        member.roles.remove(xexem); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(xexem); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
                if (BUTTONID === code8) {
                    if (member.roles.cache.has(German)) { // if they already have the role
                        member.roles.remove(German); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(German); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
                }
                if (BUTTONID === code9) {
                    if (member.roles.cache.has(Chinese)) { // if they already have the role
                        member.roles.remove(Chinese); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(Chinese); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
                if (BUTTONID === code10) {
                    if (member.roles.cache.has(Korean)) { // if they already have the role
                        member.roles.remove(Korean); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(Korean); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
                if (BUTTONID === code11) {
                    if (member.roles.cache.has(Spanish)) { // if they already have the role
                        member.roles.remove(Spanish); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(Spanish); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
                if (BUTTONID === code12) {
                    if (member.roles.cache.has(French)) { // if they already have the role
                        member.roles.remove(French); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(French); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
                if (BUTTONID === code13) {
                    if (member.roles.cache.has(English)) { // if they already have the role
                        member.roles.remove(English); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(English); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
                if (BUTTONID === code14) {
                    if (member.roles.cache.has(Japanese)) { // if they already have the role
                        member.roles.remove(Japanese); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(Japanese); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
                if (BUTTONID === code15) {
                    if (member.roles.cache.has(Norwegian)) { // if they already have the role
                        member.roles.remove(Norwegian); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(Norwegian); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
                if (BUTTONID === code16) {
                    if (member.roles.cache.has(Finnish)) { // if they already have the role
                        member.roles.remove(Finnish); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(Finnish); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
                if (BUTTONID === code17) {
                    if (member.roles.cache.has(Swedish)) { // if they already have the role
                        member.roles.remove(Swedish); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(Swedish); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
                if (BUTTONID === code18) {
                    if (member.roles.cache.has(Python)) { // if they already have the role
                        member.roles.remove(Python); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(Python); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
                if (BUTTONID === code19) {
                    if (member.roles.cache.has(Shell)) { // if they already have the role
                        member.roles.remove(Shell); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(Shell); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
                if (BUTTONID === code20) {
                    if (member.roles.cache.has(C)) { // if they already have the role
                        member.roles.remove(C); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(C); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
                if (BUTTONID === code21) {
                    if (member.roles.cache.has(Java)) { // if they already have the role
                        member.roles.remove(Java); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(Java); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
                if (BUTTONID === code22) {
                    if (member.roles.cache.has(R)) { // if they already have the role
                        member.roles.remove(R); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(R); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
                if (BUTTONID === code23) {
                    if (member.roles.cache.has(Html)) { // if they already have the role
                        member.roles.remove(Html); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(Html); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
                if (BUTTONID === code24) {
                    if (member.roles.cache.has(css)) { // if they already have the role
                        member.roles.remove(css); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(css); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
                if (BUTTONID === code25) {
                    if (member.roles.cache.has(javascript)) { // if they already have the role
                        member.roles.remove(javascript); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(javascript); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
                if (BUTTONID === code26) {
                    if (member.roles.cache.has(rust)) { // if they already have the role
                        member.roles.remove(rust); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(rust); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
                if (BUTTONID === code27) {
                    if (member.roles.cache.has(go)) { // if they already have the role
                        member.roles.remove(go); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(go); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
                if (BUTTONID === code28) {
                    if (member.roles.cache.has(Dart)) { // if they already have the role
                        member.roles.remove(Dart); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(Dart); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
                if (BUTTONID === code29) {
                    if (member.roles.cache.has(Kotlin)) { // if they already have the role
                        member.roles.remove(Kotlin); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(Kotlin); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
                if (BUTTONID === code30) {
                    if (member.roles.cache.has(Gamers)) { // if they already have the role
                        member.roles.remove(Gamers); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(Gamers); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
                if (BUTTONID === code31) {
                    if (member.roles.cache.has(Watchers)) { // if they already have the role
                        member.roles.remove(Watchers); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(Watchers); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
                if (BUTTONID === code32) {
                    if (member.roles.cache.has(StudyGRP)) { // if they already have the role
                        member.roles.remove(StudyGRP); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(StudyGRP); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
                if (BUTTONID === code33) {
                    if (member.roles.cache.has(Forest)) { // if they already have the role
                        member.roles.remove(Forest); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(Forest); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
                if (BUTTONID === code34) {
                    if (member.roles.cache.has(RumpleDiary)) { // if they already have the role
                        member.roles.remove(RumpleDiary); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(RumpleDiary); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }

            } else return;
        }
    })
}

/**
 * if (BUTTONID === code) {
                    if (member.roles.cache.has()) { // if they already have the role
                        member.roles.remove(); // remove it
                        return interaction.reply({
                            content: 'Successfully removed role!',
                            ephemeral: true
                        });
                    } else { // if they don't have the role
                        member.roles.add(); // add it
                        return interaction.reply({
                            content: 'Successfully added role!',
                            ephemeral: true
                        });
                    }
    
                }
 */