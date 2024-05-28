const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347030083699";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_08_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAzNCxcbiAgICAgICAgNjksXG4gICAgICAgIDMyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjksXG4gICAgICAgIDU0LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIxLFxuICAgICAgICAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDgzLFxuICAgICAgICA4NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM2LFxuICAgICAgICA2NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MixcbiAgICAgICAgOTMsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA1MixcbiAgICAgICAgMzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDM4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIwLFxuICAgICAgICA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICAyMjAsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2LFxuICAgICAgICA0MixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg1LFxuICAgICAgICA1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcsXG4gICAgICAgIDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgODQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjksXG4gICAgICAgIDUwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY5LFxuICAgICAgICA1MSxcbiAgICAgICAgODgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDksXG4gICAgICAgIDkxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNixcbiAgICAgICAgODUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDg5LFxuICAgICAgICA0NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA2NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUwLFxuICAgICAgICA3LFxuICAgICAgICA4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzbVd6SExRdUo5MEsvVVN2Z2JEelZ1NGRRRVF1QVI0SlJhdHJ2Q3pIYm5nPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5S3NmQ0xCYVRiV1c0NVhWcm95RTBBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc5YWVhNmU1LTcyODEtNDE0YS1iNGU4LWUyODkwYTllNTE0OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMCxcbiAgICAgIDE1MixcbiAgICAgIDE5MCxcbiAgICAgIDE2NCxcbiAgICAgIDM3LFxuICAgICAgMTY1LFxuICAgICAgMTA1LFxuICAgICAgMTg2LFxuICAgICAgMTQ2LFxuICAgICAgMjM2LFxuICAgICAgMTcsXG4gICAgICAyMDIsXG4gICAgICAxNCxcbiAgICAgIDExLFxuICAgICAgMTk2LFxuICAgICAgNDQsXG4gICAgICA4NCxcbiAgICAgIDIyNCxcbiAgICAgIDgyLFxuICAgICAgMjIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOCxcbiAgICAgIDk4LFxuICAgICAgMTU0LFxuICAgICAgMjksXG4gICAgICA3MixcbiAgICAgIDg0LFxuICAgICAgMTgzLFxuICAgICAgMTA4LFxuICAgICAgNDMsXG4gICAgICAyMzksXG4gICAgICAxNjksXG4gICAgICA3MixcbiAgICAgIDEzOCxcbiAgICAgIDI2LFxuICAgICAgNTksXG4gICAgICAzNCxcbiAgICAgIDE3NCxcbiAgICAgIDgsXG4gICAgICA5OCxcbiAgICAgIDQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFTQkpNVFdIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDMwMDgzNjk5OjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiJEZlcmRpbmFuZFwiLFxuICAgIFwibGlkXCI6IFwiMTA1NDQ1ODI1OTg2NjY4OjM0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0t5TGtaSUhFSVRCMUxJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiekc4YjNYTGRIckRDOE9iTUhSQTNuSkhmUno0MkdGSk5kN2EwSHZvaDRUQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJla1F0bTAvc21UUWs3QzgzYXl3VTVEMlBtS2dPZk02ZlNsK0U5YVM1dFBremw4ci9udjVSdHFTUXI2MW1lNmhQTHd4dUZscUlBR1YzbVZOalBHZGJDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJhbTByS3cyd3NaZDhXOHVMNHFPZm9YaVl6eGtaUlB1YVdSRDRBQlA2T2NKZXN6QUhKak85Ukg5OHo0RHhKaDk4RHZ6YmgxNkNWQUFxOXdnZ2VnWExodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDMwMDgzNjk5OjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjg1NDkyMFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
