const graphql = require('graphql')

const { GraphQLObjectType } = graphql

//インスタンスタイプ作成
const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: graphql.GraphQLID },
    name: { type: graphql.GraphQLString },
    genre: { type: graphql.GraphQLString }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'Root',
  fileds: {
    type: MovieType,
    args: { id: { type: graphql.GraphQLString } },
    resolve(parents, args{

    })
  }
})
