import { Telegraf } from "telegraf";
import fetch from "node-fetch";
import redis from "redis";
import bluebird from "bluebird";
import config from "../config.js"

const { promisifyAll } = bluebird

promisifyAll(redis);

const tg = new Telegraf(config.token);
const client = redis.createClient();

tg.on("text", async (ctx) => {
    let params = new URLSearchParams({
        text: ctx.message.text,
    });

    const res = await fetch(`${config.server_link}/command?` + params, {
        headers: {
            cookie: await client.getAsync("tg" + ctx.update.message.from.id),
        },
    });

    if (res.headers.get('set-cookie')) {
        await client.setAsync(
            "tg" + ctx.update.message.from.id,
            res.headers.get('set-cookie')
        );
    }
    
    if (res.ok) {
        let json = await res.json();
        ctx.reply(json.text);
    }
});

tg.launch();

process.once("SIGINT", () => tg.stop("SIGINT"));
process.once("SIGTERM", () => tg.stop("SIGTERM"));
