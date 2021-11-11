import { VK } from "vk-io";
import fetch from "node-fetch";
import redis from "redis";
import bluebird from "bluebird";
import config from "../config.js"
const { promisifyAll } = bluebird

promisifyAll(redis);

const vk = new VK({
    token: config.token,
});
const client = redis.createClient();

vk.updates.on("message_new", async (ctx) => {
     let params = new URLSearchParams({
        text: ctx.text,
    });

    const res = await fetch(`${config.server_link}/command?` + params, {
        headers: {
            cookie: await client.getAsync("vk" + ctx.senderId),
        },
    });

    if (res.headers.get('set-cookie')) {
        await client.setAsync(
            "vk" + ctx.senderId,
            res.headers.get('set-cookie')
        );
    }
    
    if (res.ok) {
        let json = await res.json();
        ctx.send(json.text);
    }
});

vk.updates.start().catch(console.error);