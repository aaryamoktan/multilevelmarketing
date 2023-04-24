const mongoose = require("mongoose");
const userSchema = mongooe.Schema(
    {
        name:
        {
            type:String,
            require:true
        },
        email:
        {
            type:String,
            required:true
        },
        password:
        {
            type:String,
            required:true
        }
    }
)
module.exports = mongoose.model("user",userSchema);