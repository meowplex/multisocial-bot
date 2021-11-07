import { Router } from "express";
var router = Router();

router.post("/", function (req, res) {
    if (req.body.text?.toLowerCase()?.startsWith("hello")) {
        res.json({ text: "Hello" });
    }
});

export default router;
