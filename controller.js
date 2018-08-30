
const _ =require('lodash');
var express=require('express');
var bodyParser=require('body-parser')
var {mongoose} =require('./db/mongoose');
var {User}=require('./model/user')
var app=express();
var {ObjectID}=require('mongodb')

app.use(bodyParser.json());


//post---------------------------------------
app.post('/about',(req,res)=>{
  console.log('body--',req.body);
  var user1=new User({
    _id : req.body.id,
    email:req.body.email,
    password:req.body.password
  })
console.log(req.body.email)
console.log(req.body.password)
console.log(req.body.id)


  user1.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  })
})

//get----all-----------------
app.get('/about',(req,res)=>{
   User.find().then((doc)=>{
     res.send(doc);
   },(error)=>{
     res.status(400).send(e);
   })
})

//get by id--------------------------------
app.get('/about/:id',(req,res)=>{
  var id=req.params.id;

  if(!ObjectID.isValid){
    return res.status(404).send();
  }
  User.findById(id).then((doc)=>{
    if(!doc){
      return res.status(404).send();
    }
    res.send(doc);
//  res.send(req.params);
}).catch( (e)=>{
  console.log("unable to fetch",e);
})
});


//delete by id

app.delete('/about/:id',(req,res)=>{
  var id=req.params.id;
if(!ObjectID.isValid){
  return res.status(404).send();
}
User.findByIdAndRemove(id).then((doc)=>{      //findByIdAndRemove
  if(!doc){
    return res.status(404).send();
  }
  res.send(doc);
}).catch((e)=>{
  console.log("unable to fetch",e);
})
})

///update------------
app.patch('/about/:id',(req,res)=>{
  var id=req.params.id;
  var body=_.pick(req.body,['email','password'])

console.log(body);
if(!ObjectID.isValid){
  return res.status(404).send();
}


if(_.isBoolean(body.completed) && body.completed){
  body.completedAt=new Date().getTime();
}
else {
  body.completed=false;
  body.completedAt=null;
}
User.findByIdAndUpdate(id,{$set : body},{new : true}).then((doc)=>{
  if(!doc){
    return res.status(404).send();
  }
  res.send({doc});
}).catch((e)=>{
  res.status(400).send();
})

})








app.listen(3000,()=>{
    console.log('started on port 3000')
  })
