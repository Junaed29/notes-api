const mongoose = require("mongoose");


//Connect to the mongodb server
// mongoose
//   .connect("mongodb://127.0.0.1:27017/notes-api", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Connected to Mongoose  server");
//   })
//   .catch((err) => {
//     console.log("Error connecting ", err);
//   });


mongoose
  .connect("mongodb+srv://admin:123456JMC@cluster0.oc2ikah.mongodb.net/Note-Api?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to Mongoose  server");
  })
  .catch((err) => {
    console.log("Error connecting ", err);
  });