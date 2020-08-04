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
const company = require("./company");

const companies = new GraphQLObjectType({
  name: "companies",
  description: "This returns all manufacturer list",
  fields: () => ({
    type: GraphQLList(company),
    description: "Array of Companies",
    resolve: () => companiesDB,
  }),
});

module.exports = companies;
