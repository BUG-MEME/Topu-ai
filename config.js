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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUNvajlCR2xVNGtobWp1THFjWlpseExNKzllb24zbFBYSW1CTEFaOXhrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRk40UmNndFJWNmcxdXp3Ri9YdDVJL2ErYWtLM0NQKzBjU3ZCbzRVUkUwRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4SXMxS2tRMHBYL01sMGptQVk2UlVLK3IvVFM4SlREZWF1YVFSenkxMFg0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6WW1rN2hWS2N4WEtTMTgyNnpNcHBpWmdRaTZkTGpOZXo5L3VMYVJ2Tm13PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBCdHFRYjA1QU11YUV1azkzbkxRMVExdTRVampjSW1iUVM0cHNaakZuVlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9MZTU5SytEVFRUNnA5cTNnbEpJcEZDYVFYYi9GU25ucy8rVGRwa3QrU3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUNsNGRaVkFVV0dFbEc1dkpFUU43YTFQd1E0OUFQMVErZWZKeTJYeHltVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZuZ3VDMTU5cDRHSzdVQnZSUmJWRFBjRVN4ajk0ZjhaNEZaaHZwdGhYYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQvTll4UmVidy9UMnB2YzRITUhrMzUxckxnKzRwc1ZqcUgxeXRLUnc3NG45ZnJIWC9Jd2pHMjgwWHRBMjBqSE9CTWloZ0lWUnVncHdlYXU1QXRPdmdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODYsImFkdlNlY3JldEtleSI6IkVXRkJwT1VRd2ppOThyVFd5cUxOSFVCZzdzVE1DV2hoVjlwMHIwN2svTzA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik5vaHhWOExWUTRpUW5RbWZhdV9USWciLCJwaG9uZUlkIjoiYzJhODRlOGEtNmI4MC00MzgzLWI2MmUtMGYyZTkwNWMyMGYyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRQQzNBS2cya1d2R296aGwzL21vUmV6MG8rVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkSU9DNHE3aFRTcld2RzBnUzJnLy9pYVJvYms9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQkNTODdRS1oiLCJtZSI6eyJpZCI6IjIzNDkwNDk0ODI2Mjc6MTJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTUVNRVMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wzTzJKOEVFTkR1bnJnR0dETWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImRUdGxwYUpvUlJFM2lWOTlVei8vVjQ4d3lpdVBoYmg1bWVhMUx0bEZHbFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IklqcjlxMzdNRUEzYmRyd2gyR0lVaDRHYVFOMnhodEgwUFV6VVEwdnBqYzd4R2Z0MS9YY3JxcmZxZThPanJYOVJUOC9qcmJlRHZxYnJDaHlIcjR1N0FnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI0UWx1bzR6b0czU2FaVXJXT094Tk94WnZCS0VmZlgxQkRtRDYrWCtDa2xxcG55eGo4NmYrUjJxbHRnWS9tWUR4ZWxQRmhJZmdZOUNDbmV4YTJ6dzVndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwNDk0ODI2Mjc6MTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWFU3WmFXaWFFVVJONGxmZlZNLy8xZVBNTW9yajRXNGVabm10UzdaUlJwViJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODU1ODk0OX0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
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
