const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const {
  GraphQLString,
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLInt,
} = require("graphql");

const app = express();
app.use("/", (req, res) => {
  res.redirect("/graphql");
});
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.listen(5000, () => console.log("Server Running"));
