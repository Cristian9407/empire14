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
      return await client.sendSticker(m.chat, '/lib/media/image/empire.webp', m, {
                  packname: exif.sk_pack,
                  author: exif.sk_author
      })
   },
   error: false
}
