import mongoose from "mongoose"
import Product from "../models/product.js"

const add = async (req, res) => {
  const { name, description, photos, price, amount } = req.body
  const product = await Product.create({
    name,
    description,
    photos,
    price,
    amount,
  })
  res.json(product)
}

const getAll = async (req, res) => {
  const product = await Product.find()
  res.json(product)
}

const getOne = async (req, res) => {
  const { productId } = req.params
  const isValid = mongoose.Types.ObjectId.isValid(productId)
  if (!isValid) {
    return res.status(404).json({ status: 404, message: "User not found" })
  }
  const product = await Product.findById(productId)
  if (!visit) {
    return res.status(404).json({ status: 404, message: "User not found" })
  }
  res.json(product)
}

export default { add, getAll, getOne }
