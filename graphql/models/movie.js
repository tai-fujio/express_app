const mongoose = require('mongoose');
const graphql = require('graphql')
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: graphql.GraphQLString,
  genre: graphql.GraphQLString
})

// const sessionSchema = new Schema({
//   user_id: String,
//   jwt: String
// })

// module.exports = mongoose.model('Session', sessionSchema);
module.exports = mongoose.model('Movie', movieSchema);
