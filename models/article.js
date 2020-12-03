const mongoose = require("mongoose")

const Schema = mongoose.Schema

// ensure that the data send to MongoDB matches the schema defined with GraphQL
const artcleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Article", artcleSchema)