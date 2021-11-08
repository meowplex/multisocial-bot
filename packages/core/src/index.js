import express from "express"
import session from 'express-session'

import command from './routers/command.js'

const app = express()
const port = 3000

app.set('trust proxy', 1) 
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));
app.use('/command', command)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})