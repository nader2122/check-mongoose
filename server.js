const express = require('express');
const DataBase = require('./Data/db');
const Person = require('./models/Person')

const app =express();
const Port = 5000;

//--connect with database--//

DataBase()

//--add new Persons--//

// const Persons = new Person({name:'Mary',age:42,favoriteFoods:['pizza','sushi']})

// Persons.save((err)=>{
//     if(err)
//     console.log(err)
 
// })

//--find all Person--//

const findAll = async()=>{
    const data = await Person.find();
    try {
        
      console.log((data))
    } catch (err) {
        console.log((err))
    }
}
//findAll()

//---find by one---//

const findOnes = async()=>{
     await Person.find({favoriteFoods:'hargma'},(err,data)=>{
       try{
        console.log((data))
       }catch(error) {
        console.log(error)
       }
       
  })
}

//findOnes()

//--find by id--//


const userId={_id:'61b8b7f731c2b94fd1fb5efa'}
const findId= async()=>{
 await Person.findById(userId,(err,data)=>{
try {
    console.log(data)
} catch (err) {
    console.log(err)
}

})

}
//findId()


//--find/edit/save

const FindEditSave=async()=>{
    var Foods='melokhia'
    await Person.findById({_id:'61b8b7f731c2b94fd1fb5efa'},(error,result)=>{
        if(error){
            console.log(error)
        }else{
            result.favoriteFoods.push(Foods)
            result.save((error,update)=>{
                if(error){
                    console.log(error)
                }else{
                    console.log(update)
                }
            })
        }
    })
}

//FindEditSave()


//--find one and update --//
const upone ={name:'salih'}
const updateSalih= async()=>{
    await Person.findOneAndUpdate(upone,{age:20},(err,data)=>{
        try {
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    })
}
// updateSalih()


//--find one by id and delete--//

const delId = {_id:'61b8fb7681266d824029f385'}
const DeleteOne = async()=>{
    await Person.findByIdAndDelete(delId,(err,data)=>{
        try {
            console.log(data)
        } catch (err) {
           console.error(err) 
        }
    })
}
//DeleteOne()

//-- delete Mary--//

const mary={name:'Mary'}
const maryDelete= async()=>{
    await Person.deleteMany(mary,(err,data)=>{
        try {
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    })
}
//maryDelete()

//--chain search--//

const Search = {favoriteFoods:"couscous"};
const queryChain = async()=>{

         Person.find(Search)
               .sort({name :1})
               .limit(2)
               .select({age:0})
               .exec()
     .then (doc=>{
         console.log(doc)
         
     })
      .catch (err=> {
       console.error(err)
        
     })
      
        
  };
  //queryChain()

app.listen(Port,(err)=>{
  err ? console.log(err):console.log(`server is running in ${Port}`)
})

