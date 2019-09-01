import { GraphQLServer } from 'graphql-yoga';

// Type definitions (schema) (String! = required field)
const typeDefs = `
type Query {
    id: ID!
    name: String!
    age: Int!
    employed: Boolean!
    gpa: Float
}
`;

// Resolvers - functions to be executed when a query is run
const resolvers = {
    Query: {
        id() {
            return '123xyz';
        },
        name() {
            return 'Sulaymon';
        },
        age() {
            return '33';
        },
        employed() {
            return true;
        },
        gpa() {
            return null;
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
