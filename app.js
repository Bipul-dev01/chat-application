//External Imports
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const inboxRouter = require("./router/inboxRouter");

//Internal Imports
const { notFoundHandler, errorHandler } = require('./middlewares/common/errorHandler');

const app = express();
dotenv.config();

//database connection

mongoose.connect(process.env.MONGO_CONNECTION_STRING
    // {
    // useNewUrlParser: true, // Use the new connection string parser
    // useUnifiedTopology: true // Enable the unified topology layer
    // }
)
.then(()=> console.log("MongoDB connection successfully"))
.catch(err => console.log("MongoDB connection error:", err));

//request parsers
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//set view engine
app.set("view engine", "ejs");


//set static folder
app.use(express.static(path.join(__dirname, "public")));

//cookie parser
app.use(cookieParser(process.env.COOKIE_SECRET));

//routing setup
app.use('/', loginRouter);
app.use('/users', usersRouter);
app.use('/inbox', inboxRouter);

//404 not found handler
app.use(notFoundHandler);

//common error handler
app.use(errorHandler);

app.listen(process.env.PORT, ()=>{
    console.log(`App listening to port ${process.env.PORT}`); 
});


