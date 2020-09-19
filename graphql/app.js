require('dotenv').config();

const express = require("express");
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema')
const app = express();

mongoose.connect(process.env.MONGO_URL);
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
