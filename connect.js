// const mongoose = require("mongoose");
// mongoose.set("strictQuery", true);
// async function connectToMongoDB(url) {
//   return mongoose.connect(url);
// }

// module.exports = {
//   connectToMongoDB,
// };

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);


// url = "mongodb+srv:shortner:shortnerpass@cluster0.x1ypihy.mongodb.net/?retryWrites=true&w=majority";

async function connectToMongoDB(url) {
  try {
    await mongoose.connect(url);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if MongoDB connection fails
  }
}

module.exports = {
  connectToMongoDB,
};
