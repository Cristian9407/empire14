export const run = {
   usage: ['emp'],
   category: 'utilities',
   async: async (m, {
      client,
      text,
      isPrefix,
      Utils
   }) => {
      client.sendFile(m.chat, 'https://tinyurl.com/gdd01', m)
   },
   error: false
}
