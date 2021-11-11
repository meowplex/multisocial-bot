import express from "express"
import session from 'express-session'
import config from "../config.js"

import command from './routers/command.js'

const core = express()
const port = 3000

core.set('trust proxy', 1) 
core.use(session({
    secret: config.session_secret,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 10 }
}));
core.use('/command', command)

core.listen(port, () => {
    console.log(`Core listening at http://localhost:${port}`)
})