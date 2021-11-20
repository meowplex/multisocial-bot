import express from "express"
import session from 'express-session'
import config from "../config.js"

import method from './routers/method.js'

const server = express()
const port = 3000

server.set('trust proxy', 1) 
server.use(session({
    secret: config.session_secret,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 10 }
}));

server.use("/method", method)

server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})