export const run = {
   usage: ['foto',],
   hidden: ['ava'],
   use: 'mention or reply',
   category: 'group',
   async: async (m, {
      client,
      text,
      Utils
   }) => {
      let number = isNaN(text) ? (text.startsWith('+') ? text.replace(/[()+\s-]/g, '') : (text).split`@` [1]) : text
      if (!text && !m.quoted) return client.reply(m.chat, Utils.texted('bold', `🚩 Mencionar o etiquetar el chat.`), m)
      if (isNaN(number)) return client.reply(m.chat, Utils.texted('bold', `🚩 Número no válido.`), m)
      if (number.length > 15) return client.reply(m.chat, Utils.texted('bold', `🚩 Formato no válido.`), m)
      try {
         if (text) {
            var user = number + '@s.whatsapp.net'
         } else if (m.quoted.sender) {
            var user = m.quoted.sender
         } else if (m.mentionedJid) {
            var user = number + '@s.whatsapp.net'
         }
      } catch (e) {} finally {
         var pic = false
         try {
            var pic = await client.profilePictureUrl(user, 'image')
         } catch {} finally {
            if (!pic) return client.reply(m.chat, Utils.texted('bold', `🚩 No puso foto de perfil.`), m)
            client.sendFile(m.chat, pic, '', '', m)
         }
      }
   },
   error: false
}
