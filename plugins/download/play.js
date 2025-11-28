export const run = {
   usage: ['play'],
   use: 'query',
   category: 'downloader',
   async: async (m, {
      client,
      text,
      isPrefix,
      command,
      users,
      Config,
      Utils
   }) => {
      try {
         if (!text) return client.reply(m.chat, Utils.example(isPrefix, command, 'lathi'), m)
         client.sendReact(m.chat, '🕒', m.key)
         var json = await Api.neoxr('/play', {
            q: text
         })
         if (!json.status) return client.reply(m.chat, Utils.jsonFormat(json), m)
         let caption = `乂  *Y T - P L A Y*\n\n`
         caption += `	◦  *Título* : ${json.title}\n`
         caption += `	◦  *Tamaño* : ${json.data.size}\n`
         caption += `	◦  *Duración* : ${json.duration}\n`
         caption += `	◦  *Bits* : ${json.data.quality}\n\n`
         caption += global.footer
         const chSize = Utils.sizeLimit(json.data.size, users.premium ? Config.max_upload : Config.max_upload_free)
         const isOver = users.premium ? `💀 Tamaño del archivo (${json.data.size}) excede el límite máximo.` : `⚠️ Tamaño del archivo (${json.data.size}), sólo puedes descargar archivos con un tamaño máximo de ${Config.max_upload_free} MB y para usuarios premium un máximo de ${Config.max_upload} MB.`
         if (chSize.oversize) return client.reply(m.chat, isOver, m)
         client.sendMessageModify(m.chat, caption, m, {
            largeThumb: true,
            thumbnail: json.thumbnail
         }).then(async () => {
            client.sendFile(m.chat, json.data.url, json.data.filename, '', m, {
               document: false,
               APIC: await Utils.fetchAsBuffer(json.thumbnail)
            }, {
               jpegThumbnail: await Utils.generateImageThumbnail(json.thumbnail)
            })
         })
      } catch (e) {
         client.reply(m.chat, Utils.jsonFormat(e), m)
      }
   },
   error: false,
   restrict: true

}

