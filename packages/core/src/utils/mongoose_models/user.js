import mongoose from "mongoose";
const { Schema, model } = mongoose;

export const user_model = model(
    "User",
    new Schema({
        name: String,
        socials: [
            new Schema(
                {
                    id: Number,
                    type: String,
                },
                { _id: false }
            ),
        ],
    })
);
