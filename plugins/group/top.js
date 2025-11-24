import { format } from 'date-fns'

export const run = {
   usage: ['infieles'],
   hidden: ['infiel'],
   category: 'group',
   async: async (m, {
      client,
      participants
   }) => {
      let member = participants.map(u => u.id)
      let now = new Date * 1
      var tag1 = member[Math.floor(member.length * Math.random())]
      var tag2 = member[Math.floor(member.length * Math.random())]
      var tag3 = member[Math.floor(member.length * Math.random())]
      var tag4 = member[Math.floor(member.length * Math.random())]
      var tag5 = member[Math.floor(member.length * Math.random())]
      var tag6 = member[Math.floor(member.length * Math.random())]
      var tag7 = member[Math.floor(member.length * Math.random())]
      var tag8 = member[Math.floor(member.length * Math.random())]
      var tag9 = member[Math.floor(member.length * Math.random())]
      var tag10 = member[Math.floor(member.length * Math.random())]
      if (tag1 == tag2 == tag3 == tag4 == tag5 == tag6 == tag7 == tag8 == tag9 == tag10) {
         for (let i = 0; i < 5; i++) {
            var tag1 = member[Math.floor(member.length * Math.random())]
            var tag2 = member[Math.floor(member.length * Math.random())]
            var tag3 = member[Math.floor(member.length * Math.random())]
            var tag4 = member[Math.floor(member.length * Math.random())]
            var tag5 = member[Math.floor(member.length * Math.random())]
            var tag6 = member[Math.floor(member.length * Math.random())]
            var tag7 = member[Math.floor(member.length * Math.random())]
            var tag8 = member[Math.floor(member.length * Math.random())]
            var tag9 = member[Math.floor(member.length * Math.random())]
            var tag10 = member[Math.floor(member.length * Math.random())]
            if (tag1 != tag2 != tag3 != tag4 != tag5 != tag6 != tag7 != tag8 != tag9 != tag10) {
               break
            }
         }
      }
      client.reply(m.chat, `乂  *I N F I E L E S*\n\n◦ @${tag1.replace(/@.+/, '')}\n◦ @${tag2.replace(/@.+/, '')}\n◦ @${tag3.replace(/@.+/, '')}\n◦ @${tag4.replace(/@.+/, '')}\n◦ @${tag5.replace(/@.+/, '')}\n◦ @${tag6.replace(/@.+/, '')}\n◦ @${tag7.replace(/@.+/, '')}\n◦ @${tag8.replace(/@.+/, '')}\n◦ @${tag9.replace(/@.+/, '')}\n◦ @${tag10.replace(/@.+/, '')}`)
   },
   group: true
}
