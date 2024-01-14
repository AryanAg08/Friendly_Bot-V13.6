/**
 * Set limit of the votings 
 * one person can vote 3 times 
 * For one Images one person can vote for a one time.
 * Voting start cmd
 * voting end cmd
 * Get total votes done so far in the main channel! 
 * 
 */

const VV = require("../models/32VotingConfig");

async function VotingSetup(interaction) {

    const channelId = interaction.channel.id;
    const GG = interaction.guild.id;
    const user = interaction.user.id;
    var Embed_Message_Id = NULL;
    const Total_Votes = 0;
    const Vote_Limit_Per_User = interaction.options.getInteger("votelimit");
    const Total_Items = interaction.options.getInteger("totalitems");
    const VotingChannel = interaction.options.getChannel("voting-channel");
 
    // Save all the same in the 32th schema and do make sure to give an empty embed and save its message id and take in Total votes , limit!! Also Ask them to take in the specific channel if they want to conduct voting out there and make this result array visible somewhere else!! 
     const { MessageEmbed } = require("discord.js");

    const VoteTotal_Embed = new MessageEmbed();
    VoteTotal_Embed.hexColor ("#7ffc03");
    VoteTotal_Embed.setTimestamp();
    VoteTotal_Embed.setColor("RANDOM")
    VoteTotal_Embed.setTitle("Current Voting Status")
    VoteTotal_Embed.setDescription(`Status of Votes for the time being will be displayed here!`);


    interaction.channel.send({
        embeds: [VoteTotal_Embed]
     }).then((msg) => {
        Embed_Message_Id = msg.id;
     });

     const V1 = await VV.findOneAndUpdate({
        GG: GG,
     },{
        GG: GG,
        user: user,
        IsActive: true,
        TotalItems: Total_Items,
        VoteLimitPerUser: Vote_Limit_Per_User,
        TotalVotes: Total_Votes,
        VotingMsgID: Embed_Message_Id,
        VotingBoardChannel: channelId,
        VotingChannel: VotingChannel,
     }, {
        upsert: true,
        new: true
     });
     console.log(V1);

     await interaction.reply("Voting Feature is ready to roll out!!");
}
const V1 = require("../models/33vote");
const C1 = require("../models/34per-user-vote");

async function Voting(interaction) {
const GG = interaction.guild.id;
const user = interaction.user.id;
const GetVote = interaction.options.getInteger("element-no");

var totalVoted = 0;

const V3 = await C1.find({
   GG,
   user
}); 
if (V3) {
   for (const qq of V3)
   totalVoted = qq.TotalVoted;
console.log(totalVoted);
totalVoted++;
}
else {
   const V4 = await C1.findOneAndUpdate({
      GG, 
      user,
   },{
      TotalVoted: 0,
   },{
      upser: true,
      new: true,
   })
}


if (totalVoted  > 3) {
   return interaction.reply({content: "You have voted 3 times already!!", ephemeral: true});
}
const V2 = await V1.findOneAndUpdate({
   GG,
   user,
   VoteOn: GetVote,
},{
   GG,
   user,
   VoteOn: GetVote,
},{
   upsert: true,
   new: true,
});
const V5 = await C1.findOneAndUpdate({
   GG,
   user,
},{
   TotalVoted: totalVoted,
},{
   upsert: true,
   new: true,
});
console.log(V5);
console.log(V2);

await interaction.reply({content: "You have voted " + totalVoted + " times!", ephemeral: true});
}



module.exports = {
    VotingSetup,
    Voting
}


/**
 * Items to bring:-
 * Underwear 
 * Payjama
 * Cream
 * Shampoo
 * Body wash 
 * Toothbrush
 * T-shirt (Devfolio)
 * Pillow cover (thela ke neeche);
 * Double BedSheet
 * Stall (pooja wali jagah)
 * McAfee Subscription
 * Tissue Paper
 * Handkerchief
 * Metro Card Recharge 
 * Hand Watch
 * 
 */