import schema from "./commands_schema.js";

import fetch from "node-fetch";
import redis from "redis";
import bluebird from "bluebird";

const { promisifyAll } = bluebird;

promisifyAll(redis);

const client = redis.createClient();

export class Adapter {
    schema = schema
    async get_answer (ctx, server_link, social_type) {
        let command = this.#get_command(ctx.text);
        if (command) {
            ctx.text = this.#remove_trigger(ctx.text, command);
            let params = this.#get_params(ctx.text, command);
            let method_link = this.#get_method_link(server_link, command);
            let answer = await this.#run(social_type, method_link, params);
            return answer
        }
    }
    #get_params (text, command) {
        let params = new Map();

        if (command.arg) {
            params.set(command.arg, text);
        }

        return params;
    }
    #remove_trigger(text, command) {
        return text.replace(command.trigger, "");
    }
    #get_command (text) {
        for (let command of schema) {
            if (text.match(command.trigger)) {
                return command;
            }
        }
    }
    #get_method_link (server_link, command) {
        return `${server_link}/method/${command.method}?`;
    }
    async #run (social_type, method_link, params) {
        let res = await fetch(method_link + new URLSearchParams(params), {
            headers: {
                cookie: await client.getAsync(social_type + params.id),
            },
        });

        if (res.headers.get("set-cookie")) {
            await client.setAsync(
                social_type + params.id,
                res.headers.get("set-cookie")
            );
        }

        if (res.ok) {
            return await res.json();
        }
    }
};
