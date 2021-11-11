import dotenv from "dotenv"

dotenv.config()

export default {
    weather_token: process.env.WEATHER_TOKEN,
    mongodb_link: process.env.MONGODB_LINK,
    session_secret: process.env.SESSION_SECRET
}