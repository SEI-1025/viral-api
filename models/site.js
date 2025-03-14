const mongoose = require('mongoose');

const waitTimeSchema = new mongoose.Schema({
    waitTime:String,
})

//define schema
const siteSchema = new mongoose.Schema({
    name: String, 
    address: String, 
    city: String, 
    state: String, 
    zipCode: Number, 
    mondayHours: String, 
    tuesdayHours: String, 
    wednesdayHours: String, 
    thursdayHours: String, 
    fridayHours: String, 
    saturdayHours: String, 
    sundayHours: String,
    waitTimes: [waitTimeSchema]
})

//name the model
const Site = mongoose.model("Site", siteSchema);

module.exports = Site;