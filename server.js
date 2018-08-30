// var mongoose = require('mongoose');
//
// mongoose.Promise=global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
// var Todo=mongoose.model('Todo',{
//         text :{
//           type: String,
//           required : true,
//           minilength:1,
//           trim : true
//         },
//         completed :{
//           type : Boolean,
//           default : false
//         },
//         completedAt : {
//           type : Number,
//           default : null
//         }
//   })
//
//   var newTodo =new Todo({
//     text: 'play football '
//   })
//
// var newTodo1=new Todo ({
//   text : 'playing cricket',
//   completed : false,
//   completedAt: 1234,
// })
//   // newTodo.save().then((doc)=>{
//   //   console.log('save to Todo',doc);
//   //   console.log('save to Todo',JSON.stringify(doc,undefined,2));
//   //
//   // },(error)=>{
//   //   console.log('unable to save ',error)
//   // })
//
//

//----------------------------------------------------------------------
var mongoose = require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');
var User=mongoose.model('User',{
  email: {
    type : String,
    required : true,
    minlength : 1,
    trim : true
  },
  password :{
    type : Number,
    required : true,

  }
})
var user1=new User({
  email : '         vksharma@gmail.com             ' ,
  password : 12345
})

user1.save().then((doc)=>{
  console.log('filled data is',JSON.stringify(doc,undefined,2))
},(error)=>{
  console.log('unable to insert into table',error)
})
