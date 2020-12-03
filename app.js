const express = require("express")
const graphqlHttp = require("express-graphql")
const graphqlSchema = require("./graphql/schema")
const graphqlResolvers = require("./graphql/resolvers")

const app = express()

app.use(
  "/graphql",
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
)

app.listen(3000, () => console.log("Server is running on localhost:3000"))