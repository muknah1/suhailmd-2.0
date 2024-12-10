const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+94 77 589 0574";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_30_12_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTc2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODIsXG4gICAgICAgIDMyLFxuICAgICAgICA2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDU0LFxuICAgICAgICAxODksXG4gICAgICAgIDE1MCxcbiAgICAgICAgODAsXG4gICAgICAgIDQ4LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzksXG4gICAgICAgIDI1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDgyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTI0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDc5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDkxLFxuICAgICAgICA0NyxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICA3MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA4MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICA4LFxuICAgICAgICA4MCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxNixcbiAgICAgICAgODUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxODUsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwLFxuICAgICAgICA4NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTksXG4gICAgICAgIDg1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDczLFxuICAgICAgICAzOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3NixcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODcsXG4gICAgICAgIDk0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNCxcbiAgICAgICAgODUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDksXG4gICAgICAgIDI4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDYzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDcxLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzLFxuICAgICAgICA2MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1S2lZejIyVHVzNVcrL2h2bmo1RzNVbTA5Q3hDMkowMVdaaXNBZFFtck5nPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzc1ODkwNTc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJERUM2M0IxNDgwN0RCQTc3NTA4RTkyMUQ1QjBCNDc2MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM4NTE4NDFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc3NTg5MDU3NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTFEMUVDQjM3NTVGMEQxRUNFNzAxOEE5QTcxRjcwOTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzODUxODQxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NzU4OTA1NzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU5NkIxN0U0RDM2MzMyOTBGQjVBQ0MzRTRCQUYwQ0NFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzg1MTg0M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzc1ODkwNTc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4MDZDRTE2OTc1REJDQzM4MEI5RkQ2QUFDM0RCREEwQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM4NTE4NDRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNFNmRnFXVFdUYXE5TFFyOU54RXp6d1wiLFxuICBcInBob25lSWRcIjogXCI4ZjEyNjA0Ny1kN2M2LTQ3OGUtOTU5NS02NjlkYzU0ZTZkMzNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNixcbiAgICAgIDIwMixcbiAgICAgIDcxLFxuICAgICAgODQsXG4gICAgICA3NyxcbiAgICAgIDIwNCxcbiAgICAgIDE3OSxcbiAgICAgIDEzLFxuICAgICAgMjE1LFxuICAgICAgMTUyLFxuICAgICAgMjQyLFxuICAgICAgMTIxLFxuICAgICAgMTg1LFxuICAgICAgMjM1LFxuICAgICAgMTc3LFxuICAgICAgMjE3LFxuICAgICAgMjMxLFxuICAgICAgMTgwLFxuICAgICAgMzUsXG4gICAgICAyMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIwLFxuICAgICAgMTU2LFxuICAgICAgMTgsXG4gICAgICAzNyxcbiAgICAgIDkxLFxuICAgICAgNTgsXG4gICAgICAxNixcbiAgICAgIDMzLFxuICAgICAgNjAsXG4gICAgICA3MSxcbiAgICAgIDE4NCxcbiAgICAgIDM4LFxuICAgICAgMjQyLFxuICAgICAgODAsXG4gICAgICAxNTMsXG4gICAgICAxMSxcbiAgICAgIDE0MSxcbiAgICAgIDIwOSxcbiAgICAgIDIzMCxcbiAgICAgIDE2OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTNFI2Mlo2MVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NzU4OTA1NzQ6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjk4Mjc3NjI5MDExMzg6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJzdWRhbmRpa2FrdW1hcmlcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLLzFrTG9HRUx2MTRib0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkdCUVlZZWFoZVZ1c1ZxZnVMeVN2N0htTEZ2Mk5CWVRPd21rMHdaSlAzU0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicEZRNHZ5b2J5TlF3MndjSjJHZXBFTEhydUl3NFk4enE1bXFKRnM1YmNQdDZqRjB2REE2OWpNL2N2VkhJMC9zQ2ZHSEVpRlNLbitBRFpJZWpDcDFPQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSC8xRkg2Qit4d0szSkYwdUs3YVVDZ1VRc1Qxcldka1BhekhFVjc2VkxyZFU3RnhKV1ErdFM3bzRLSFBZZ3pXeEthUEJ6REZMc0JQTXU0TFdVcGcxQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzU4OTA1NzQ6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM4NTE4MzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBNUdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUE1Ry5qc29uIjogIntcImtleURhdGFcIjpcIk55Vi9HR3NwU0Z3bS9yUS9yVlhPSVZ3UDNuMG1SaUc3Yjg3Z3RoUTBQdTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTczMjUyNDcxOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzODUxODQwNDM5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
