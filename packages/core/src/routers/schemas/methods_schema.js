import {
    get_hello,
    get_weather,
    get_views,
    calculate,
    authorize
} from "../methods/index.js";

const schema = [
    {
        name: "hello",
        handler: get_hello,
    },
    {
        name: "weather",
        handler: get_weather
    },
    {
        name: "view",
        handler: get_views
    },
    {
        name: "calculate",
        handler: calculate
    },
    {
        name: "authorize",
        handler: authorize
    }
];

export default schema;
