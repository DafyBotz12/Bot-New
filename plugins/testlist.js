let handler = async (m, { itsu, command, args, text, usedPrefix, DevMode }) => {
  let { spawn } = require('child_process')
  let fs = require('fs')
const vn =[
'./src/Nya.mp3',
'./src/Nyaa.mp3',
]
hasil = vn[Math.floor(Math.random() * (vn.length))]
hisil = fs.readFileSync(hasil)
const anu = {
		key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": global.thumb
					},
					"title": "𝙱𝚘𝚝 𝙳𝚑𝚊𝚏𝚢 𝙽𝚒𝚑 𝙱𝚊𝚗𝚐",
					"description": "𝙸𝚗𝚒 𝙳𝚑𝚊𝚏𝚢",
					"currencyCode": "USD",
					"priceAmount1000": "999999999999",
					"retailerId": ">//<",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
		}
}
  itsu.relayWAMessage(itsu.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "𝙼 𝙴 𝙽 𝚄 𝙳 𝙷 𝙰 𝙵 𝚈 𝙱 𝙾 𝚃",
                        "description": " \n_©𝙺𝚑𝚊𝚍𝚊𝚏𝚢𝙽𝚒𝚑𝙱𝚊𝚗𝚐 ",
                        "buttonText": `Menu`,
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            { title: '『ＬｉｓｔＭｅｎｕ』',
                                "rows": [
                                    {
                                        "title": `『👥』- ʙᴏᴛ ɢʀᴏᴜᴘ `, "description":  ``,
                                        "rowId": `${usedPrefix}from`
                                    }, {
                                       "title": `『⌛』-  ʀᴜɴᴛɪᴍᴇ` , "description": ``,
                                       "rowId": `${usedPrefix}runtime`
                                    }, {
                                       "title": `『👤』- ᴏᴡɴᴇʀ`,
"description": ``, 
                                       "rowId": `${usedPrefix}owner`
                                    }, {
                                       "title": `『⚙️』- SC `,
"description": ``, 
                                        "rowId": `${usedPrefix}sc`
                                    }, {
                                        "title": `『📄』- ᴀʙᴏᴜᴛ `,
"description": ``, 
                                        "rowId": `${usedPrefix}about`                               
                                    }, { 
                                        "title": `『📱』- sᴛᴀᴛs`,
"description": ``, 
                                        "rowId": `${usedPrefix}stats`
                                    },{
"title": `『⋮☰』- ᴍᴇɴᴜ`,
"description": ``, 
                                       "rowId": `${usedPrefix}404`}
                                ]
                            }
                        ]
                    }
                 }, {quoted: anu}),{waitForAck: true}
)
return itsu.sendMessage(m.chat, hisil, 'audioMessage', {mimetype: 'audio/mp4', quoted: m, ptt: true, duration: 4040404})
}

handler.help = ['menu','help','?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler


