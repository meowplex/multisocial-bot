import schema from "./commands_schema.js";

import fetch from "node-fetch";
import redis from "redis";
import bluebird from "bluebird";

const { promisifyAll } = bluebird;

promisifyAll(redis);

const client = redis.createClient();

export default {
    schema: schema,
    get_params: (text, command) => {
        let params = new Map();

        if (command.arg) {
            params.set(command.arg, text);
        }

        return params;
    },
    remove_trigger: (text, command) => {
        return text.replace(command.trigger, "");
    },
    get_command: (text) => {
        for (let command of schema) {
            if (text.match(command.trigger)) {
                return command;
            }
        }
    },
    get_method_link: (server_link, command) => {
        return `${server_link}/method/${command.method}?`;
    },
    run: async (social_type, method_link, params) => {
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
    },
};
