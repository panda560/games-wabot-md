let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • INDOSAT [+62 856-0946-7937]
│ • Xl [+62 819-5929-3465]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://www.instagram.com/invites/contact/?i=18n050noxcaqr&utm_content=4fkjlpc
│ • DANA [+62 856-0946-7937]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
