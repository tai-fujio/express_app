const graphql = require('graphql')
const Movie = require('../models/movie')
const Session = require('../models/movie')
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema } = graphql

//インスタンスタイプ作成
const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
})
// const SessionType = new GraphQLObjectType({
//   name: 'Session',
//   fields: () => ({
//     id: { type: GraphQLID },
//     user_id: { type: GraphQLString },
//     jwt: { type: GraphQLString }
//   })
// })

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(parents, args) {
        return Movie.findById(args.id)
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
