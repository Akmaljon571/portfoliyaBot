import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv"
import { read, write } from "./utils/FS.js"
import path from 'path'
dotenv.config()

const bot = new TelegramBot(process.env.TOKEN_BOT, {polling: true})

bot.on('error', console.log)

bot.onText(/\/start/, msg => {
    try {
        const chatId = msg.chat.id
        const fil = read("userId").filter(e => e.chatId === chatId)
        if (!fil.length) {
            const all = read("userId")
            all.push({id: all.at(-1)?.id + 1 || 1, chatId, name: msg.chat.first_name})
            write("userId", all)
        } else {
            bot.sendMessage(chatId, `Assalomu aleykum✌️  ${msg.chat.first_name}👤!!! 
            \nSiz Akmal.Dev👨‍💻 ni shahsiy portfoliya botida🤖 turibsiz🕳`, {
                reply_markup: {
                    keyboard: [
                        [ "Mening Projectlarim💻", "Men Haqimda Malumot👨‍💻"],
                        [ "Rezume📝", "Mening Ishlarim🛠 " ],
                        [ "Men bilan bo'g'lanish📨" ]
                    ],
                    resize_keyboard: true
                }
            })
        }

    } catch (err) {
        console.log(err);
    }
})

bot.on("text", msg => {
    const chatId = msg.chat.id
    try {
       if (msg.text == "Mening Ishlarim🛠") {
        bot.sendMessage(chatId, "Sabina's Academiyasida🏢 2 oylik tajribam bor. \nNega🤷‍♂️ buncha kam 2oy holos deyishga \nShoshilmasligingizni holardim💆‍♂️ \nBunga arzirli sabablar bor edi🤫. Yol juda uzoq🏃🏻‍♂️ 3 soatlik yol muomosi va boshqa muomolar edi🤭")
       }
    } catch (err) {
        console.log(err);
    }
})

bot.on("text", msg => {
    const chatId = msg.chat.id
    try {
        if (msg.text == "Mening Projectlarim💻") {
            bot.sendMessage(chatId, "Hozirda ozim qilgan real projectlarim anchagina✈️ Tanishib chiqishingiz mumkun", {
                reply_markup: {
                    keyboard: [
                        [ "CRM🌇", "Mahina Shop👕", "Akademiya🏙"],
                        [ "Git Hub Clone🗿", "rezumi sayt🥷" ],
                        [ "Instagram Clone💭", "Karzinka Sayt⛽️" ],
                        [ "Back To🔚" ]
                    ],
                    resize_keyboard: true
                }
            })
        }

        if (msg.text == "CRM🌇") {
            bot.sendPhoto(chatId, path.join(process.cwd(), 'src', 'img', 'crm.jpg'), {
                caption: `
               \n ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
                \n👨‍💻Developer: Akmal dev.
               \n 🛡Nomi: Sabina's Academy
               \n 🌚Vazifasi: CRM
               \n 🔢Yili:  2022
               \n 📧Git Hub:  https://github.com/Akmaljon571/crm
               \n ⚡️Title: Bu Osha Men 2 oy ishlagan Sabina's Akademiyasida qilgan projectim osha Oquv Markaz uchun CRM qilib bergan edim!!! 
                \n  ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖`,
                parse_mode: "HTML"
            })
        }

        if (msg.text == "Mahina Shop👕") {
            bot.sendPhoto(chatId, path.join(process.cwd(), 'src', 'img', 'shop.jpg'), {
                caption: `
               \n ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
                \n👨‍💻Developer: Akmal dev.
               \n 🛡Nomi: Mahina Shop
               \n 🌚Vazifasi: Online Magazin
               \n 🔢Yili:  2022
               \n 📧Git Hub:  https://github.com/Akmaljon571/Online_magazin
               \n 📬Link: https://mahinashop.netlify.app
               \n ⚡️Title: Bu ozimni Opam uchun yasab bergan web sity 90% ishlaydi. 
                \n  ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖`,
                parse_mode: "HTML"
            })
        }

        if (msg.text == "Akademiya🏙") {
            bot.sendPhoto(chatId, path.join(process.cwd(), 'src', 'img', 'akademiya.jpg'), {
                caption: `
               \n ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
                \n👨‍💻Developer: Akmal dev.
               \n 🛡Nomi: Akademiya sayti
               \n 🌚Vazifasi: Akademiya Haqida
               \n 🔢Yili:  2022
               \n 📧Git Hub:  https://github.com/Akmaljon571/Sabinas_Academy
               \n 📬Link: https://akademy.netlify.app/
               \n ⚡️Title: Bu men ishlagan Akademiyani shahsiy sayti.
                \n  ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖`,
                parse_mode: "HTML"
            })
        }

        if (msg.text == "Git Hub Clone🗿") {
            bot.sendPhoto(chatId, path.join(process.cwd(), 'src', 'img', 'git.jpg'), {
                caption: `
               \n ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
                \n👨‍💻Developer: Akmal dev.
               \n 🛡Nomi: Git Hub
               \n 🌚Vazifasi: Git Hub Clone
               \n 🔢Yili:  2022
               \n 📧Git Hub:  https://github.com/Akmaljon571/git_clone
               \n 📬Link: https://sultonbek1772.netlify.app/
               \n ⚡️Title: Zerikishda Git Hubni clon qilgan edim!!!
                \n  ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖`,
                parse_mode: "HTML"
            })
        }

        if (msg.text == "Karzinka Sayt⛽️") {
            bot.sendPhoto(chatId, path.join(process.cwd(), 'src', 'img', 'kar.jpg'), {
                caption: `
               \n ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
                \n👨‍💻Developer: Akmal dev.
               \n 🛡Nomi: Karzinka Sayt
               \n 🌚Vazifasi: Online Magazin
               \n 🔢Yili:  2022
               \n 📧Git Hub:  https://github.com/Akmaljon571/Karzinka
               \n 📬Link: https://karzinkan1.netlify.app/
               \n ⚡️Title: Karzinka Web sayti oldi sotdi sayti backentlari bilan Full, Registr, singUp hammasi mavjud
                \n  ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖`,
                parse_mode: "HTML"
            })
        }

        if (msg.text == "rezumi sayt🥷") {
            bot.sendPhoto(chatId, path.join(process.cwd(), 'src', 'img', 'r.jpg'), {
                caption: `
               \n ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
                \n👨‍💻Developer: Akmal dev.
               \n 🛡Nomi: Rezumi
               \n 🌚Vazifasi: Men Haqimda 
               \n 🔢Yili:  2022
               \n 📧Git Hub:  https://github.com/Akmaljon571/rezumit
               \n 📬Link: https://rezumi.netlify.app/
               \n ⚡️Title: Ozim haqimdagi Bazi Malumotlarimni shu saytga bazilarini esa ushbu botga joyladim
                \n  ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖`,
                parse_mode: "HTML"
            })
        }

        if (msg.text == "Back To🔚") {
            bot.sendMessage(chatId, "Asosiy Menyu", {
                reply_markup: {
                    keyboard: [
                        [ "Mening Projectlarim💻", "Men Haqimda Malumot👨‍💻"],
                        [ "Rezume📝", "Mening Ishlarim🛠 " ],
                        [ "Men bilan bo'g'lanish📨" ]
                    ],
                    resize_keyboard: true
                }
            })
        }

        if (msg.text == "Instagram Clone💭") {
            bot.sendPhoto(chatId, path.join(process.cwd(), 'src', 'img', 'insta.jpg'), {
                caption: `
               \n ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
                \n👨‍💻Developer: Akmal dev.
               \n 🛡Nomi: Intagram
               \n 🌚Vazifasi: Instagram Clone
               \n 🔢Yili:  2022
               \n 📧Git Hub:  https://github.com/Akmaljon571/Instagram-front
               \n ⚡️Title: Dostlarim instagramga qiziqib yurgan bir vaqtda men Instagramni Yasayotgan edim!!! AUF☝️
                \n  ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖`,
                parse_mode: "HTML"
            })
        }
    } catch (err) {
        console.log(err);
    }
})

bot.on("text", msg => {
    const chatId = msg.chat.id
    try {
        if (msg.text == "Men Haqimda Malumot👨‍💻") {
           bot.sendMessage(chatId, `
           \n👨‍💻 Dasturchi Xaqida Qisqacha Ma'lumotlar! 🇬🇧
           \n➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
           \n👤Ism: Akmaljon
           \n🛡Familiya: Ahmadjonov
           \n🔢Yosh:  18
           \n⚡️Yashash Joyi:  Tashkent
           \n🗂Web developer and Telegram Bot
           \n🏢 2-KHTM apparat va dasturiy taminot sozlovchisi
           \n 🏞 Najot Talim o'quvchisi
           \n📧E-Mail: ahmadjonovakmal079@gmail.com
           \n📬Instagram: akmal77_571__ (https://www.instagram.com/akmal77_571__)
           \n📍Telegram: Web Developer(https://t.me/webdeveloper571)`) 
        }
    } catch (err) {
        console.log(err);
    }
})

bot.on("text", msg => {
    const chatId = msg.chat.id
    try {
        if (msg.text == "Rezume📝") {
            bot.sendPhoto(chatId, path.join(process.cwd(), 'src', 'img', 'rezumi.png'))
        }
    } catch (err) {
        console.log(err);
    }
})

bot.on("text", msg => {
    const chatId = msg.chat.id
    try {
        if (msg.text == "Men bilan bo'g'lanish📨") {
            bot.sendMessage(chatId, `
            \n👨‍💻 Dasturchi Bilan Bog'lanish! 🇬🇧
            \n➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
            \n⚡️Yashash Joyi:  Tashkent, Yangiyol sh.
            \n▫️ Natoj Talim Talabasi
            \n📧E-Mail: ahmadjonovakmal079@gmail.com
            \n📬Instagram: akmal77_571__ (https://www.instagram.com/akmal77_571__)
            \n📍Telegram: Web Developer(https://t.me/webdeveloper571)
            \n🗿Git Hub: Akmaljon571(https://github.com/Akmaljon571)
            \n😎LinkedIn: Akmal(https://www.linkedin.com/feed/)
            \n💫OneApp: Akmal571(https://oneapp.ly/dashboard/my-application)
            `)
        }
    } catch (err) {
        console.log(err);
    }
})
