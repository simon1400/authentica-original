import { ApolloClient, createHttpLink, ApolloProvider, InMemoryCache, DefaultOptions } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie'

const APP_API = process.env.APP_API

export const httpLink = createHttpLink({
  uri: `${process.env.APP_API}/graphql`,
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

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions
});

// @ts-ignore
export const WithGraphQL = ({ children }) => {
  
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
