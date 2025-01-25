require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('Connected to MongoDB');

  const { url } = await server.listen({ port: 4000 });
  console.log(`Server ready at ${url}`);
};

startServer();