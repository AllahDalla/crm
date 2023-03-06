const mongoose = require("mongoose")
try{

    mongoose.connect("mongodb+srv://allah:u7PosePMXycQx2fF@cluster0.nkyh0nu.mongodb.net/?retryWrites=true&w=majority",{
        useNewUrlParser:true, useUnifiedTopology:true
    })
}catch(error){
    console.log(error)
}










// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://allah:u7PosePMXycQx2fF@cluster0.nkyh0nu.mongodb.net/?retryWrites=true&w=majority";

// console.log("Mi need fi connect")
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// console.log("Mi supposed to connect now")

// console.log("Where tf am i????")
// client.connect(uri ,(err,res) => {
//     if(err) throw err
//     const collection = client.db("JTEC").collection("Users");
//     // perform actions on the collection object
//     console.log("Mi connect")
//     let obj = {
//         name:"Al",
//         email:"something",
//         password:"IDK"
//     }
//     collection.insertOne(obj, function(err, res){
//         if(err) throw err;
//         console.log("Now was my collection created")

//         })
//         client.close();

// });




