import express from "express"
import mongoose from "mongoose"
import NewsController from "./controllers/news.js"
import ProductController from "./controllers/product.js"
import VisitController from "./controllers/visit.js"
import ContactController from "./controllers/contact.js"
import EmailController from "./controllers/email.js"

const app = express()
app.use(express.json())

//Visit
app.post("/api/visit", VisitController.add)
app.get("/api/visit", VisitController.getAll)
app.get("/api/visit/:visitId", VisitController.getOne)
app.patch("/api/visit/:visitId", VisitController.update)
app.delete("/api/visit/:visitId", VisitController.deleteOne)

//News
app.post("/api/news", NewsController.add)
app.get("/api/news", NewsController.getAll)
app.delete("/api/news/:newsId", NewsController.deleteOne)

//Product
app.post("/api/product", ProductController.add)
app.get("/api/product", ProductController.getAll)
app.get("/api/product/:productId", ProductController.getOne)
app.delete("/api/product/:productId", ProductController.deleteOne)

//Contact
app.post("/api/contact", ContactController.add)
app.get("/api/contact", ContactController.getAll)
app.delete("/api/contact/:contactId", ContactController.deleteOne)

//Email
app.post("/api/email", EmailController.add)
app.get("/api/email", EmailController.getAll)
app.delete("/api/email/:emailId", EmailController.deleteOne)


//About connection
app.listen(4000, () => {
  console.log("Server is running on port 4000")
})

mongoose
  .connect(
    "mongodb+srv://Admin:qwerty_12345@cluster0.dfvmuyz.mongodb.net/barbershop?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB connection success")
  })
  .catch((err) => {
    console.log("Error connecting to DB")
    console.log(err.message)
  })
