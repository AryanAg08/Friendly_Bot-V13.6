async function mod(interaction) {


    const getUser = interaction.options.getUser('mod')

//    console.log(getUser);
    const GG = interaction.guild

    const userStats = GG.members.cache.get(getUser.id);
    console.log(userStats);
    // User {
    //     2023-02-12T18:27:36.010499+00:00 app[worker.1]:   id: '693351718263455755',
    //     2023-02-12T18:27:36.010499+00:00 app[worker.1]:   bot: false,
    //     2023-02-12T18:27:36.010502+00:00 app[worker.1]:   system: false,
    //     2023-02-12T18:27:36.010502+00:00 app[worker.1]:   flags: UserFlags { bitfield: 4194368 },
    //     2023-02-12T18:27:36.010503+00:00 app[worker.1]:   username: 'AryanAg',
    //     2023-02-12T18:27:36.010503+00:00 app[worker.1]:   discriminator: '1039',
    //     2023-02-12T18:27:36.010503+00:00 app[worker.1]:   avatar: '0b50c50ecd4bb5c47be72eea6d028fa8',
    //     2023-02-12T18:27:36.010503+00:00 app[worker.1]:   banner: undefined,
    //     2023-02-12T18:27:36.010503+00:00 app[worker.1]:   accentColor: undefined
    //     2023-02-12T18:27:36.010504+00:00 app[worker.1]: }
}

module.exports = {
    mod,
}