const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: "dev",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `> *_ᴛʜᴇ ʙᴇsᴛ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ_*
╭╼━❍ 𝗕𝗜𝗢𝗚𝗥𝗔𝗣𝗛𝗬 ❍
┃│❍ *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʟɪɢᴀɴɢ ᴛᴇᴄʜs*
┃│❍ *ʀᴇᴀʟ ɴᴀᴍᴇ➭ qutaybah*
┃│❍ *ɴɪᴄᴋɴᴀᴍᴇ➮ 𝟐𝟒𝐑𝐄𝐀𝐋 𝐗𝐌𝐃*
┃│❍ *ᴀɢᴇ➭ ɴᴏᴛ ᴅᴇғɪɴᴇᴅ*
┃│❍ *ᴄɪᴛʏ➭ ɴᴏᴛ ᴅᴇғɪɴᴇᴅ*
┃│❍ *ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ*
┃╰────────────────
╰╼━━━━━━━━━━━━━━━━╾╯
╭╼━❍ 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 ❍
┃│❍➳ *Cyber 4REAL*
┃│❍➳ *ᴏɴʟʏ ᴏɴᴇ ᴅᴇᴠᴇʟᴏᴘᴇʀ*
┃│❍➳ *ʙᴏᴛ➭ 𝟐𝟒𝐑𝐄𝐀𝐋 𝐗𝐌𝐃*
┃╰────────────────
╰╼━━━━━━━━━━━━━━━━╾╯
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟɪɢᴀɴɢ ᴛᴇᴄʜs*`
await conn.sendMessage(from, {
    image: { url: 'https://files.catbox.moe/lhjss2.jpg' },
    caption: about,
    contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true
    }
}, { quoted: mek })

}catch(e){
console.log(e)
reply(`${e}`)
}
})
