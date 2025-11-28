export const run = {
   usage: ['emp'],
   category: 'utilities',
   async: async (m, {
      client,
      text,
      isPrefix,
      Utils
   }) => {
      client.sendFile(m.chat, './lib/media/image/empire.webp', '', m)
   },
   error: false
}
