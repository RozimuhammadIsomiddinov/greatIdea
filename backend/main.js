const express = require("express");
const app = express();
const connectToDb = require("./config/data");
const app1 = require("./routes/allRouter");
const cors = require("cors");

require("dotenv").config();
connectToDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(
  {
  origin:["https://great-idea-frontend.vercel.app"],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
  }
  
));

app.use("/", app1);
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port: ${process.env.PORT}`);
});
