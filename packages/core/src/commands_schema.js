import {
    get_hello,
    get_weather,
    get_views,
    calculate
} from "./handlers/index.js";

const schema = [
    {
        trigger: /^hello/i,
        handler: get_hello,
    },
    {
        trigger: /^weather/i,
        handler: get_weather
    },
    {
        trigger: /^view$/i,
        handler: get_views
    },
    {
        trigger: /^calculate/i,
        handler: calculate
    }
];

export default schema;
