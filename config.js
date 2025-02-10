const fs = require("fs"); 
require("dotenv").config();

module.exports = {
    prefix: process.env.PREFIX || "*",
    ownerName: process.env.OWNER_NAME || "Warano",
    ownerNumber: process.env.OWNER_NUMBER || "237621092130",
    mode: process.env.MODE || "private",
    region: process.env.REGION || "Waratack",
    botName: process.env.BOT_NAME || "Waratack v1",
    exifPack: process.env.EXIF_PACK || "Warano Loves",
    exifAuthor: process.env.EXIF_AUTHOR || "Toxxic Warano",
    timeZone: process.env.TIME_ZONE || "Africa/Lagos",
    presenceStatus: process.env.PRESENCE_STATUS || "unavailable",
    autoRead: process.env.AUTO_READ === "false",
    autoViewStatus: process.env.AUTO_VIEW_STATUS === "true",
    autoReact: process.env.AUTO_REACT === "true",
    sessionId: process.env.SESSION_ID || "",
    autoRejectEnabled: process.env.AUTO_REJECT_ENABLED || "false",
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => {
    fs.unwatchFile(file); 
    console.log(`Update '${__filename}'`); 
    delete require.cache[file];
    require(file); 
});
