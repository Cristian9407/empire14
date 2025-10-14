import { Utils, NeoxrApi } from '@neoxr/wb'
global.Api = new NeoxrApi('https://api.neoxr.my.id/api', process.env.API_KEY)

import { createRequire } from 'module'
const require = createRequire(import.meta.url)

global.header = `© empire-bot v${require('../package.json').version}`
global.footer = `ʟɪɢʜᴛᴡᴇɪɢʜᴛ ᴡᴀʙᴏᴛ 🦖`
global.status = Object.freeze({
   invalid: Utils.Styles('URL no válida'),
   wrong: Utils.Styles('Formato incorrecto.'),
   fail: Utils.Styles('No se pueden obtener metadatos'),
   error: Utils.Styles('Se produjo un error'),
   errorF: Utils.Styles('Lo sentimos, esta función tiene un error.'),
   premium: Utils.Styles('Esta función solo para usuarios premium.'),
   auth: Utils.Styles('No tienes permiso para usar esta función, pregúntale primero al Administrador.'),
   owner: Utils.Styles('Este comando es solo para el Administrador.'),
   group: Utils.Styles('Este comando solo funcionará en grupos.'),
   botAdmin: Utils.Styles('Este comando funcionará cuando me convierta en Administrador.'),
   admin: Utils.Styles('Este comando solo es para Admins del grupo.'),
   private: Utils.Styles('Usar este comando en chat privado.'),
   gameSystem: Utils.Styles('Las funciones del juego han sido deshabilitadas.'),
   gameInGroup: Utils.Styles('Las funciones del juego no se han activado para este grupo.'),
   gameLevel: Utils.Styles('No puedes jugar porque tu nivel ha alcanzado el límite máximo.')
})
