const mongoose = require("mongoose")

const db = async () => {
    //await mongoose.connect("mongodb+srv://sahil_kapadia:1q2w3e4r5t@cluster0.gtbjf30.mongodb.net/Blog");
    await mongoose.connect("mongodb+srv://precticehtml:go53LCaw2eSVig12@cluster0.sczgxex.mongodb.net/Blog");
    console.log("Data base is connected");
}

module.exports = db;

//mongodb+srv://precticehtml:go53LCaw2eSVig12@cluster0.sczgxex.mongodb.net/