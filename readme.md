#  Features
1. New_guild
2.Tog.gg


# Slash cmds for setup!!
1. /setup count 
  > options Stats 
  >>> Category:   ✅
    >> Member-count  -- total one  ✅
    >> Bots ✅
    >>> Extra [make_a-seperate_cmd]
        >> Role count
        >> Online Members
        >> VC members
   >>> options Schedule Channel ✅
       >> Channel = schedulechannel ✅
  >>> Tickets category and embed!! === Embed && Category ✅
        >> 
  >>> Logs Channel === Channel ✅
  >>> Forest Session Channel === Channel ✅
       >> Channel = forestchannel
       >> role = forestrole
  >>> BdayWishes Channel === Channel ✅
       >> Channel = bdaychannel
       >> Role = bdayrole
  >>> Prefix  == String ✅
       >> String = newprefix ✅
  >>> welcome channel === Channel ✅
       >> channel = welcomechannel
       >> role = autorole
  >>> VC Study Time Channel === Channel && Role ✅
       >> Role = studyrole
       >> vc = vcchannel
       >> logchannel = logschannel
       >> joining message = custommessage
  >>> Enable cmds [Dropdown] ✅
       >> enablecommands
  >>> Disable cmds [Dropdown] ✅
       >> disablecommands
 
[If anything is not mentioned we create new channel based on that .setrequired(false)]


For Vvvc Study time 
 
 ```js 
 function timeDiffCalc(dateFuture, dateNow) {
    let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;

    // calculate days
    const days = Math.floor(diffInMilliSeconds / 86400);
    diffInMilliSeconds -= days * 86400;
    console.log('calculated days', days);

    // calculate hours
    const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
    diffInMilliSeconds -= hours * 3600;
    console.log('calculated hours', hours);

    // calculate minutes
    const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
    diffInMilliSeconds -= minutes * 60;
    console.log('minutes', minutes);

    let difference = '';
    if (days > 0) {
      difference += (days === 1) ? `${days} day, ` : `${days} days, `;
    }

    difference += (hours === 0 || hours === 1) ? `${hours} hour, ` : `${hours} hours, `;

    difference += (minutes === 0 || hours === 1) ? `${minutes} minutes` : `${minutes} minutes`; 

    return difference;
  }

  console.log(timeDiffCalc(new Date('2019/10/1 04:10:00'), new Date('2019/10/2 18:20:00')));

// the time difference is:
// 1 day, 14 hours, 10 minutes
 ```


2. Normal cmds: 
   -> Set Bday  format ===> DD/MM/YYYY ✅
   -> Help ✅
   -> Warning ✅
   -> Warnstats ✅
   -> Ban 
   -> kick 
   -> server Invites ✅
   -> message purge ✅
   -> close ticket ✅
   -> ping ✅
   ->  hello [For_normal_cmd_only]
   -> Maths ===> Add, sub, multiply, divide, sqaure (**) [FOR_NORMAL_CMDS_ONLY]
   -> poll [FOR_NORMAL_CMDS_ONLY]
   -> google [FOR_NORMAL_CMDS_ONLY]
   -> invite bot [FOR_NORMAL_CMDS_ONLY]
   -> quote ✅
   -> ticket ✅
   -> forest session ✅
   -> schedule  ✅
   -> To-do ✅
   -> Study time ✅
   -> support contact ✅
   ->  Dashboard ✅
   -> Create cmd ✅
   -> Deadlines 




   # After giving finishing touch check the mongo!! And tranfer data to respective Schemas!!
    1. Schedule Channel
    2. Ticket 



    # Guild Info 
    ```
       Guild {
  id: '806504713935781958',
  name: 'Friendly Bot',
  icon: 'a237743f87780e98fd0d2750b830aebb',
  features: [
    'MEMBER_VERIFICATION_GATE_ENABLED',
    'THREADS_ENABLED',
    'WELCOME_SCREEN_ENABLED',
    'PREVIEW_ENABLED',
    'COMMUNITY',
    'NEWS',
    'NEW_THREAD_PERMISSIONS'
  ],
  commands: <ref *1> GuildApplicationCommandManager {
    permissions: ApplicationCommandPermissionsManager {
      manager: [Circular *1],
      guild: [Circular *2],
      guildId: '806504713935781958',
      commandId: null
    },
    guild: [Circular *2]
  },
  members: GuildMemberManager { guild: [Circular *2] },
  channels: GuildChannelManager { guild: [Circular *2] },
  bans: GuildBanManager { guild: [Circular *2] },
  roles: RoleManager { guild: [Circular *2] },
  presences: PresenceManager {},
  voiceStates: VoiceStateManager { guild: [Circular *2] },
  stageInstances: StageInstanceManager { guild: [Circular *2] },
  invites: GuildInviteManager { guild: [Circular *2] },
  scheduledEvents: GuildScheduledEventManager { guild: [Circular *2] },
  available: true,
  shardId: 0,
  splash: null,
  banner: null,
  description: null,
  verificationLevel: 'LOW',
  vanityURLCode: null,
  nsfwLevel: 'DEFAULT',
  discoverySplash: null,
  memberCount: 61,
  large: true,
  premiumProgressBarEnabled: true,
  applicationId: null,
  afkTimeout: 300,
  afkChannelId: null,
  systemChannelId: '806918117816926269',
  premiumTier: 'NONE',
  premiumSubscriptionCount: 0,
  explicitContentFilter: 'ALL_MEMBERS',
  mfaLevel: 'NONE',
  joinedTimestamp: 1652471334717,
  defaultMessageNotifications: 'ONLY_MENTIONS',
  systemChannelFlags: SystemChannelFlags { bitfield: 0 },
  maximumMembers: 500000,
  maximumPresences: null,
  approximateMemberCount: null,
  approximatePresenceCount: null,
  vanityURLUses: null,
  rulesChannelId: '806916171462606878',
  publicUpdatesChannelId: '806918117816926269',
  preferredLocale: 'en-US',
  ownerId: '693351718263455755',
  emojis: GuildEmojiManager { guild: [Circular *2] },
  stickers: GuildStickerManager { guild: [Circular *2] }
}

    ```


# Verification Feature
  - Standard user
     - Simple  Button one
     - moderate Type in channel one

- Premium User 
   - Simple Button one 
   - Moderate Type in chat one
   - Tough Verification Channel for mods!!

   // Only feature remaining!!



# Permium 
   Schema 
1. GG
2. USER
3. Purchased Timestamp
4. Till When Date 
5. Till when (in months)
6. Till When (in Timestamp)
7. Ref Id
8. Activate Premium Code (generated by bot);
 


# Verification 

Easy: 
=> Button 
=> Id ==> Verification${GG}
=> Send user a message to user that they have been verified
=> Give them Verified role!!
=> Send a log to the mods if there exist a channel!!

Medium: 
=> Embed Displaying How to verify 
=> Message.content from channel Specified 
=> If it matches the required alias then get verified 
=> give then required role. 

Hard: 
=> Same as medium but ask intentions of joining the server!!!
=> Sends to another channel the verification Embed!! 



## Things to be fixed: 
1. Welcome Module ✅
2. Study count module ✅
    shows random time count!!
3. Server Security Features ✅
4. Daily Words  ✅
    Remaning IDk somehow it is not displaying 
      // Should work y now!!
5. Daily Quotes some amazing ideas  // Umm will try afterwards
6. Link Features //  For everything....
7. BookMark Feature 
  > give the message Id 
  > Will reach your dm as an bookmark 
  > Maybe give it a extra touch (
     
  ) 
 
8. Timers ✅

9. Pomodoro (some advanced features)
 -> 

 <html>
<head>
    <title>Friendly Bot</title>
    <style>
      p {
          font-family:'Times New Roman',;
          font-size: 0.50cm ;
      }
      h5 {
          font-size: 0.50cm;
          font-family: 'Times New Roman',;
      }
      h4 {
        font-size: 0.50cm;
          font-family: 'Times New Roman',;
      }

      h2 {
          font-family: 'Times New Roman',; 
      }

      </style>

</head>
<body>
   <h1>Friendly Bot</h1> 
   <p>
    Hello, this is a multi Functioning bot used for all your study needs.
    You can make a good productive community using this bot. 
    <br>
    I wish this bot will help you in increase your productivity level, using various commands. 
</p>
<h4> <b>Few Main Features:- </b> <br>
    (To get all commands type "!help", Prefix can be changed according to the owners choice)
</h4>
    <ol> 
        <li>
            <h5>Forest</h5>
                <p>You can share your forest code within the server so others can join your tree</p>
        </li>
        <li>
            <h5>Teams</h5>
            <p> You can create teams within the server with your friends,making it easier to study together also you dont need to hover around multiple channels to use timers for your sessions.
            </p>
         </li>
         <li>
             <h5>Team Voice Channels</h5>
             <p>When you join a team by reacting on the embed a VC will be created so that you and your team buddies can join in and study together</p>
         </li>
         <li>
             <h5>Inbuilt Google Search</h5>
             <p>This bot comes with a inbuilt mini search engine which provides the top results by Google.
                 <br>
                <b>Note: People can use it in wrong way too, So please take care if the channel is not a NSFW . or else bot's command won't work in normal channels. </b>
               <b> use !google "search" </b>
              
             </p>
         </li>
         <li>
             <h5>To-Do List feature!!</h5>
             <p> bot has a feature for todo-list</p>
             <br>
            <b>!todo add </b> -->  adds your task in to-do list  
            <br>
             <b>**Note:** There is reminder feature too. Which helps you to remind you in particular time. Time is only in **Hours**.  React when bot asks. </b> 
             <br>   
             *Usage:* `!todo add Maths` 
             <br>
             <b>!todo list</b>>  -->  Shows your to-do list!! 

             <br>
             <b>!todo reset</b> --> Resets the whole to-do
             <br>
             <b>!todo remove</b> --> Remove the particular task using its number. 
                 <br>                                     **Note:** This might change your reminding task number too. If you asked bot to remind you for a task!! Will be updated in further updates!!
                     <br>                                *Usage:* `!todo remove 2`
                    </li>

    </ol>
    <h2>
        Stay tuned for more exciting updates! </h2>

<br> 
1. Moderators Commands:
(a) Warning:
➡️ To warn any user in your server.
➡️ To check list of warning on particular user !lw @user. 
➡️ If user has/have no warnings then it will return null.
➡️ Reason is not necessary, use it according to your choice. 

(b) Give Role:
➡️ Gives the target user the mentioned role. 
➡️ Usage: !giverole @user role-name.

(c) Ban/kick:
➡️ Bans/kicks the target user. 
➡️ Usage: !ban @user or !kick @user.

(d) Server-Invites:
➡️ To check your servers invites. 
➡️ Only top 5 invites will be shown. 
 
(e) Clear messages:
➡️ Clears the amount of messages in a channel mentioned. 
➡️ Usage: !clear 25 Will clear 25 messages. 

(f) Close Ticket: 
➡️ It closes the support ticket/channel if you have used !setup in your server. 
➡️ Usage: !close @user.

2. Admin Commands:
(a) Server Setup:
➡️ Our bot comes with advanced setup command, which creates automatically required channels. 
➡️ Usage: !setup.
➡️ It creates following things: 
-> Tickets Category.
-> Forest Channel 
-> Schedule Channel
-> Birthday-Wishes Channel
-> Moderators Log Channel.

(b) Prefix:
➡️ There has been development in bot now you can change the prefix of bot for your sever
➡️ Usage: !setprefix ?
3. User Commands:
(a) Fun:
➡️ Play with coins. *Usage: !addbal @user 4000 * (Only by mod)
➡️ Check your balance Usage !balance
➡️ For any animals images !fun cat !fun dog !fun bunny !fun rabbit !fun duck !fun fox !fun lizard 
 !fun shiba !fun koala !fun panda accordingly image will be displayed. 

(b) Maths:
➡️ Addition Usage: !maths add 10 15
➡️ Subtraction Usage: !maths subtract 40 10
➡️ Multiply Usage !maths multiply 20 4
➡️ Division Usage !maths divide 60 5

(c) Poll:
➡️ Creates a poll for users to vote.
➡️ Usage !poll Yes or No. 
 
(d) Quote:
➡️ Displays the quote. 
➡️ Usage !quote
 
(e) Support Channel:
➡️ Creates a support channel. 
➡️ Usage !ticket

(f) Forest:
➡️ Creates an embed for forest app. 
➡️ Usage !code TEST 40 20 -- !code <Code> <Duration> <Start-Time>

(g) Birthday:
➡️ Creates an embed for wishing birthday. 
➡️ Usage !bday Message. 

(h) Schedule:
➡️ You can use it to create a to-do. 
➡️ Usage !schedule 1. Make Notes....
4. Extra Features: 

(a) Event:
➡️ Now you can schedule events in your server using our Bot. 
➡️ Bot will schedule it according to your choice, Time. 
➡️ You can schedule channels (e.g. Text, Voice or both) accordingly. 

(b) To-do:
➡️ You can make a to-do list in which you can tick-off tasks also create them easily.
➡️ For usage please refer to !todo.
 
(c)Google Search:
➡️ You can search anything on google using bot. 
➡️ Usage !google Youtube (Note: Works only in NSFW channels (discord guidelines)).

(d) Welcome Feature
➡️ Welcome your members with our bot 
➡️ Voice Channel displaying member-count. 
➡️ For more info use !setw. 

(e) Voice Time Count:
➡️ Now bot counts the time in voice channel. 
➡️ for more info use !study

(f) Announcement:
➡️ register your server for new announcements of bot updates. 
➡️ !announce register
5. Premium Features:
➡️ Soon more amazing features will be added like making a particular command for a particular command. 
➡️ More enhancements will be done to these already added features, providing users more options. 

6. Website Updates:
➡️ Website will be up and working till 15 October. 
➡️ If there is any developers among anyone here in the community please contact me ( @AryanAg )
</body>
</html>