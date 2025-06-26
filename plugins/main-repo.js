const fetch = require('node-fetch');
const config = require('../config');
const { cmd } = require('../command');

cmd({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "Fetch GitHub repository information",
    react: "🪄",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/PROFESSEURMDX/HAIKO-MDX-V2';

    try {
        const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        
        if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
        const repoData = await response.json();

        // Format 1: Classic Box
        const style1 = `
╭╼⧼⧼𝟐𝟒𝐑𝐄𝐀𝐋 𝐗𝐌𝐃 𝐑𝐄𝐏𝐎⧽⧽╾╮
┇╭─────────────┈⊷
┇┃♢ *ꜰᴏʟʟᴏᴡᴇʀꜱ 👥*: 2K+
┇┃♢ *ᴘʀᴏꜰɪʟᴇ 👤*: ligang_.4real
┇┃♢ *ɴᴀᴍᴇ 📝*: qutaybah🇹🇿☠️
┇┃♢ *ʟɪɴᴋ 🔗*: https://instagram.com/ligang_.4real
┇┃♢ *ʙᴇsᴛ ʙᴏᴛ ᴡᴀ 2025-2026*
┇╰─────────────┈⊷
╰┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅╍╯
> ${config.DESCRIPTION}`;

        const styles = [style1,];
        const selectedStyle = styles[Math.floor(Math.random() * styles.length)];

        // Send image with repo info
        await conn.sendMessage(from, {
            image: { url: `https://files.catbox.moe/8echg2.jpg` },
            caption: selectedStyle,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true
            }
        }, { quoted: mek });

        
    

    } catch (error) {
        console.error("Repo command error:", error);
        reply(`❌ Error: ${error.message}`);
    }
});

