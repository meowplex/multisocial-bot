import dotenv from "dotenv"

dotenv.config()

export default {
    token: process.env.TG_TOKEN,
    server_link: process.env.SERVER_LINK
}