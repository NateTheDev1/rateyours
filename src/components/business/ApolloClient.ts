import {
	ApolloClient,
	ApolloLink,
	concat,
	HttpLink,
	InMemoryCache
} from '@apollo/client';

const httpLink = new HttpLink({
	uri:
		process.env.NODE_ENV === 'production'
			? 'https://graphql.yourateit.io/graphql'
			: 'http://localhost:5000/graphql'
});

const authMiddleware = new ApolloLink((operation, forward) => {
	// add the authorization to the headers

	const token = localStorage.getItem(
		process.env.REACT_APP_TOKEN_KEY as string
	);

	if (token !== null && token !== undefined && token.length > 0) {
		operation.setContext({
			headers: {
				Authorization: token
			}
		});
	} else {
		operation.setContext({});
	}

	return forward(operation);
});

export const apolloClient = new ApolloClient({
	cache: new InMemoryCache(),
	defaultOptions: {
		mutate: { errorPolicy: 'all' },
		query: { errorPolicy: 'all' }
	},
	link: concat(authMiddleware, httpLink)
});
