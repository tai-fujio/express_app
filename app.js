const express = require("express");
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema')
const app = express();

mongoose.connect('mongodb+srv://user:user2@mydb.lzuap.mongodb.net/sample?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
  console.log('db connected')
});
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));
app.listen(3000, () => {
  console.log('listening');
})
