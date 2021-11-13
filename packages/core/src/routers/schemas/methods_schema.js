import {
    get_hello,
    calculate,
} from "../methods/index.js";

const schema = [
    {
        name: "hello",
        handler: get_hello,
    },
    {
        name: "calculate",
        handler: calculate
    },
];

export default schema;
