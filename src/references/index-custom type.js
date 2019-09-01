import { GraphQLServer } from 'graphql-yoga';

// Type definitions (schema) (String! = required field)
const typeDefs = `
type Query {
    me : User!
}

type User {
    id: ID!
    name: String!
    email: String!
    age: Int
}
`;

// Resolvers - functions to be executed when a query is run
const resolvers = {
    Query: {
        me() {
            return {
                id: '234hyu',
                name: 'Sulaymon',
                email: 'sulaymon@example.com'
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
