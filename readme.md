#  Features
1. New_guild
2.Tog.gg


# Slash cmds for setup!!
1. /setup count 
  > options Stats 
  >>> Category:   ✅
    >> Member-count  -- total one  ✅
    >> Bots ✅
    - Extra [make_a-seperate_cmd]
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
2. Study count module
3. Server Security Features
4. Daily Words 
5. Daily Quotes some amazing ideas 
6. Link Features
7. BookMark Feature
8. 