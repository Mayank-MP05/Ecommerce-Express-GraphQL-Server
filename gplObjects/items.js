const itemsDB = require("./data/items.json");
const companiesDB = require("./data/companies.json");
const {
  GraphQLString,
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
} = require("graphql");

const items = new GraphQLObjectType({
  name: "items",
  description: "This returns single item as per argument passed",
  fields: () => ({
    items: {
      type: new GraphQLList(),
      description: "Array",
      resolve: () => itemsDB,
    },
  }),
});

export default items;
