let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [+62 812-7367-7810]
│ • Xl [+62 819-5929-3465]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://www.instagram.com/invites/contact/?i=18n050noxcaqr&utm_content=4fkjlpc
│ • Gopay [+62 812-7367-7810]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
