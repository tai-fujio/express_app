const express = require("express");
const graphqlHTTP = require('express-graphql');
const app = express();

app.listen(3001, () => {
  console.log('listening');
})
