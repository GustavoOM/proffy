import express from "express"
import cors from "cors"
import routes from "./routes";

const ServerPort = 3333;
const emojiList = [...'🐶🐱🐭🐹🐰🦊🐻🐼🐨🐯🦁🐮🐷🐸🐵🙈🙉🙊🐒🐔🐧🐦🐤🐣🐥🦆🦅🦉🦇🐺🐗🐴🦄🐝🐛🦋🐌🐞🐜🦟🦗🕷🦂🐢🐍🦎🦖🦕🐙🦑🦐🦞🦀🐡🐠🐟🐬🐳🐋🦈🐊🐅🐆🦓🦍🦧🐘🦛🦏🐪🐫🦒🦘🐃🐂🐄🐎🐖🐏🐑🦙🐐🦌🐕🐩🦮🐕‍🦺🐈🐓🦃🦚🦜🦢🦩🕊🐇🦝🦨🦡🦦🦥🐁🐀🐿🦔🐉🐲']
const randomEmoji = emojiList[Math.floor(Math.random() * emojiList.length)]
const app = express();

app.use(cors())

app.use(express.json())
app.use(routes)

console.log(`\n${randomEmoji}  Server started on port ${ServerPort}!  ${randomEmoji}\n`)

app.listen(ServerPort)
