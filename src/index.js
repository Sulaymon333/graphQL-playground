import { GraphQLServer } from 'graphql-yoga';

// Type definitions (schema) (String! = required field)
const typeDefs = `
type Query {
    me: User!
    post : Post!
}

type User {
    id: ID!
    name: String!
    email: String!
    age: Int
}

type Post {
    id: ID!
    title: String!
    body: String!
    publishedDate: String!
    published: Boolean!
}
`;

// Resolvers - functions to be executed when a query is run
const resolvers = {
    Query: {
        me() {
            return {
                id: '234hyu',
                name: 'Sulaymon',
                email: 'sulaymon@example.com',
                age: 27
            };
        },

        post() {
            return {
                id: '124wx',
                title: 'The great graphQL',
                body: 'GraphQL is an awesome technology to help simply API',
                publishedDate: '22.09.2019',
                published: true
            };
        }
    }
};

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start(() => {
    console.log('Server is started');
});
