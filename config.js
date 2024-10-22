//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Topudmh@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/13f1bb945857eb9b1eca6.jpg";
global.devs = "2349049482627";
global.sudo = process.env.SUDO || "2349049482627";
global.owner = process.env.OWNER_NUMBER || "2349049482627";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0xsc0FCUmJ6d2xndUFLZWxVWlVzeHE5U0ltKy80TWlNTFA5RDZsek5GST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2ZGMS9xYUh6cFBSMndyMzNhZFhhMTVzeEFTVjRhekFKYk05T1VTeThCaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSktJMkpqRDZTb3ZKSnl5TXRFOGIxTlFuaU9SMnIrRStJa1hGNkFJVW1JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzYUpUbXorS2dnNi9tUEkvVmFyTmtNbFNqZVlEbUxlTzM1cWxXVStGZEZRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVIK3YwMVFpZTlYU2Q4bVVzZWJ0YTNneWxPSlNJVGZxUVRFNDJSZFduSE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlQvM3VJSS9uVFJXWDNpRER1T2RRcEdiU2xqSnErWVU0dFdmcnU4SmEwVzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEVoNkJ6ZXRXMXpHNzZGRlo4SW5rRlBaUi83TGxVZGVsQmZLR3dSQXNVcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXE4TFJvMkNuUEJsSm45eFo3UW14ZE90S0lPWTFNZDh5S2dCVVhiQ29Faz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNvNjR1eGF4Y3R3b3huNm9uUHJnY2duRktFb0ZnQlJKYTZTTmZOUkw0emZPdERGUUtYQjQxVmVEaFRkUFI2ODFYa010YXlhMjdsVWMyMjR6M2FBVUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkwLCJhZHZTZWNyZXRLZXkiOiJrOGpNUDI1aVlSWEEzalp1UlpYN0dCb0JZT2FwK1kxTGpSaEZLeHg0STNRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2RnQwTFRBNFIyYWlOX0t6SWVlcEN3IiwicGhvbmVJZCI6IjMzMGE2ZWMyLTZiOWYtNGM2YS1iNDIzLWRkODI4N2I2OWUxOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4TGZpeWlGWW1BeXZ5enNSZmFDbFNKVkZsZFU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOC8yN29HOFdVZTE3UGNFL2U5Q2RheXZrTTU0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjE2RzY0TjFRIiwibWUiOnsiaWQiOiIyMzQ5MDQ5NDgyNjI3OjU3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik1FTUVTIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMbk8ySjhFRUwvajJyY0dHQWtnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJkVHRscGFKb1JSRTNpVjk5VXovL1Y0OHd5aXVQaGJoNW1lYTFMdGxGR2xVPSIsImFjY291bnRTaWduYXR1cmUiOiIyTGZVVzU4RnVpeHhLZ0xIa3c1dzdaQ0hZWTV5N2thTkgxbXZqczQ1dmREUDBUb0Z4ZmMzbFpNTGM5cDVGMzVYdnZPeFVJUFdMamsvb3dIN0hpUTFDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNG83NE55ZnNpN0Jic3VDMWZ5THFkRTlsMkdvUXN6aVlZcTBqMUtUNEVQMUFObzh2QTV6SFQ0WVgrNXZyTmpzWE96cWs0S3RVeGgzZXBVd2t6enFtQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDQ5NDgyNjI3OjU3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhVN1phV2lhRVVSTjRsZmZWTS8vMWVQTU1vcmo0VzRlWm5tdFM3WlJScFYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc0NDM0MDQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRFRNIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝖂𝖔𝖜 𝖙𝖔𝖕𝖚 𝖒𝖉 𝖍𝖆𝖘 𝖏𝖚𝖘𝖙 𝖌𝖊𝖓𝖊𝖗𝖆𝖙𝖊𝖉 𝖆 𝖓𝖊𝖜 𝖋𝖎𝖑𝖊",
  author: process.env.PACK_AUTHER || "TOPU",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "EMEM-Md",
  ownername: process.env.OWNER_NAME || "MEMELORD",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "TOPU").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
