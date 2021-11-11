import { Router } from "express";
import schema from "../commands_schema.js";

const router = Router();

router.get("/", async function (req, res, next) {
    for (let command of schema) {
        if (req.query.text.match(command.trigger)) {
            await command.handler(req, res);
        }
    }
    if (!res.headersSent) {
        next();
    }
});

export default router;
