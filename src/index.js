const path = require("path")
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const urlsRoutes = require("./routes/ShortUrl")


//DB CONNECTION
const mongoose = require("mongoose")
const uri = `mongodb+srv://cr1337:homerojs123@databases.wjmpl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`


   try {
mongoose.connect( uri, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
console.log("connected"));    
}catch (error) { 
console.log("could not connect");    
}

//carpeta de vistas
app.set('views', path.join(__dirname, './views'));
//Plantillas utilizdas
app.set("view engine", "ejs")
//url encoded
app.use(express.urlencoded({ extended: false }))
//Static files
app.use(express.static(path.join(__dirname, "../public")))

app.use("", urlsRoutes)


app.listen(port, () => console.log(`Example app listening on port port!`))