import { Telegraf } from "telegraf";
import config from "../config.js";
import { Adapter } from "@multisocial-bot/core";

const tg = new Telegraf(config.token);

const tg_adapter = new Adapter

tg.on("text", async (ctx) => {
    let cctx = {
        text: ctx.message.text
    }
    let answer = await tg_adapter.get_answer(cctx, config.server_link, config.social_type)
    ctx.reply(answer.text);
});

tg.launch();

process.once("SIGINT", () => tg.stop("SIGINT"));
process.once("SIGTERM", () => tg.stop("SIGTERM"));
