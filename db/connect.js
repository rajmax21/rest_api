const mongoose = require("mongoose");
// const { default: mongoose } = require("mongoose");
// uri = "mongodb+srv://rajemax21:21078585@cluster0.osquo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// uri = "mongodb+srv://react_api:21078585@cluster0.7gzhw2g.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0";
// mongodb+srv://react_api:21078585@cluster0.7gzhw2g.mongodb.net/

const connectDB = (uri) => {
    console.log("Connect db");    
    return mongoose.connect(uri
        , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
}

// const connectDB = async () => {
//     try {
//       const conn = await mongoose.connect(uri);
//     }
//   }


module.exports = connectDB;