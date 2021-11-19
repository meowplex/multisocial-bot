const schema = [
    {
        trigger: /^hello/i,
        method: "hello",
    },
    {
        trigger: /^weather/i,
        method: "weather",
        arg: "city"
    },
    {
        trigger: /^view$/i,
        method: "view",
    },
    {
        trigger: /^calculate/i,
        method: "calculate",
        arg: "expression"
    }
];

export default schema;
