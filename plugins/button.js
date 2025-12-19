import fs from 'fs'

export const run = {
   usage: ['apk', 'button2', 'button3', 'button4', 'button5', 'button6', 'button7'],
   category: 'example',
   async: async (m, {
      client,
      isPrefix,
      command,
      setting,
      Utils
   }) => {
      try {
         switch (command) {
            case 'apk':
               const buttons = [{
                  name: 'quick_reply',
                  buttonParamsJson: JSON.stringify({
                     display_text: 'Runtime',
                     id: `${isPrefix}run`
                  })
               }, {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                     title: 'Tap Here!',
                     sections: [{
                        rows: [{
                           title: 'HTTP Injector',
                           description: `6.3.6`,
                           id: `${isPrefix}gdrive https://drive.google.com/file/d/1mg-29OunJ14EKppSCE1J2CV_3zmJZHu-/view?usp=drivesdk`
                        }, {
                           title: 'Clash Meta For Android',
                           description: `2.11.8`,
                           id: `${isPrefix}gdrive https://drive.google.com/file/d/1o1kBg1szSFEDy3_nLoE6dCIaHMw_jfm7/view?usp=drivesdk`
                         }, {
                           title: 'HTTP Custom',
                           description: `5.11.29-RC90`,
                           id: `${isPrefix}gdrive https://drive.google.com/file/d/1o6_w0LnNa0va7g0FCJgEe5x6gas22cpi/view?usp=drivesdk`
                         }, {
                           title: 'XuperMov',
                           description: `6.2.1`,
                           id: `${isPrefix}gdrive https://drive.google.com/file/d/1bgyuuq88B6NyKITd-T7hsuSthArJkqcA/view?usp=drivesdk`
                         }, {
                           title: 'XuperTV',
                           description: `4.34.4`,
                           id: `${isPrefix}gdrive https://drive.google.com/file/d/1Xt3ZuB545uP_2wmWLn5IIuEE_DfLkoln/view?usp=drivesdk`
                        }]
                     }]
                  })
               }]
               client.sendIAMessage(m.chat, buttons, m, {
                  header: global.header,
                  content: 'Hi! @0',
                  v2: true,
                  footer: global.footer,
                  media: Utils.isUrl(setting.cover) ? setting.cover : Buffer.from(setting.cover, 'base64'),
               })
               break
      
            case 'button2': // Button 2 (Text Only)
               client.replyButton(m.chat, [{
                  text: 'Runtime',
                  command: '.runtime'
               }, {
                  text: 'Statistic',
                  command: '.stat'
               }], m, {
                  text: 'Hi @0',
                  footer: global.footer
               })
               break

            case 'button3': // Button 3 (Image & Video)
               client.replyButton(m.chat, [{
                  text: 'Runtime',
                  command: '.runtime'
               }, {
                  text: 'Statistic',
                  command: '.stat'
               }], m, {
                  text: 'Hi @0',
                  footer: global.footer,
                  media: fs.readFileSync('./media/image/default.jpg') // video or image (url or buffer)
               })
               break

            case 'button4': // Button 4 (Document)
               client.replyButton(m.chat, [{
                  text: 'Runtime',
                  command: '.runtime'
               }, {
                  text: 'Statistic',
                  command: '.stat'
               }], m, {
                  text: 'Hi @0',
                  footer: global.footer,
                  media: Utils.isUrl(setting.cover) ? setting.cover : Buffer.from(setting.cover, 'base64'), // video or image link
                  document: {
                     filename: 'empire-cover.jpg'
                  }
               })
               break

            case 'button5': // Button 5 (Carousel)
               const cards = [{
                  header: {
                     imageMessage: global.db.setting.cover,
                     hasMediaAttachment: true,
                  },
                  body: {
                     text: "P"
                  },
                  nativeFlowMessage: {
                     buttons: [{
                        name: "cta_url",
                        buttonParamsJson: JSON.stringify({
                           display_text: 'Community',
                           url: global.db.setting.link,
                           webview_presentation: null
                        })
                     }]
                  }
               }, {
                  header: {
                     imageMessage: Utils.isUrl(setting.cover) ? setting.cover : Buffer.from(setting.cover, 'base64'),
                     hasMediaAttachment: true,
                  },
                  body: {
                     text: "P"
                  },
                  nativeFlowMessage: {
                     buttons: [{
                        name: "cta_url",
                        buttonParamsJson: JSON.stringify({
                           display_text: 'Crysis API',
                           url: 'https://api.crysis.eu',
                           webview_presentation: null
                        })
                     }]
                  }
               }]

               client.sendCarousel(m.chat, cards, m, {
                  content: 'Hi!'
               })
               break

            case 'button6': // Button 6 (Message Modify)
               client.replyButton(m.chat, [{
                  text: 'Runtime',
                  command: '.runtime'
               }, {
                  text: 'Statistic',
                  command: '.stat'
               }], m, {
                  text: 'Hi @0',
                  footer: global.footer,
                  docs: {
                     name: 'オートメーション',
                     pages: 20,
                     size: '1GB',
                     extension: 'ppt'
                  },
                  body: 'WhatsApp Automation',
                  thumbnail: Utils.isUrl(setting.cover) ? setting.cover : Buffer.from(setting.cover, 'base64')
               })
               break
            
            case 'button7': {
               const buttons = [{
                  name: "quick_reply",
                  buttonParamsJson: JSON.stringify({
                     display_text: "Owner",
                     id: `${isPrefix}owner`
                  }),
               }, {
                  name: "cta_url",
                  buttonParamsJson: JSON.stringify({
                     display_text: "Rest API",
                     url: "https://api.crysis.my.id",
                     merchant_url: "https://api.crysis.my.id"
                  })
               }, {
                  name: "cta_copy",
                  buttonParamsJson: JSON.stringify({
                     display_text: "Copy",
                     copy_code: "123456"
                  })
               }, {
                  name: "cta_call",
                  buttonParamsJson: JSON.stringify({
                     display_text: "Call",
                     phone_number: "593985807958"
                  })
               }, {
                  name: "single_select",
                  buttonParamsJson: JSON.stringify({
                     title: "Next Page",
                     sections: [{
                        rows: [{
                           title: "Owner",
                           description: `X`,
                           id: `${isPrefix}owner`
                        }, {
                           title: "Runtime",
                           description: `Y`,
                           id: `${isPrefix}run`
                        }]
                     }]
                  })
               }]

               client.sendIAMessage(m.chat, buttons, m, {
                  header: global.header,
                  content: 'Hi! @0',
                  v2: true,
                  footer: global.footer,
                  media: Utils.isUrl(setting.cover) ? setting.cover : Buffer.from(setting.cover, 'base64'),
                  multiple: {
                     name: 'オートメーション',
                     code: 'empire-bot',
                     list_title: 'Select Menu',
                     button_title: 'Tap Here!'
                  }
               })
               break
            }
         }
      } catch (e) {
         client.reply(m.chat, Utils.jsonFormat(e), m)
      }
   },
   error: false

}






