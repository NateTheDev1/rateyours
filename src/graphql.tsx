import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type CacheControlScope =
  | 'PUBLIC'
  | 'PRIVATE';

export type CreateUserInput = {
  fullName?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
};

export type CreateUserReturn = {
  user: User;
  token: Scalars['String'];
};

export type Mutation = {
  createUser: CreateUserReturn;
};


export type MutationCreateUserArgs = {
  user: CreateUserInput;
};

export type Query = {
  getUser: User;
};


export type QueryGetUserArgs = {
  id: Scalars['Int'];
};


export type User = {
  id: Scalars['Int'];
  fullName?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  accountType: Scalars['String'];
  email: Scalars['String'];
};

export type CreateUserMutationVariables = Exact<{
  user: CreateUserInput;
}>;


export type CreateUserMutation = { createUser: { token: string, user: { id: number, fullName?: Maybe<string>, birthday?: Maybe<string>, accountType: string, email: string } } };

export type GetUserQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetUserQuery = { getUser: { id: number, fullName?: Maybe<string>, email: string, birthday?: Maybe<string>, accountType: string } };


export const CreateUserDocument = gql`
    mutation CreateUser($user: CreateUserInput!) {
  createUser(user: $user) {
    user {
      id
      fullName
      birthday
      accountType
      email
    }
    token
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const GetUserDocument = gql`
    query GetUser($id: Int!) {
  getUser(id: $id) {
    id
    fullName
    email
    birthday
    accountType
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;