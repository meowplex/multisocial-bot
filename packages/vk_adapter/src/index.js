import { VK } from "vk-io";
import config from "../config.js"
import { Adapter } from "@multisocial-bot/core"

const vk = new VK({
    token: config.token,
});

vk.updates.on("message_new", async (ctx) => {
    let text = ctx.text;

    let command = Adapter.get_command(text)
    if (command) {
        text = Adapter.remove_trigger(text, command)
        let params = Adapter.get_params(text, command)
        let method_link = Adapter.get_method_link(config.server_link, command)
        let answer = await Adapter.run(config.social_type, method_link, params)
        ctx.send(answer.text)
    }
});

vk.updates.start().catch(console.error);
