const itemsDB = require("../data/items.json");
const companiesDB = require("../data/companies.json");
const {
  GraphQLString,
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
} = require("graphql");

const item = require("./item");

const items = new GraphQLObjectType({
  name: "items",
  description: "This returns single item as per argument passed",
  fields: () => ({
    type: GraphQLList(item),
    description: "Array",
    resolve: () => itemsDB,
  }),
});

module.exports = items;
