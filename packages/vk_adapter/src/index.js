import { VK } from "vk-io";
import fetch from "node-fetch";

const vk = new VK({
    token: process.env.VK_TOKEN,
});

vk.updates.on("message_new", async (ctx) => {
    const req = { text: ctx.text };
    const res = await fetch("http://localhost:3000/command", {
        method: "post",
        body: JSON.stringify(req),
        headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
    ctx.send(res.text);
});

vk.updates.start().catch(console.error);
