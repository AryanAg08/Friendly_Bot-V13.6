/**
 * ⏳ Session 1 - 60 min
🎯 Goals: Lecture 8 (110)
✅ Achieved: Lecture 8 (110) + first half of lecture 4 (50)
⛔ Distractions: 1
📉 Efficiency: 5/5 

 */


    // Count the totsl sessions done so far!!
    // count their total time. 
    // Cam/SS on/off time. 
    // join/leave
    // Distraction: No. of msgs typed per 30m / 10 (that is for discord) , Other than that please ask at the end of session..
    // Efficiency: /5 ask user about it. 
    // Achieved: Their goals for the sessions.


    /** 
     * Session Time = array
     * Cam/SS Time = Number
     * No of times on/off = Number
     * Efficiency = String 
     * Distractions: -> Input from user 
     *               -> Msg Distraction to be calculated by bot. 
     * Goals -> Array 
     * Achieved -> Array
    ////////// * goals will be pushed using same code as warning one!!
     *  const warning = {
            author: `${interaction.member}`,
            timeStamp: new Date().getTime(),
            reason,
        }

        const A8 = await S5.findOneAndUpdate({
            guildId,
            userId,
        }, {
            guildId,
            userId,
            $push: {
                warnings: warning,
            },
        }, {
            upsert: true,
            new: true,
        });

    ////////////    And to retrive them this will be used 

         const A13 = await S5.findOne({
        guildId,
        userId,
    })

    let reply = `⚠ Warnings for <@${user}>: \n\n`

    for (const warning of A13.warnings) {
        const { author, timeStamp, reason } = warning

        reply += `By ${author} on <t:${timeStamp}:F> for ${reason}\n`
    }

     */


async function GoalsAdd(GoalInfo) {

    try {
    const G1 = require("../models/30Session");
    const { GG, user, Goal, TimeStamp } = GoalInfo;

     const Status = "Just Started";
    const Info = {
        Goal: Goal,
        Time: TimeStamp,
        CompletedIn: null,
        Status: Status,
    };

    const G2 = await G1.findOneAndUpdate({
        GG,
        user,
    },{
        user,
       $push: {
        Goals: Info
       },
    },{
        upsert: true,
        new: true,
    });

    console.log(G2);

    return 1;

} 
catch (err) {
    return 0;
};

}

async function VCStatus (VCInfo) {
   try {

   }

   catch (err) {
    return 0;
   }
}

async function AddVcs(VCinfo) {
    const {GG, chann} = VCinfo;

    const Vc = {
        Channel: chann,
    };

    const V1 = require("../models/30Session");

    const V2 = await V1.findOneAndUpdate({
        GG,
        user: "anon",
    },{
        user: "anon",
        $push: {
            VC: Vc,
        },
    },{
        upsert: true,
        new: true,
    });

    return 1;
    
}