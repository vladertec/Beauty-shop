import mongoose from "mongoose"
import Contact from "../models/contact.js"

const add = async (req, res) => {
  const { name, surname, email, message } = req.body
  const contact = await Contact.create({ name, surname, email, message })
  res.json(contact)
}

const getAll = async (req, res) => {
  const contact = await Contact.find()
  res.json(contact)
}

const deleteOne = async (req, res) => {
  const { contactId } = req.params
  const isValid = mongoose.Types.ObjectId.isValid(contactId)
  if (!isValid) {
    return res.status(404).json({ status: 404, message: "News not found" })
  }
  try {
    await Contact.deleteOne({ _id: contactId })
    res.sendStatus(200)
  } catch {
    res.sendStatus(500)
  }
}

export default { add, getAll, deleteOne }
