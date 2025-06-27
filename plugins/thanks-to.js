const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "qutaybah",
    alias: ["thanksto"],
    desc: "thanks to dev for helping",
    category: "main",
    react: "🗯️",
    filename: __filename
},
async (conn, mek, m, { from }) => {
    try {
        const message =`╭━━━⪨𝟐𝟒𝐑𝐄𝐀𝐋 𝐗𝐌𝐃⪩━━━╮
┃╭╼━━━━━━━━━━━┈⊷
┃┃👨‍💻 𝗗𝗘𝗩:𝗟𝗜𝗚𝗔𝗡𝗚 𝗧𝗘𝗖𝗛𝗦
┃┃🪀 𝗡𝗨𝗠𝗕𝗘𝗥:+255624314178
┃┃🛠️ 𝗕𝗡𝗔𝗠𝗘: 𝟐𝟒𝐑𝐄𝐀𝐋 𝐗𝐌𝐃
┃┃🙋‍♂️ 𝗛𝗜: @${m.sender.split("@")[0]}
┃╰╼━━━━━━━━━━━┈⊷
╰╼══════════════╾╯
> *𝑃𝑂𝑊𝐸𝑅𝐸𝐷 𝐵𝑌 𝑳𝑰𝑮𝑨𝑵𝑮 𝑻𝑬𝑪𝑯𝑺 *`;

        await conn.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/lhjss2.jpg' },
            caption: message,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1000,
                isForwarded: true
            }
        }, { quoted: mek });

    } catch (err) {
        console.error("ThanksTo Error:", err);
        await conn.sendMessage(from, { text: `Error: ${err.message}` }, { quoted: mek });
    }
});
                    
