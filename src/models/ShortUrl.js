const { Schema, model } = require("mongoose");
const shortId = require("shortid")

const shortUrlSchema = new Schema({
   fullUrl: {
      type: String,
      required: true
   },
   shortUrl: {
      type: String,
      required: true,
      default: shortId.generate
   },
   clicks: {
      type: Number,
      required: true,
      default: 0
   }
})

module.exports = model("shortUrl", shortUrlSchema)

