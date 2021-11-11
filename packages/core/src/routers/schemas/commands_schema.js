import methods_schema from "./methods_schema";

const schema = [
    {
        trigger: /^hello/i,
        method: "methods/hello",
    },
    {
        trigger: /^weather/i,
        method: get_weather
    },
    {
        trigger: /^view$/i,
        method: get_views
    },
    {
        trigger: /^calculate/i,
        method: calculate
    }
];

export default schema;
