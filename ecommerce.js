const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const {
  GraphQLString,
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");

//Data imports
const itemsDB = require("./data/items.json");
const companiesDB = require("./data/companies.json");

//GraphQL Objects Imports
const items = require("./gplObjects/items");
const item = require("./gplObjects/item");

const app = express();

//Single Query Object
const rootQueryObject = new GraphQLObjectType({
  name: "allQueries",
  description: "Contain all Object Queires",
  fields: () => ({
    items: {
      type: GraphQLList(item),
      resolve: () => itemsDB,
    },
    item: {
      type: item,
      description: "Single Item Get By INDEX",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (item, args) =>
        itemsDB.find((item) => itemsDB.indexOf(item) === args.id),
    },
  }),
});

//Default Schema
const rootQuerySchema = new GraphQLSchema({
  query: rootQueryObject,
});

app.get("/", (req, res) => {
  res.redirect("/graphql");
});
app.use(
  "/graphql",
  graphqlHTTP({
    schema: rootQuerySchema,
    graphiql: true,
  })
);
app.listen(5000, () => console.log("Server Running at 5000"));
