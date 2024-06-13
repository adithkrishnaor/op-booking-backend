const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const persons = require("./models/persons")
const {personmodel} =require("./models/persons")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://adith:adith@cluster0.7mlz85p.mongodb.net/op-booking-app?retryWrites=true&w=majority&appName=Cluster0")

app.post("/book", (req,res) => {
    let input = req.body
    let persons= new personmodel(input)
    persons.save()
    console.log(persons)
    res.json({"status":"success"})
})


app.get("/view",(req,res) => {
    personmodel.find().then(
        (data) => {
            res.json(data)
        }
    ).catch(
        (error) => {
            res.json(error)
        }
    )
    console.log(res)
})

app.listen(8080, () => {
    console.log("Server Started")
})