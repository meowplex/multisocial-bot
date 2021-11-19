import { Telegraf } from "telegraf";
import config from "../config.js"
import { Adapter } from "@multisocial-bot/core"

const tg = new Telegraf(config.token);

tg.on("text", async (ctx) => {
    let text = ctx.message.text;

    let command = Adapter.get_command(text)
    if (command) {
        text = Adapter.remove_trigger(text, command)
        let params = Adapter.get_params(text, command)
        let method_link = Adapter.get_method_link(config.server_link, command)
        let answer = await Adapter.run(config.social_type, method_link, params)
        ctx.reply(answer.text)
    }
});

tg.launch();

process.once("SIGINT", () => tg.stop("SIGINT"));
process.once("SIGTERM", () => tg.stop("SIGTERM"));
