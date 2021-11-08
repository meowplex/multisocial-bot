import { Router } from "express";
import scheme from "../scheme.js";

const router = Router();

router.get("/", async function (req, res) {
    for (let command of scheme) {
        if (req.query.text.match(command.trigger)) {
            res.json(await command.handler(req))
        }
    }
});

export default router;
