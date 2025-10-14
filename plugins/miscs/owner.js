export const run = {
   usage: ['owner'],
   category: 'miscs',
   async: async (m, {
      client,
      Config
   }) => {
      client.sendContact(m.chat, [{
         name: Config.owner_name,
         number: Config.owner,
         about: 'Admin & Creador'
      }], m, {
         org: 'Crysis Network',
         website: 'https://api.crysis.my.id',
         email: 'contact@crysis.my.id'
      })
   },
   error: false
}
