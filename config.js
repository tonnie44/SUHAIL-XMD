const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://romi:romi@cluster0.pwuoewh.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2547";




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
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_46_10_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODksXG4gICAgICAgIDMwLFxuICAgICAgICA4MixcbiAgICAgICAgODQsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxODYsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDU0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxLFxuICAgICAgICA0MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA3MixcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDU4LFxuICAgICAgICA4NixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDkyLFxuICAgICAgICA0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDc4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3LFxuICAgICAgICAxODMsXG4gICAgICAgIDU1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMixcbiAgICAgICAgNDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTksXG4gICAgICAgIDU1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDY3LFxuICAgICAgICA0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTczLFxuICAgICAgICA1MixcbiAgICAgICAgMTc3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQwLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzcsXG4gICAgICAgIDExLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMixcbiAgICAgICAgMTczLFxuICAgICAgICAyMzMsXG4gICAgICAgIDMzLFxuICAgICAgICA2MixcbiAgICAgICAgODgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMyxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NixcbiAgICAgICAgMTM2LFxuICAgICAgICA3NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY4LFxuICAgICAgICA3MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIxLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiby83bXlRc1ZweG9RMFNJMDJmL2JuVXg5R2RaVlRLSlN0WHZteHVBZ0xUYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3OTMwNDIyOTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE5OEQzQzczMjgyQzczNjY4OTZCNkU1NEIxNEQ0OTkwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyODc1NTE5OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc5MzA0MjI5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOENBRjQzNDM1NjYzMTJEQUI1Rjg2NUU3MDlCN0MzMzlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4NzU1MTk5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkZFTWZZcUdVU1FpcFc0dk95dTZyekFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDk5OGNjNzQtZmIyMS00NzZjLTg4YWEtNmNhYmI5ODE4YjliXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQyLFxuICAgICAgOTIsXG4gICAgICAyMzksXG4gICAgICAxNzQsXG4gICAgICAyNTUsXG4gICAgICA0MSxcbiAgICAgIDE5NSxcbiAgICAgIDEzMCxcbiAgICAgIDUxLFxuICAgICAgMTksXG4gICAgICAxOCxcbiAgICAgIDE3NCxcbiAgICAgIDEzNyxcbiAgICAgIDI1MyxcbiAgICAgIDU1LFxuICAgICAgMTQzLFxuICAgICAgMTc1LFxuICAgICAgMTMwLFxuICAgICAgODksXG4gICAgICAxOTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM0LFxuICAgICAgMTM0LFxuICAgICAgMTkyLFxuICAgICAgMjMyLFxuICAgICAgODIsXG4gICAgICAzNixcbiAgICAgIDk4LFxuICAgICAgOTksXG4gICAgICA0NyxcbiAgICAgIDk4LFxuICAgICAgMTIyLFxuICAgICAgMjUyLFxuICAgICAgMzMsXG4gICAgICAxMzcsXG4gICAgICA2NyxcbiAgICAgIDIzMixcbiAgICAgIDExLFxuICAgICAgMTM0LFxuICAgICAgMTEsXG4gICAgICAxOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNjJNV0FLOU1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc5MzA0MjI5MDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjc4NDQ0NjYzMDMxODM6NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn4y05LqXyrfhtYPhtYjhtYnKsMOXzZzDl/Cfj7TigI3imKDvuI9cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLUDk5WWNERVBqcnFyZ0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZMUVptaVpPVG4wSzluRDNrS3o4Qk4vOFZreWdNa0JoOFJYaE85WkpoRmc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSzhiZTZIOWpac0Z2Nk0xZnpDSVlTeVBQWE82b29vNHMvYVdlY204Y2FjRDRteVhDREJTSEpyeHM4OHpUMnNUSFJoRVR1dUN4ZmFobHpJUi9FNmtvRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL3R2MUE0eDc4WFRVNXQzVlM5Rml1VjZBUHIzajhPWEhpUVRrUHRscDRFajlNMlRnNHJxdGNKTG9oeVZWZFoxTzNxblZjZHFEOVFyYzdta3BOWEVXQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzkzMDQyMjkwOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4NzU1MTk1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ1phXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDWmEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzb3BqL2pYUmVKaDEvdnhMR3pyd3p6VWJhT0I3d3hYazRkWW9WWWRBZ3hjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgyMTkxOTM5NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI4NzU1MTk3MzY5XCJ9Igp9"  // PUT your SESSION_ID 


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

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "0cdb1aed858329b9793413672094ce0d",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
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
