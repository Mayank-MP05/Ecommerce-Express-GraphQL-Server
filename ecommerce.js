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
const company = require("./gplObjects/company");
const companies = require("./gplObjects/companies");

const app = express();

//Single Query Object
const rootQueryObject = new GraphQLObjectType({
  name: "allQueries",
  description: "Contain all Object Queires",
  fields: () => ({
    items: {
      type: GraphQLList(item),
      description: "All Items Lisiting",
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
    companies: {
      description: "Get the List of all Manufacturers",
      type: GraphQLList(company),
      resolve: () => companiesDB,
    },
    company: {
      type: company,
      description: "Single Manufacturer Get By INDEX",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (cp, args) =>
        companiesDB.find((cp) => companiesDB.indexOf(cp) === args.id),
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
