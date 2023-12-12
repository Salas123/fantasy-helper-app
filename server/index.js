import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import conn from './conn.js';

const typeDefs =`
    type ClientTeam {
        teamId: String
        teamConfig: String
    }
    
    type Query {
        clientTeams: [ClientTeam]
    }
`;

let data = [];
await conn.run().then((r) => data = r);


console.log(data);

const resolvers = {
    Query: {
        clientTeams: () => data,
    },
}


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
