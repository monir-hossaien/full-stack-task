import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
    {
        postID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
            required: true,
            index: true
        },

        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        text: {type: String, required: true},

        // If this is a reply, points to parent comment
        parentComment: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
            default: null,
            index: true
        },

        likeCount: {type: Number, default: 0},

    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;