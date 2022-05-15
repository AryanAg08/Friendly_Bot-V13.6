#  Features
1. New_guild
2.Tog.gg


# Slash cmds for setup!!
1. /setup count 
  > options Stats 
  >>> Category:   ✅
    >> Member-count 
    >> Bots
   >>> options Schedule Channel 
       >> Channel = schedulechannel
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
       >> String = newprefix
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