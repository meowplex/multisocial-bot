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
        method: get_hello,
    },
    {
        name: "weather",
        method: get_weather
    },
    {
        name: "view",
        method: get_views
    },
    {
        name: "calculate",
        method: calculate
    },
    {
        name: "authorize",
        method: authorize
    }
];

export default schema;
