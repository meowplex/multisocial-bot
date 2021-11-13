import url from 'url';

import { Router } from "express";
import schema from "./schemas/commands_schema.js";

const router = Router();

router.get("/", async function (req, res, next) {
    for (let command of schema) {
        if (req.query.text.match(command.trigger)) {

            res.redirect(
                _getRedirectUrl(command.method, req.query.text)
            );
        }
    }
    if (!res.headersSent) {
        next();
    }
});

export default router;


const _getRedirectUrl = (commandName, text) => {

    let pathname = `/method/${commandName}`;
    let options = {};

    switch (commandName) {
        case "hello":
            break;
        case "calculate":
            // смысл в том что в query идёт не текст сообщения а уже что надо
            options.expression = text.split(" ").splice(1).join(" ")
            break;
    }

    return url.format({ pathname: pathname, query: options })
}