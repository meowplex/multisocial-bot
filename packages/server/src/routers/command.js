import url from 'url'; 

import { Router } from "express";
import schema from "./schemas/commands_schema.js.js";

const router = Router();

router.get("/", async function (req, res, next) {
    for (let command of schema) {
        if (req.query.text.match(command.trigger)) {
            req.query.text = req.query.text.split(" ").splice(1).join(" ");

            res.redirect(
                url.format({
                    pathname: `/method/${command.method}`,
                    query: req.query,
                })
            );
        }
    }
    if (!res.headersSent) {
        next();
    }
});

export default router;
