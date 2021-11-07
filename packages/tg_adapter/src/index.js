import { Telegraf } from 'telegraf'
import fetch from "node-fetch";

const tg = new Telegraf(process.env.TG_TOKEN)

tg.on("text", async (ctx) => {
    let params = new URLSearchParams({
        text: ctx.message.text,
    });
    const res = await fetch("http://localhost:3000/command?" + params)
    .then(
        res => res.json()
    );
    ctx.reply(res.text);
});

tg.launch()

process.once('SIGINT', () => tg.stop('SIGINT'))
process.once('SIGTERM', () => tg.stop('SIGTERM'))