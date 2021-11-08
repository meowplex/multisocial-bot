import { VK } from "vk-io";
import fetch from "node-fetch";
import redis from "redis";
import bluebird from "bluebird";

const { promisifyAll } = bluebird

promisifyAll(redis);

const vk = new VK({
    token: process.env.VK_TOKEN,
});
const client = redis.createClient();

vk.updates.on("message_new", async (ctx) => {
     let params = new URLSearchParams({
        text: ctx.text,
    });

    const res = await fetch("http://localhost:3000/command?" + params, {
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
    console.log(res)
    let json = await res.json();
    ctx.send(json.text);
});

vk.updates.start().catch(console.error);