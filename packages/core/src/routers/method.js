import { Router } from "express";
import methods_schema from "./schemas/methods_schema.js";

const router = Router();

for (let method of methods_schema) {
    router.get(`/${method.name}`, method.method)
}

export default router;
