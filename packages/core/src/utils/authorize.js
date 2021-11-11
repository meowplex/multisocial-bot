import mongoose from "mongoose";
import { user_model } from "./mongoose_models/user.js";

mongoose.connect(process.env.MONGODB_LINK);

export default async function authorize(options) {
    const User = user_model;
    const user = new User(options)
    await user.save()
}
