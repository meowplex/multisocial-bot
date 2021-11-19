import mongoose from "mongoose";
import config from "../../../config.js";

import { user_model } from "./models/user.js";

mongoose.connect(config.mongodb_link);

export default async function authorize(req, res) {
    const User = user_model;
    const user = new User(options)
    await user.save()
    res.status(200)
    return;
}
