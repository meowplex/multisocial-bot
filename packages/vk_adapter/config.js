import dotenv from "dotenv"

dotenv.config()

export default {
    token: process.env.VK_TOKEN,
    server_link: process.env.SERVER_LINK,
    social_type: "vk"
}