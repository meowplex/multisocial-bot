import express from "express"
import command from "./routers/command.js"

const core = express()
const port = 3000

core.use(express.json())
core.use('/command', command)

core.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})