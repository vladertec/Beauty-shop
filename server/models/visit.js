import mongoose from "mongoose"

const visitSchema = new mongoose.Schema(
  {
    date: Date,
    payment: Boolean,
    time: {
      start: Date,
      finish: Date,
    },
    service: {
      nameService: String,
      description: String,
      price: Number,
    },
    barber: {
      nameBarber: String,
      surnameBarber: String,
    },
    client: {
      nameClient: String,
      surnameClient: String,
      mobilePhone: Number,
    },
    department: {
      address: String,
      number: Number,
    },
  },
  { versionKey: false }
)

const Visit = mongoose.model("visit", visitSchema)

export default Visit
