import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    blogId: {
        type: String,
        required: true,
        unique: true,
    },
    clapCount: {
        type: Number,
        default: 0
    }
})

const Blog = mongoose.model("Blog", blogSchema);
export default Blog