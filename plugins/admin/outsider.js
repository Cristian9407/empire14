export const run = {
   usage: ['outsider'],
   use: '(option)',
   category: 'admin tools',
   async: async (m, {
      client,
      args,
      isPrefix,
      command,
      participants,
      Utils
   }) => {
      try {
         let member = participants.filter(v => !v.admin).map(v => v.id).filter(v => !v.startsWith('62') && v != client.decodeJid(client.user.id))
         if (!args || !args[0]) {
            if (member.length == 0) return client.reply(m.chat, Utils.texted('bold', `🚩 Este grupo está limpio de fantasmas.`), m)
            let teks = `✅ *${member.length}* forasteros encontrados, envia *${isPrefix + command} -y* para eliminarlos.\n\n`
            teks += member.map(v => '◦  @' + v.replace(/@.+/, '')).join('\n')
            client.reply(m.chat, teks, m)
         } else if (args[0] == '-y') {
            for (let jid of member) {
               await Utils.delay(2000)
               await client.groupParticipantsUpdate(m.chat, [jid], 'remove')
            }
            await client.reply(m.chat, Utils.texted('bold', `🚩 Hecho, ${member.length} fantasmas fueron eliminados con éxito.`), m)
         }
      } catch (e) {
         client.reply(m.chat, Utils.jsonFormat(e), m)
      }
   },
   admin: true,
   group: true,
   botAdmin: true
}
