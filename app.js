const express = require("express");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const request = require("request");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));
//this has to be mentioned because of the express not allow any other CSS, IMages or any other folder to run, so we have to mention each and every file on the Public folder explicitally

mongoose.connect("mongodb://localhost:27017/testDB");
//used to connect to the mongoose server
//and this will create a DB for use in mongoose server that will store our data

const testingSchema = {
  title: {
    type: "String",
    required: [true, "Please input Title in this field"]
    //if we dont specify this field then it will show error
  },
  content: "String",
  //below is known as the data validation
  age: {
    type: "Number",
    min: 1,
    max: 10
  }
};

// const Testing = mongoose.model("Testing", testingSchema);
const Testing = mongoose.model("Munna", testingSchema);
//here we have declared the Item schema of mongoose

const mother = new Testing ({
  title: "Mummy",
  content: "Very lovely"
});

// mother.save();

const father = new Testing ({
  title: "Papa",
  content: "Super strong"
});

const sister1 = new Testing ({
  title: "SIS1",
  content: "FAKE"
});

const sister2 = new Testing ({
  title: "SIS2",
  content: "Ok Ok"
});

//if we want to save particularly a relative then

const relative = new Testing ({
  title: "Ristedar",
  content: "IDK",
  age: 9
});

// relative.save();

//******************************************************

//FOR SAVING EACH SINGLE DATASET, SAVED ONLY ONE TIME AND IT REMAINS SAVED
//so istread of saving single single files we can save all in one;

// Testing.insertMany([father, sister1, sister2, relative], function(err){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Success");
//   }
// });

//******************************************************

//FOR READING EACH SINGLE DATASET in the hyper CONSOLE

// Testing.find(function(err, munnas){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(munnas);
//   }
// });

//******************************************************

//FOR READING A "PARTICULAR QUERY" IN EACH SINGLE DATASET in the hyper CONSOLE
//we will be running forEach loop into this

// Testing.find(function(err, munnas){
//   if(err){
//     console.log(err);
//   } else {
//     // testings.forEach(function(Testing){
//     //   // console.log(Testing.title);
//     //   // console.log(Testing.content);
//     //   // console.log(Testing.age);
//     //
//     // });
//     console.log(munnas);
//   }
// });

//******************************************************

//FOR UPDATING A PARTICULAR QUERY BY THE USE OF ID OR ANY OTHER PARAMETER SHOWN FROM CONSOLE
// Testing.updateOne(
//   {_id: },
    // {name: "Some name"},
    // function(err){
    //   console.log(err);
    // } else {
    //   console.log("Updated Successfully");
    // }
    // )};
// )


//******************************************************


//FOR DELETE A PARTICULAR QUERY BY THE USE OF ID OR ANY OTHER PARAMETER SHOWN FROM CONSOLE
// Testing.deleteOne(
//   { _id: "62bff182676a72a021b41f72" },
//     function(err){
//       if(err){
//       console.log(err);
//     } else {
//       console.log("Deleted Successfully");
//     }
//   });

//FOR DELETE All QUERY BY THE USE OF NAME OR ANY OTHER PARAMETER THAT IS COMMON SHOWN FROM CONSOLE
// Testing.deleteMany(
//   { name: "Priya" },
//     function(err){
//       if(err){
//       console.log(err);
//     } else {
//       console.log("Deleted Successfully");
//     }
//   });


Testing.find(function(err, munnas){
  if(err){
    console.log(err);
  } else {
    console.log(munnas);
  }
});








app.listen(3000, function(){
  console.log("Port is running on 3000");
});
