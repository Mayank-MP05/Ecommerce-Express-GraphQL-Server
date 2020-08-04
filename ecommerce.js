const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const items = require("./data/items.json");
const companies = require("./data/companies.json");
const {
  GraphQLString,
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLSchema,
} = require("graphql");

const app = express();
/*

const BookType = new GraphQLObjectType({
  name: "Book",
  description: "This represents a book written by an author",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    authorId: { type: GraphQLNonNull(GraphQLInt) },
    author: {
      type: AuthorType,
      resolve: (book) => {
        return authors.find((author) => author.id === book.authorId);
      },
    },
  }),
});


*/
//Default Schema
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "DemoSchema",
    description: "Used Just for the First Start",
    fields: () => ({
      testmsg: { type: GraphQLString, resolve: () => "Demo Schema Output" },
    }),
  }),
});

app.get("/", (req, res) => {
  res.redirect("/graphql");
});
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.listen(5000, () => console.log("Server Running at 5000"));
