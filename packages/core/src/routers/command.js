import { Router } from "express";
import schema from "./schemas/commands_schema.js";

const router = Router();

router.get("/", async function (req, res, next) {
    for (let command of schema) {
        if (req.query.text.match(command.trigger)) {
            await command.redirect(req, res);
        }
    }
    if (!res.headersSent) {
        next();
    }
});

export default router;
