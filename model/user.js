// var mongoose=require('mongoose');
// var User=mongoose.model('User',{
//   email: {
//     type : String,
//     required : true,
//     minlength : 1,
//     trim : true
//   },
//   password :{
//     type : Number,
//     required : true,
//
//   }
// });
//
// module.export={User}


//--------------------------------------------------------------

var mongoose = require('mongoose');
var User=mongoose.model('User',{
_id: {
    type: String,
    required : true
  },
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
module.exports={
User
}
