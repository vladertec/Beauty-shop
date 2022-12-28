import mongoose from "mongoose"

const visitSchema = new mongoose.Schema(
  {
    name: String,
    surname: String,
    mobilePhone: Number,
  },
  { versionKey: false }
)

const Visit = mongoose.model("visit", visitSchema)

export default Visit
