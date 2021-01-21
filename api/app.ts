import mongoose from 'mongoose';
import dotenv from 'dotenv'
import { ApolloServer } from 'apollo-server';
import { resolvers} from "./src/graphql/resolvers/index";
import { typeDefs } from "./src/graphql/typeDefs";

dotenv.config()
const uri = process.env.MONGO_DB_URI || '';
const port = process.env.PORT

const server = new ApolloServer({
   typeDefs,
   resolvers
})

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => server.listen(port, () => console.log(`⚡️[server]: Server is running at https://localhost:${port}`)))
