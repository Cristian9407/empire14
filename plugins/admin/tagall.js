export const run = {
   usage: ['todos'],
   hidden: ['tagall', 'everyone'],
   use: 'text (optional)',
   category: 'admin tools',
   async: async (m, {
      client,
      text,
      participants,
      Utils
   }) => {
      try {
         let member = participants.map(v => v.id)
         let readmore = String.fromCharCode(8206).repeat(4001)
         let message = (!text) ? 'Atención ' + await (await client.groupMetadata(m.chat)).subject : text
         client.reply(m.chat, `乂  *T O D O S*\n\n*${message}*\n${readmore}\n${member.map(v => '◦  @' + v.replace(/@.+/, '')).join('\n')}`, m)
      } catch (e) {
         console.log(e)
         return client.reply(m.chat, Utils.jsonFormat(e), m)
      }
   },
   admin: true,
   group: true
}
