const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {

const helpMessage = `
╭───〔 🤖 ${settings.botName || '𝙿𝚁𝙸𝙽𝙲𝙴 𝚇𝙼𝙳 𝙱𝙾𝚃'} 〕───╮
│ 🔖 Version : ${settings.version || '3.0.0'}
│ 👑 Owner  : ${settings.botOwner || '𝙿𝚁𝙸𝙽𝙲𝙴 𝚇𝙼𝙳 𝙱𝙾𝚃'}
│ ▶️ YT     : ${global.ytch || 'N/A'}
╰────────────────────────╯
FREE BOT LINK
https://prince-mini-bot-p1o8.onrender.com/
━━━━━━━━━━━━━━━
🌐 *GENERAL*
━━━━━━━━━━━━━━━
.help / .menu
.ping
.alive
.tts <text>
.owner
.joke
.quote
.fact
.weather <city>
.news
.attp <text>
.lyrics <song>
.8ball <question>
.groupinfo
.staff / .admins
.vv
.trt <text> <lang>
.ss <link>
.jid
.url

━━━━━━━━━━━━━━━
👮 *ADMIN*
━━━━━━━━━━━━━━━
.ban @user
.promote @user
.demote @user
.mute <minutes>
.unmute
.del
.kick @user
.warn @user
.warnings @user
.antilink
.antibadword
.clear
.tag
.tagall
.tagnotadmin
.hidetag
.chatbot
.resetlink
.antitag <on/off>
.welcome <on/off>
.goodbye <on/off>
.setgname
.setgdesc
.setgpp

━━━━━━━━━━━━━━━
🔒 *OWNER*
━━━━━━━━━━━━━━━
.mode <public/private>
.clearsession
.antidelete
.cleartmp
.update
.settings
.setpp
.autoreact <on/off>
.autostatus <on/off>
.autotyping <on/off>
.autoread <on/off>
.anticall <on/off>
.pmblocker <on/off/status>
.pmblocker setmsg <text>
.setmention
.mention <on/off>

━━━━━━━━━━━━━━━
🎨 *IMAGE / STICKER*
━━━━━━━━━━━━━━━
.sticker
.blur
.crop
.removebg
.remini
.simage
.tgsticker
.meme
.take
.emojimix
.igs
.igsc

━━━━━━━━━━━━━━━
🖼️ *PICS*
━━━━━━━━━━━━━━━
.pies <country>
.china
.indonesia
.japan
.korea
.hijab

━━━━━━━━━━━━━━━
🎮 *GAMES*
━━━━━━━━━━━━━━━
.tictactoe
.hangman
.guess
.trivia
.answer
.truth
.dare

━━━━━━━━━━━━━━━
🤖 *AI*
━━━━━━━━━━━━━━━
.gpt
.gemini
.imagine
.flux
.sora

━━━━━━━━━━━━━━━
🎯 *FUN*
━━━━━━━━━━━━━━━
.compliment
.insult
.flirt
.shayari
.goodnight
.roseday
.character
.wasted
.ship
.simp
.stupid

━━━━━━━━━━━━━━━
🔤 *TEXT MAKER*
━━━━━━━━━━━━━━━
.metallic
.ice
.snow
.matrix
.neon
.devil
.purple
.thunder
.blackpink
.glitch
.fire

━━━━━━━━━━━━━━━
📥 *DOWNLOADER*
━━━━━━━━━━━━━━━
.play
.song
.spotify
.instagram
.facebook
.tiktok
.video
.ytmp4

━━━━━━━━━━━━━━━
🧩 *MISC*
━━━━━━━━━━━━━━━
.heart
.horny
.circle
.lgbt
.lolice
.namecard
.oogway
.tweet
.ytcomment
.comrade
.gay
.glass
.jail
.passed
.triggered

━━━━━━━━━━━━━━━
🖼️ *ANIME*
━━━━━━━━━━━━━━━
.nom
.poke
.cry
.kiss
.pat
.hug
.wink
.facepalm

━━━━━━━━━━━━━━━
💻 *GITHUB*
━━━━━━━━━━━━━━━
.git
.github
.sc
.script
.repo

━━━━━━━━━━━━━━━
📢 Join our channel for updates
━━━━━━━━━━━━━━━
`;

try {
    const imagePath = path.join(__dirname, '../assets/bot_image.jpg');

    if (fs.existsSync(imagePath)) {
        const imageBuffer = fs.readFileSync(imagePath);

        await sock.sendMessage(chatId, {
            image: imageBuffer,
            caption: helpMessage,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363422824898123@newsletter',
                    newsletterName: '𝙿𝚁𝙸𝙽𝙲𝙴 𝚇𝙼𝙳 𝙱𝙾𝚃',
                    serverMessageId: -1
                }
            }
        }, { quoted: message });

    } else {
        await sock.sendMessage(chatId, { text: helpMessage });
    }

} catch (err) {
    console.error('Help Error:', err);
    await sock.sendMessage(chatId, { text: helpMessage });
}
}

module.exports = helpCommand;
