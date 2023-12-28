const mongoose=require("mongoose")

const MONGO_DB_URL = "mongodb://0.0.0.0:27017";
// const connectDB = async () => {
//     try {
//         const connection = await mongoose.connect(MONGO_DB_URL,{
//             dbName: 'Test'
//         })
//         console.log('Connected ')
//     } catch (error) {
//         console.log('Not connected') 
//         console.log('error >>> ', error)
//     }
// }


//promiss
 mongoose.connect(MONGO_DB_URL,{
    dbName: 'StudentRegistration'
}).then(()=>{
    console.log('Connected ')
}).catch((e)=>{
    console.log('error >>> ', error)
})



// module.exports=connectDB