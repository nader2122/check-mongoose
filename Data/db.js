const mongoose = require('mongoose');

const DataBase = async()=>{
    try {
       const database = await mongoose.connect('mongodb://localhost:27017/login')
       console.log(('Database runnig...'))
    } catch (err) {
        console.log(err)
    }
}

module.exports = DataBase