const { cmd } = require('../command');
const config = require('../config');
const prefix = config.PREFIX;
const fs = require('fs');
const { getBuffer } = require('../lib/functions2'); // Assure-toi que cette fonction récupère bien les buffers via axios
const path = require('path');

cmd({
    pattern: "linkgroup",
    alias: ["link", "invite", "grouplink", "satan-link"],
    desc: "Get group invite link.",
    category: "group",
    react: "🖇️",
    filename: __filename,
}, async (conn, mek, m, { from, quoted, body, args, q, isGroup, sender, reply }) => {
    try {
        if (!isGroup) return reply("❌ This feature is only available in groups.");

        const senderNumber = sender.split('@')[0];
        const botNumber = conn.user.id.split(':')[0];

        const groupMetadata = await conn.groupMetadata(from);
        const groupAdmins = groupMetadata.participants.filter(member => member.admin);
        const isBotAdmins = groupAdmins.some(admin => admin.id === botNumber + '@s.whatsapp.net');
        const isAdmins = groupAdmins.some(admin => admin.id === sender);

        if (!isBotAdmins) return reply("❌ I need to be an admin to fetch the group link.");
        if (!isAdmins) return reply("❌ Only group admins or the bot owner can use this command.");

        const inviteCode = await conn.groupInviteCode(from);
        if (!inviteCode) return reply("❌ Failed to retrieve the invite code.");

        const inviteLink = `https://chat.whatsapp.com/${inviteCode}`;
        const ownerJid = groupMetadata.owner || '';
        const groupOwner = ownerJid ? '@' + ownerJid.split('@')[0] : 'Unknown';
        const groupName = groupMetadata.subject || 'Unknown';
        const groupId = groupMetadata.id || from;
        const memberCount = groupMetadata.participants.length;

        const infoText = `╭╼━━━⦉ *ɢʀᴏᴜᴘ ʟɪɴᴋ* ⦊━━━╾╮
┃♣︎ɴᴀᴍᴇ: ${groupName}
┃♣︎ᴏᴡɴᴇʀ: ${groupOwner}
┃♣︎ɢʀᴏᴜᴘ ɪᴅ: ${groupId}
┃♣︎ʟɪɴᴋ ɢʀᴏᴜᴘ: ${inviteLink}
┃♣︎ᴍᴇᴍʙᴇʀs: #${memberCount}
╰╼━━━━━━━━━━━━━━━━╾╯
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟɪɢᴀɴɢ ᴛᴇᴄʜs 🇹🇿😈*`;

        let ppUrl;
        try {
            ppUrl = await conn.profilePictureUrl(from, 'image');
        } catch {
            ppUrl = 'https://telegra.ph/file/6880771a42bad09dd6087.jpg'; // Fallback photo
        }

        const buffer = await getBuffer(ppUrl);

        return conn.sendMessage(from, {
            image: buffer,
            caption: infoText,
            mentions: [ownerJid]
        }, { quoted: m });

    } catch (error) {
        console.error("❌ Error in linkgroup command:", error);
        reply(`⚠️ An error occurred: ${error.message || "Unknown error"}`);
    }
});
