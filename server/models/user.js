import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    name: String,
    surname: String,
    mobilePhone: Number,
    email: String,
    login: String,
    password: String,
    role: String,
    department: {
      address: String,
      number: Number,
    },
  },
  { versionKey: false }
)

const User = mongoose.model("user", userSchema)

export default User
