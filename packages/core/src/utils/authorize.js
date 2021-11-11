import mongoose from "mongoose";
import config from "../../config.js";

import { user_model } from "./mongoose_models/user.js";

mongoose.connect(config.mongodb_link);

export default async function authorize(options) {
    const User = user_model;
    const user = new User(options)
    await user.save()
}
