import { get_hello, get_weather } from "./handlers/index.js";

const scheme = [
    {
        trigger: /^hello/i,
        handler: get_hello,
    },
    {
        trigger: /^weather/i,
        handler: get_weather
    }
];

export default scheme;
