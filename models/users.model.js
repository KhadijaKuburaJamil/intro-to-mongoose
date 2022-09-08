const {Schema, model} = require ("mongoose")

const userShema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    middleNme: String,
    email: String,
    password: String,
    gender: String,
})

module.exports = model("User", userSchema );