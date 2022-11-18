import mongoose from "mongoose"
import User from "../models/user.js"

const add = async (req, res) => {
  const {
    name,
    surname,
    mobilePhone,
    email,
    login,
    password,
    role,
    department: { address, number },
  } = req.body
  const user = await User.create({
    name,
    surname,
    mobilePhone,
    email,
    login,
    password,
    role,
    department: { address, number },
  })
  res.json(user)
}

const update = async (req, res) => {
  const { userId } = req.params
  const {
    name,
    surname,
    mobilePhone,
    email,
    login,
    password,
    role,
    department: { address, number },
  } = req.body
  const isValid = mongoose.Types.ObjectId.isValid(userId)
  if (!isValid) {
    return res.status(404).json({ status: 404, message: "User not found" })
  }
  const user = await User.findByIdAndUpdate(userId, {
    name,
    surname,
    mobilePhone,
    email,
    login,
    password,
    role,
    department: { address, number },
  })
  res.json(user)
}

const getOne = async (req, res) => {
  const { userId } = req.params
  const isValid = mongoose.Types.ObjectId.isValid(userId)
  if (!isValid) {
    return res.status(404).json({ status: 404, message: "User not found" })
  }
  const user = await User.findById(userId)
  if (!user) {
    return res.status(404).json({ status: 404, message: "User not found" })
  }
  res.json(user)
}

const getAll = async (req, res) => {
  const user = await User.find()
  res.json(user)
}

const deleteOne = async (req, res) => {
  const { userId } = req.params
  const isValid = mongoose.Types.ObjectId.isValid(userId)
  if (!isValid) {
    return res.status(404).json({ status: 404, message: "User not found" })
  }
  try {
    await User.deleteOne({ _id: userId })
    res.sendStatus(200)
  } catch {
    res.sendStatus(500)
  }
}

export default { add, update, getOne, deleteOne, getAll }
