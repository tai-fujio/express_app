const express = require("express");
const graphqlHTTP = require('express-graphql');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user:user2@mydb.lzuap.mongodb.net/mydb?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
  console.log('db connected')
});
app.use('/graphql', graphqlHTTP({

}));
app.listen(3001, () => {
  console.log('listening');
})
