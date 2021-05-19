let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Xl [+62 87881449422]
│ • Telkomsel [+62 81261470107]
╰────

`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
