import express from "express"
import get_listener from "../../core/src/command_init.js"
import scheme from "./scheme.js"
import command from './routers/command.js'
const bot = express()
const port = 3000

bot.use(express.json())

for (let command of scheme) {
    bot.use('/command', get_listener(command))
}

bot.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})