const schema = [
    {
        trigger: /^hello/i,
        method: "hello",
    },
    {
        trigger: /^weather/i,
        method: "weather"
    },
    {
        trigger: /^view$/i,
        method: "view"
    },
    {
        trigger: /^calculate/i,
        method: "calculate"
    }
];

export default schema;
