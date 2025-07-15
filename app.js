const express = require("express");
const mongoose = require("mongoose");
const app=express();
const db=require('./config/db');
db();

const path =require("path");
app.use(express.static(path.join(__dirname, "public")));
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser());


app.set('view engine',"ejs");
app.set("views", path.join(__dirname, "views"))

app.use("/", require("./routes/authRoutes"));
app.use("/expenses", require("./routes/expenseRoutes"));

app.get("/", (req, res) => res.redirect("/login"));


app.listen(3000);