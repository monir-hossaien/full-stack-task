import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
    {
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true
        },

        text: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },

        privacy: {
            type: String,
            enum: ["public", "private"],
            default: "public",
            lowercase: true,
            index: true
        },

        likeCount: {
            type: Number,
            default: 0,
            index: true
        },
        commentCount: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

// newest posts first
PostSchema.index({createdAt: -1});

const Post = mongoose.model("Post", PostSchema);

export default  Post;
