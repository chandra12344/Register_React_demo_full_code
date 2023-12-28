const express = require("express");
require("./db/connection")
var cors = require('cors')
const Student =require("./models/student")
const Register = require("./models/register_model")
     

const app=express();
const PORT=process.env.PORT || 4000
app.use(express.json());
app.use(cors())
app.get("/",(req,res)=>{
    res.send("Rest api demo project")
})



//Add data
app.post("/student",(req,res)=>{
console.log(req.body);

const user=new Student(req.body)
user.save().then(()=>{
    res.send({massege:"User Registered Successfully"})
}).catch((e)=>{
    res.send(e)
})
})



//Register api
app.post("/register",(req,res)=>{
  console.log(req.body);
  const user=new Register(req.body)
  console.log(user);
  user.save().then(()=>{
      res.send({massege:"User Registered Successfully"})
  }).catch((e)=>{
      res.send(e)
  })
  
  //Get all data 
  })


app.get("/st_data", (req, res) => {
  Register.find()
      .then(data => {
        res.send({data:data});
      })
      .catch(err => {
        res.status(500).send({
          message:
                err.message || "Some error occurred while retrieving tutorials."
        });
      });
  });

//Delete user

app.post("/st_remove",(req, res) => {
    const id = req.body._id;
  console.log(`phone number :${id}`);

// res.send({msg:`find data ${id}`})

Student.findByIdAndRemove(id)
.then(data => {
  if (!data)
    res.status(404).send({ message: "Not found Tutorial with id " + id });
  else res.send({msg:"delete data successfully",data:data});
})
.catch(err => {
  res
    .status(500)
    .send({ message: "Error retrieving Tutorial with id=" + id });
});

    // Student.findByIdAndRemove(id)
    //   .then(data => {
    //     if (!data) {
    //       res.status(404).send({
    //         message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
    //       });
    //     } else {
    //       res.send({
    //         message: "Tutorial was deleted successfully!"
    //       });
    //     }
    //   })
    //   .catch(err => {
    //     res.status(500).send({
    //       message: "Could not delete Tutorial with id=" + id
    //     });
    //   });
  });


app.listen(PORT,()=>{
console.log(`Now you are connect ${PORT} post`);
})