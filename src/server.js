const path = require("path")
const mongoose = require("mongoose")
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const ShortUrl = require("./models/ShortUrl")

mongoose.connect("mongodb://localhost:27017/urlShortener",
   { useNewUrlParser: true, useUnifiedTopology: true })


app.set('views', path.join(__dirname, './views'));
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
   const shortUrls = await ShortUrl.find()
   res.render("index", { shortUrls })
})

app.post("/shortUrls", async (req, res) => {
   const { fullUrl } = req.body;
   await ShortUrl.create({ fullUrl })
   res.redirect("/")

})

app.get("/:shortUrl", async (req, res) => {

   url = req.params.shortUrl
   const shortUrl = await ShortUrl.findOne({ shortUrl: url })
   shortUrl.clicks++
   shortUrl.save()

   res.redirect(shortUrl.fullUrl)
})

app.listen(port, () => console.log(`Example app listening on port port!`))