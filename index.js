const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");


const urlRouter = require("./routes/url");
const homeRouter = require("./routes/home");
const redirectRouter = require("./routes/redicect");
const userRouter = require("./routes/user");
const analyticRouter = require("./routes/analytics");
const { connectToMongoDB } = require("./connections");
const { restrictToLoggedInUserOnly, cheackAuth } = require("./middlewares/auth");



// Server creation
const app = express();
const PORT = 8000;

// views enginge
app.set("view engine", "ejs");
app.set('views', path.resolve("./views"));


// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());




// connect to database
const dbUrl = "mongodb://127.0.0.1:27017/";
connectToMongoDB(`${dbUrl}urlshort`).then(()=>{
    console.log("Mongodb Connected!");
});



// routes
app.use("/url",restrictToLoggedInUserOnly, urlRouter);
app.use("/redirect", redirectRouter);
app.use("/analytics", cheackAuth, analyticRouter);
app.use("/user", userRouter);
app.use("/", homeRouter);



//  Server Listen
app.listen(PORT,()=>{
    console.log(`Server Started at ${PORT}..`);
});