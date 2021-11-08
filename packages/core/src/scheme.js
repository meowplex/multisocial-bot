import { get_hello, get_weather, get_views } from "./handlers/index.js";

const scheme = [
    {
        trigger: /^hello/i,
        handler: get_hello,
    },
    {
        trigger: /^weather/i,
        handler: get_weather
    },
    {
        trigger: /^count/i,
        handler: get_views
    }
];

export default scheme;
