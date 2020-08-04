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

const company = new GraphQLObjectType({
  name: "company",
  description: "This returns single Manufacturer passed ID",
  fields: () => ({
    address: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    city: {
      type: GraphQLString,
    },
    state: {
      type: GraphQLString,
    },
    account: {
      type: GraphQLInt,
    },
    contact: {
      type: GraphQLString,
    },
  }),
});

module.exports = company;
