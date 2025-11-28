export const run = {
   usage: ['emp'],
   category: 'utilities',
   async: async (m, {
      client,
      text,
      isPrefix,
      Utils
   }) => {
      client.sendSticker(m.chat, 'https://tinyurl.com/gdd01', m)
   },
   error: false
}
