async function mod(interaction) {


    const getUser = interaction.options.getUser('mod')

    console.log(getUser);
}

module.exports = {
    mod,
}