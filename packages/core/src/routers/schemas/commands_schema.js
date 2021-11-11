import methods_schema from "./methods_schema";

const schema = [
    {
        trigger: /^hello/i,
        handler: "methods/hello",
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
