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
const item = new GraphQLObjectType({
  name: "item",
  description: "This returns single item as per argument passed",
  fields: () => ({
    imageUrl: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    manufacturer: {
      type: GraphQLString,
    },
    itemType: {
      type: GraphQLString,
    },
    manufacturerDetails: {
      type: company,
      resolve: (item) => {
        let manufacturerInfo = companiesDB.find(
          (cp) => cp.slug === item.manufacturer
        );
        // console.log(manufacturerInfo);
        // let combined = {
        //   ...item,
        //   manufacturerDetails: manufacturerInfo,
        // };
        // console.log(combined);
        return manufacturerInfo;
      },
    },
  }),
});

module.exports = item;
