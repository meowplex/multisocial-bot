import { VK } from "vk-io";
import config from "../config.js";
import { Adapter } from "@multisocial-bot/core";

const vk = new VK({
    token: config.token,
});

const vk_adapter = new Adapter

vk.updates.on("message_new", async (ctx) => {
    let cctx = {
        text: ctx.text
    }
    let answer = await vk_adapter.get_answer(cctx, config.server_link, config.social_type)
    if (answer) {
        ctx.send(answer.text);
    }
    
});

vk.updates.start().catch(console.error);
