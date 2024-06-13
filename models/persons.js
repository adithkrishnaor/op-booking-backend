const mongoose = require("mongoose")

const schema = mongoose.Schema(
    {
        "pname":String,
        "address":String,
        "date":String,
        "slot":String,
        "blood":String,
        "drname":String
    }
)

let personmodel = mongoose.model("persons",schema)
module.exports = {personmodel} 