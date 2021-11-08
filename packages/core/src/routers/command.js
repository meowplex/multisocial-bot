import { Router } from "express";
import scheme from "../scheme.js";

const router = Router();

router.get("/", async function (req, res, next) {
    for (let command of scheme) {
        if (req.query.text.match(command.trigger)) {
            await command.handler(req, res)
        } else {
            next()
        }
    }
});

export default router;
