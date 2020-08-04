const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const { buildSchema } = require("graphql");
const app = express();
// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String,
    name: String,
    age: number
  }
`);
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.get("/", (req, res) => {
  res.redirect("/graphql");
});
app.listen(4000);
