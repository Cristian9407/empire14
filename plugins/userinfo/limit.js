export const run = {
   usage: ['limit'],
   category: 'user info',
   async: async (m, {
      client,
      isPrefix,
      users,
      Utils
   }) => {
      if (users.limit < 1) return client.reply(m.chat, `🚩 El uso de su bot ha alcanzado el límite y se restablecerá en 00.00\n\nPara obtener más límites, actualiza a un plan premium envia *${isPrefix}premium*`, m)
      client.reply(m.chat, `🍟 Tu límite : [ *${Utils.formatNumber(users.limit)}* ]${!users.premium ? `\n\nPara obtener más límites, actualiza a un plan premium envia *${isPrefix}premium*` : ''}`, m)
   },
   error: false
}
