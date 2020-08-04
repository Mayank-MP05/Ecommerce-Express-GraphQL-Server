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

const item = new GraphQLObjectType({
  name: "item",
  description: "This returns single item as per argument passed",
  fields: () => ({
    imageUrl: {
      type: new GraphQLString(),
    },
    name: {
      type: new GraphQLString(),
    },
    description: {
      type: new GraphQLString(),
    },
    manufacturer: {
      type: new GraphQLString(),
    },
    itemType: {
      type: new GraphQLString(),
    },
  }),
});

export default item;
