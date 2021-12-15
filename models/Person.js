
const mongoose = require('mongoose');


const person = new mongoose.Schema({
    name:{type:String, required:true},
    age:{type:Number,required:true},
    favoriteFoods: {type:Array,required:true}

})

const Person = mongoose.model('Person',person)

module.exports = Person