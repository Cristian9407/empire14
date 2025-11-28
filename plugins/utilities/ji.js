export const run = {
   usage: ['emp'],
   category: 'utilities',
   async: async (m, {
      client,
      text,
      isPrefix,
      command,
      Utils
   }) => {
      client.sendSticker(m.chat, '/lib/media/image/empire.webp', '', m)
   },
   error: false
}
