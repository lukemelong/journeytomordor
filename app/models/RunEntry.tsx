import mongoose from "mongoose"

const RunEntrySchema = new mongoose.Schema({
    date: Date,
    text: String,
    distance: Number,
})

// const model = { title: "Model" }
const model = mongoose.models.RunEntry || mongoose.model("RunEntry", RunEntrySchema);

export default model