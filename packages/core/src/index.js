import express from "express"
import command from './routers/command.js'

const bot = express()
const port = 3000

bot.use('/command', command)

bot.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})