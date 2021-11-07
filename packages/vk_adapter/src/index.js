import { VK } from "vk-io";
import fetch from "node-fetch";

const vk = new VK({
    token: process.env.VK_TOKEN,
});

vk.updates.on("message_new", async (ctx) => {
    let params = new URLSearchParams({
        text: ctx.text,
    });
    const res = await fetch("http://localhost:3000/command?" + params)
    .then(
        res => res.json()
    );
    ctx.send(res.text);
});

vk.updates.start().catch(console.error);
