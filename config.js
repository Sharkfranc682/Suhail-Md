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




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_28_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDMzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTksXG4gICAgICAgIDgyLFxuICAgICAgICA4MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICA0MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDksXG4gICAgICAgIDM3LFxuICAgICAgICAxOTksXG4gICAgICAgIDExMixcbiAgICAgICAgNjQsXG4gICAgICAgIDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjksXG4gICAgICAgIDExMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjUyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICA1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAzOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNixcbiAgICAgICAgMTk2LFxuICAgICAgICA0OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM1LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTksXG4gICAgICAgIDk4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDY2LFxuICAgICAgICA3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDkwLFxuICAgICAgICAxODgsXG4gICAgICAgIDkyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMSxcbiAgICAgICAgMzksXG4gICAgICAgIDY4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNixcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM1LFxuICAgICAgICA4MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxLFxuICAgICAgICAyNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjExLFxuICAgICAgICA4MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzksXG4gICAgICAgIDU5LFxuICAgICAgICAyMzksXG4gICAgICAgIDgwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDczLFxuICAgICAgICA4LFxuICAgICAgICAyNixcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidTFMZ3pKay8waHRXOWpVUjVhcTFmSHd0TUYyYXMvMm1BWndlSUZpYVFLYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVTE0ZWotTXZUTm1MazNES1pXU3J4d1wiLFxuICBcInBob25lSWRcIjogXCJiOWEzNzcwYi04MzAzLTQ3ZmEtYTg5ZS02N2ViNDhjMmM4NzlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzYsXG4gICAgICAxNzEsXG4gICAgICAxNixcbiAgICAgIDE0NCxcbiAgICAgIDIxNyxcbiAgICAgIDcxLFxuICAgICAgOTQsXG4gICAgICAxODcsXG4gICAgICAyMTcsXG4gICAgICAxOCxcbiAgICAgIDIwMSxcbiAgICAgIDgsXG4gICAgICAxNTQsXG4gICAgICAyMTUsXG4gICAgICAxNzEsXG4gICAgICAyNTQsXG4gICAgICAyMDcsXG4gICAgICAxMjAsXG4gICAgICAxOTEsXG4gICAgICAxODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUsXG4gICAgICAzNyxcbiAgICAgIDIyNixcbiAgICAgIDY4LFxuICAgICAgMjM5LFxuICAgICAgMTkyLFxuICAgICAgMjMxLFxuICAgICAgMTE2LFxuICAgICAgNTAsXG4gICAgICA5NixcbiAgICAgIDI0NSxcbiAgICAgIDMyLFxuICAgICAgMTc2LFxuICAgICAgMjMzLFxuICAgICAgNDYsXG4gICAgICAyMzAsXG4gICAgICAxNjMsXG4gICAgICAyMyxcbiAgICAgIDE5NCxcbiAgICAgIDIxNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIRFQxUzJMOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAzMDA4MzY5OTozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIiRGZXJkaW5hbmRcIixcbiAgICBcImxpZFwiOiBcIjEwNTQ0NTgyNTk4NjY2ODozNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLNkxrWklIRU9icTJiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInpHOGIzWExkSHJEQzhPYk1IUkEzbkpIZlJ6NDJHRkpOZDdhMEh2b2g0VEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibUlld0pyNEZURmxYdnpJdmk4QklLZlpsUVBKVnU3eVhqREtIaExCVTF6dUhlc2VCSWhFenBFTnRvMTRCOFVHQjJKR1Nhb2JiM3pGVGsyNTdwUWt1RGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVFdFaVU4RUcyU0JhQUtOSHh5aHdCU3g0YWVDUkhsRVpBeFVaTTl5TDEvUUFwNStXWW9IY1FiY0NFeVNmNEdFTjdkZjR3UjJXMkN1ODg4S3l6c1krRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAzMDA4MzY5OTozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjExMzY0ODksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMRXRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxFdC5qc29uIjogIntcImtleURhdGFcIjpcIkFndTBHZ3NaRFU5Q0ZxR1BVSXdFV2xmSUg0ajJDRDdGN09aUHVuWE9SWTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkxNzA3NjkwOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
