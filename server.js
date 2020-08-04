const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const { buildSchema } = require("graphql");
const app = express();
// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String,
    name: String,
  }
`);
// Root resolver
var root = {
  hello: () => "Hello World!",
  name: () => "MAyank Pachpande",
};
const graphQLObj = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
});

app.use("/graphql", graphQLObj);
app.get("/", (req, res) => {
  res.redirect("/graphql");
});
app.listen(4000);
