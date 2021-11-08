import express from "express"
import session from 'express-session'

import command from './routers/command.js'

const core = express()
const port = 3000

core.set('trust proxy', 1) 
core.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));
core.use('/command', command)

core.listen(port, () => {
    console.log(`Core listening at http://localhost:${port}`)
})