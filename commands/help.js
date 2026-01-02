const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {

const mode = global.public ? 'Public' : 'Private';

const helpMessage = `
╭━━━〔 🤖 *${settings.botName || 'KnightBot-MD'}* 〕━━━╮
┃ 🔹 *Version:* ${settings.version || '3.0.0'}
┃ 🔹 *Owner:* ${settings.botOwner || 'Mr Unique Hacker'}
┃ 🔹 *YouTube:* ${global.ytch || 'Not Set'}
╰━━━━━━━━━━━━━━━━━━━━╯

╭──〔 ℹ️ *BOT INFO* 〕──╮
┃ 👑 *Owner* : ${settings.botOwner || 'Prince'}
┃ 🌍 *Mode*  : ${mode}
┃ ⚙️ *Ver*   : ${settings.version || '3.0.0'}
╰────────────────╯

✨ *WELCOME TO PRO COMMAND MENU* ✨

╭━━━〔 🌐 GENERAL 〕━━━╮
┃ • .help / .menu
┃ • .ping
┃ • .alive
┃ • .tts <text>
┃ • .owner
┃ • .joke
┃ • .quote
┃ • .fact
┃ • .weather <city>
┃ • .news
┃ • .attp <text>
┃ • .lyrics <song>
┃ • .8ball <question>
┃ • .groupinfo
┃ • .admins
┃ • .vv
┃ • .trt <text> <lang>
┃ • .ss <link>
┃ • .jid
┃ • .url
╰━━━━━━━━━━━━━━━╯

╭━━━〔 👮 ADMIN 〕━━━╮
┃ • .ban @user
┃ • .kick @user
┃ • .promote / .demote
┃ • .mute <min>
┃ • .unmute
┃ • .delete
┃ • .warn / .warnings
┃ • .antilink
┃ • .antibadword
┃ • .tagall
┃ • .hidetag
┃ • .chatbot
┃ • .welcome on/off
┃ • .goodbye on/off
┃ • .setgname
┃ • .setgdesc
┃ • .setgpp
╰━━━━━━━━━━━━━━━╯

╭━━━━━━━━━━━━━━━━━━━━╮
┃ 🚀 *Powered By ${settings.botName || 'KnightBot-MD'}*
┃ 💎 *Premium WhatsApp Bot*
╰━━━━━━━━━━━━━━━━━━━━╯
`;

try {
const imagePath = path.join(__dirname, '../assets/bot_image.jpg');

const buttons = [
{
buttonId: '.menu',
buttonText: { displayText: '📜 MENU' },
type: 1
},
{
buttonId: '.owner',
buttonText: { displayText: '👑 OWNER' },
type: 1
},
{
buttonId: '.channel',
buttonText: { displayText: '📢 CHANNEL' },
type: 1
}
];

if (fs.existsSync(imagePath)) {
const imageBuffer = fs.readFileSync(imagePath);

await sock.sendMessage(chatId, {
image: imageBuffer,
caption: helpMessage,
buttons: buttons,
headerType: 4
}, { quoted: message });

} else {

await sock.sendMessage(chatId, {
text: helpMessage,
buttons: buttons,
headerType: 1
}, { quoted: message });

}

} catch (err) {
console.error(err);
await sock.sendMessage(chatId, { text: helpMessage });
}
}

module.exports = helpCommand;
