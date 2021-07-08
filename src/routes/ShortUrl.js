const { Router } = require("express");
const router = Router()
const ShortUrl = require("../models/ShortUrl")


router.get('/', async (req, res) => {
   const shortUrls = await ShortUrl.find()
   res.render("index", { shortUrls })
})

router.post("/shortUrls", async (req, res) => {

   try {
      const { fullUrl } = req.body;
      await ShortUrl.create({ fullUrl })
      res.redirect("/")
   } catch (error) {
      console.log("Error inserte una url")
      res.status(400).redirect("/")
   }
})

router.get("/:shortUrl", async (req, res) => {

   url = req.params.shortUrl
   const shortUrl = await ShortUrl.findOne({ shortUrl: url })
   shortUrl.clicks++
   shortUrl.save()
   res.redirect(shortUrl.fullUrl)
})

module.exports = router;