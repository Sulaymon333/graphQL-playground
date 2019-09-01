import { GraphQLServer } from 'graphql-yoga';

// Type definitions (schema) (String! = required field)
const typeDefs = `
type Query {
    hello: String!
    name: String!
    location: String!
    bio: String!
}
`;

// Resolvers - functions to be executed when a query is run
const resolvers = {
    Query: {
        hello() {
            return 'This is a required Hello String';
        },
        name() {
            return 'Sulaymon';
        },
        location() {
            return 'Finland';
        },
        bio() {
            return 'I am a super cool guy';
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
