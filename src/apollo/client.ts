import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://zepce.stepzen.net/api/falling-termite/__graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      "Apikey zepce::stepzen.net+1000::3ba788f1d1e5233fd633cb1181557be1d6c4c64a97d7ba15f271eb088ee4294b",
  },
});

export default client;
