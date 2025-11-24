import mongoose from "mongoose";

const LikeSchema = new mongoose.Schema(
    {
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true
        },

        itemID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            index: true,
        },

        itemType: {   // 'post' or 'comment'
            type: String,
            enum: ["post", "comment"],
            required: true,
            index: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

// A user can like only once per item
LikeSchema.index({author: 1, itemID: 1, itemType: 1}, {unique: true});

const Like =  mongoose.model("Like", LikeSchema);

export default Like;
