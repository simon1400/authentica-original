import { ApolloClient, createHttpLink, ApolloProvider, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie'

const APP_API = process.env.APP_API

export const httpLink = createHttpLink({
  uri: `http://localhost:1340/graphql`,
});

export const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = Cookies.get('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// @ts-ignore
export const WithGraphQL = ({ children }) => {
  
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};