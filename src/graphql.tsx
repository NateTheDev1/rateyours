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


export type AddCategoryInput = {
  title: Scalars['String'];
  iconKey?: Maybe<Scalars['String']>;
  caption: Scalars['String'];
  approved: Scalars['Boolean'];
};

export type CacheControlScope =
  | 'PUBLIC'
  | 'PRIVATE';

export type Category = {
  id: Scalars['Int'];
  title: Scalars['String'];
  caption: Scalars['String'];
  iconKey?: Maybe<Scalars['String']>;
  approved: Scalars['Boolean'];
};

export type CreateEntityInput = {
  type: Scalars['String'];
  ownedBy?: Maybe<Scalars['Int']>;
  specialContent: Scalars['String'];
};

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

export type Entity = {
  id: Scalars['Int'];
  type: Scalars['String'];
  ownedBy?: Maybe<User>;
  specialContent?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  views?: Maybe<Scalars['Int']>;
};

export type EntityOwnershipRequest = {
  id: Scalars['Int'];
  requestedBy: Scalars['Int'];
  approved: Scalars['Boolean'];
};

export type EntitySearchResponse = {
  entities: Array<Maybe<Entity>>;
  total: Scalars['Int'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  addCategory: Category;
  addReview: Review;
  updateEntityViews: Scalars['Boolean'];
  createUser: CreateUserReturn;
  login: CreateUserReturn;
};


export type MutationAddCategoryArgs = {
  category: AddCategoryInput;
};


export type MutationAddReviewArgs = {
  review: ReviewInput;
  hasReviewed: Scalars['Boolean'];
};


export type MutationUpdateEntityViewsArgs = {
  viewCount: Scalars['Int'];
  entityId: Scalars['Int'];
};


export type MutationCreateUserArgs = {
  user: CreateUserInput;
};


export type MutationLoginArgs = {
  credentials: LoginInput;
};

export type Query = {
  getCategories: Array<Category>;
  search: ReviewSearchResponse;
  getEntity: Entity;
  searchReviews: SearchReviewsResponse;
  hasReviewed: Scalars['Boolean'];
  getUser: User;
};


export type QuerySearchArgs = {
  filters: SearchFilters;
  first?: Maybe<Scalars['Int']>;
  query: Scalars['String'];
};


export type QueryGetEntityArgs = {
  id: Scalars['Int'];
};


export type QuerySearchReviewsArgs = {
  entityId: Scalars['Int'];
  first?: Maybe<Scalars['Int']>;
};


export type QueryHasReviewedArgs = {
  entityId: Scalars['Int'];
  userId: Scalars['Int'];
};


export type QueryGetUserArgs = {
  id: Scalars['Int'];
};

export type Review = {
  id: Scalars['Int'];
  type: Scalars['String'];
  title: Scalars['String'];
  createdBy: Scalars['Int'];
  createdByUser: User;
  createdAt: Scalars['String'];
  body: Scalars['String'];
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  rating: Scalars['Int'];
  specialContent?: Maybe<Scalars['String']>;
  entity: Scalars['Int'];
};

export type ReviewInput = {
  type: Scalars['String'];
  title: Scalars['String'];
  createdBy: Scalars['Int'];
  body: Scalars['String'];
  tags: Array<Maybe<Scalars['String']>>;
  rating: Scalars['Int'];
  specialContent?: Maybe<Scalars['String']>;
  entity: Scalars['Int'];
};

export type ReviewSearchResponse = {
  reviews: Array<Maybe<Review>>;
  entities: Array<Maybe<Entity>>;
  total: Scalars['Int'];
};

export type SearchFilters = {
  minRating: Scalars['Int'];
  maxRating: Scalars['Int'];
  sortyBy: Scalars['String'];
  categoryRestriction?: Maybe<Scalars['String']>;
};

export type SearchReviewsResponse = {
  reviews: Array<Maybe<Review>>;
  total: Scalars['Int'];
};


export type User = {
  id: Scalars['Int'];
  fullName?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  accountType: Scalars['String'];
  email: Scalars['String'];
};

export type GetEntityQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetEntityQuery = { getEntity: { id: number, type: string, name: string, specialContent?: Maybe<string>, views?: Maybe<number>, ownedBy?: Maybe<{ id: number, fullName?: Maybe<string> }> } };

export type UpdateEntityViewsMutationVariables = Exact<{
  viewCount: Scalars['Int'];
  entityId: Scalars['Int'];
}>;


export type UpdateEntityViewsMutation = { updateEntityViews: boolean };

export type AddReviewMutationVariables = Exact<{
  review: ReviewInput;
  hasReviewed: Scalars['Boolean'];
}>;


export type AddReviewMutation = { addReview: { id: number, type: string, title: string, createdAt: string, body: string, tags?: Maybe<Array<Maybe<string>>>, rating: number, specialContent?: Maybe<string>, entity: number, createdByUser: { fullName?: Maybe<string> } } };

export type HasReviewedQueryVariables = Exact<{
  entityId: Scalars['Int'];
  userId: Scalars['Int'];
}>;


export type HasReviewedQuery = { hasReviewed: boolean };

export type SearchReviewsQueryVariables = Exact<{
  entityId: Scalars['Int'];
  first?: Maybe<Scalars['Int']>;
}>;


export type SearchReviewsQuery = { searchReviews: { total: number, reviews: Array<Maybe<{ id: number, type: string, title: string, createdAt: string, body: string, tags?: Maybe<Array<Maybe<string>>>, rating: number, specialContent?: Maybe<string>, entity: number, createdByUser: { fullName?: Maybe<string> } }>> } };

export type AddCategoryMutationVariables = Exact<{
  category: AddCategoryInput;
}>;


export type AddCategoryMutation = { addCategory: { title: string, caption: string } };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { getCategories: Array<{ id: number, title: string, caption: string, iconKey?: Maybe<string> }> };

export type SearchQueryVariables = Exact<{
  filters: SearchFilters;
  first?: Maybe<Scalars['Int']>;
  query: Scalars['String'];
}>;


export type SearchQuery = { search: { total: number, reviews: Array<Maybe<{ id: number, type: string, title: string, createdAt: string, body: string, tags?: Maybe<Array<Maybe<string>>>, rating: number, specialContent?: Maybe<string>, entity: number, createdByUser: { fullName?: Maybe<string> } }>>, entities: Array<Maybe<{ id: number, type: string, name: string, specialContent?: Maybe<string>, views?: Maybe<number>, ownedBy?: Maybe<{ fullName?: Maybe<string> }> }>> } };

export type CreateUserMutationVariables = Exact<{
  user: CreateUserInput;
}>;


export type CreateUserMutation = { createUser: { token: string, user: { id: number, fullName?: Maybe<string>, birthday?: Maybe<string>, accountType: string, email: string } } };

export type GetUserQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetUserQuery = { getUser: { id: number, fullName?: Maybe<string>, email: string, birthday?: Maybe<string>, accountType: string } };

export type LoginMutationVariables = Exact<{
  credentials: LoginInput;
}>;


export type LoginMutation = { login: { token: string } };


export const GetEntityDocument = gql`
    query GetEntity($id: Int!) {
  getEntity(id: $id) {
    id
    type
    name
    ownedBy {
      id
      fullName
    }
    specialContent
    views
  }
}
    `;

/**
 * __useGetEntityQuery__
 *
 * To run a query within a React component, call `useGetEntityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEntityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEntityQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetEntityQuery(baseOptions: Apollo.QueryHookOptions<GetEntityQuery, GetEntityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEntityQuery, GetEntityQueryVariables>(GetEntityDocument, options);
      }
export function useGetEntityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEntityQuery, GetEntityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEntityQuery, GetEntityQueryVariables>(GetEntityDocument, options);
        }
export type GetEntityQueryHookResult = ReturnType<typeof useGetEntityQuery>;
export type GetEntityLazyQueryHookResult = ReturnType<typeof useGetEntityLazyQuery>;
export type GetEntityQueryResult = Apollo.QueryResult<GetEntityQuery, GetEntityQueryVariables>;
export const UpdateEntityViewsDocument = gql`
    mutation UpdateEntityViews($viewCount: Int!, $entityId: Int!) {
  updateEntityViews(viewCount: $viewCount, entityId: $entityId)
}
    `;
export type UpdateEntityViewsMutationFn = Apollo.MutationFunction<UpdateEntityViewsMutation, UpdateEntityViewsMutationVariables>;

/**
 * __useUpdateEntityViewsMutation__
 *
 * To run a mutation, you first call `useUpdateEntityViewsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEntityViewsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEntityViewsMutation, { data, loading, error }] = useUpdateEntityViewsMutation({
 *   variables: {
 *      viewCount: // value for 'viewCount'
 *      entityId: // value for 'entityId'
 *   },
 * });
 */
export function useUpdateEntityViewsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEntityViewsMutation, UpdateEntityViewsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEntityViewsMutation, UpdateEntityViewsMutationVariables>(UpdateEntityViewsDocument, options);
      }
export type UpdateEntityViewsMutationHookResult = ReturnType<typeof useUpdateEntityViewsMutation>;
export type UpdateEntityViewsMutationResult = Apollo.MutationResult<UpdateEntityViewsMutation>;
export type UpdateEntityViewsMutationOptions = Apollo.BaseMutationOptions<UpdateEntityViewsMutation, UpdateEntityViewsMutationVariables>;
export const AddReviewDocument = gql`
    mutation AddReview($review: ReviewInput!, $hasReviewed: Boolean!) {
  addReview(review: $review, hasReviewed: $hasReviewed) {
    id
    type
    title
    createdByUser {
      fullName
    }
    createdAt
    body
    tags
    rating
    specialContent
    entity
  }
}
    `;
export type AddReviewMutationFn = Apollo.MutationFunction<AddReviewMutation, AddReviewMutationVariables>;

/**
 * __useAddReviewMutation__
 *
 * To run a mutation, you first call `useAddReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addReviewMutation, { data, loading, error }] = useAddReviewMutation({
 *   variables: {
 *      review: // value for 'review'
 *      hasReviewed: // value for 'hasReviewed'
 *   },
 * });
 */
export function useAddReviewMutation(baseOptions?: Apollo.MutationHookOptions<AddReviewMutation, AddReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddReviewMutation, AddReviewMutationVariables>(AddReviewDocument, options);
      }
export type AddReviewMutationHookResult = ReturnType<typeof useAddReviewMutation>;
export type AddReviewMutationResult = Apollo.MutationResult<AddReviewMutation>;
export type AddReviewMutationOptions = Apollo.BaseMutationOptions<AddReviewMutation, AddReviewMutationVariables>;
export const HasReviewedDocument = gql`
    query HasReviewed($entityId: Int!, $userId: Int!) {
  hasReviewed(entityId: $entityId, userId: $userId)
}
    `;

/**
 * __useHasReviewedQuery__
 *
 * To run a query within a React component, call `useHasReviewedQuery` and pass it any options that fit your needs.
 * When your component renders, `useHasReviewedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHasReviewedQuery({
 *   variables: {
 *      entityId: // value for 'entityId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useHasReviewedQuery(baseOptions: Apollo.QueryHookOptions<HasReviewedQuery, HasReviewedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HasReviewedQuery, HasReviewedQueryVariables>(HasReviewedDocument, options);
      }
export function useHasReviewedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HasReviewedQuery, HasReviewedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HasReviewedQuery, HasReviewedQueryVariables>(HasReviewedDocument, options);
        }
export type HasReviewedQueryHookResult = ReturnType<typeof useHasReviewedQuery>;
export type HasReviewedLazyQueryHookResult = ReturnType<typeof useHasReviewedLazyQuery>;
export type HasReviewedQueryResult = Apollo.QueryResult<HasReviewedQuery, HasReviewedQueryVariables>;
export const SearchReviewsDocument = gql`
    query SearchReviews($entityId: Int!, $first: Int) {
  searchReviews(entityId: $entityId, first: $first) {
    total
    reviews {
      id
      type
      title
      createdByUser {
        fullName
      }
      createdAt
      body
      tags
      rating
      specialContent
      entity
    }
  }
}
    `;

/**
 * __useSearchReviewsQuery__
 *
 * To run a query within a React component, call `useSearchReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchReviewsQuery({
 *   variables: {
 *      entityId: // value for 'entityId'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useSearchReviewsQuery(baseOptions: Apollo.QueryHookOptions<SearchReviewsQuery, SearchReviewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchReviewsQuery, SearchReviewsQueryVariables>(SearchReviewsDocument, options);
      }
export function useSearchReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchReviewsQuery, SearchReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchReviewsQuery, SearchReviewsQueryVariables>(SearchReviewsDocument, options);
        }
export type SearchReviewsQueryHookResult = ReturnType<typeof useSearchReviewsQuery>;
export type SearchReviewsLazyQueryHookResult = ReturnType<typeof useSearchReviewsLazyQuery>;
export type SearchReviewsQueryResult = Apollo.QueryResult<SearchReviewsQuery, SearchReviewsQueryVariables>;
export const AddCategoryDocument = gql`
    mutation AddCategory($category: AddCategoryInput!) {
  addCategory(category: $category) {
    title
    caption
  }
}
    `;
export type AddCategoryMutationFn = Apollo.MutationFunction<AddCategoryMutation, AddCategoryMutationVariables>;

/**
 * __useAddCategoryMutation__
 *
 * To run a mutation, you first call `useAddCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCategoryMutation, { data, loading, error }] = useAddCategoryMutation({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useAddCategoryMutation(baseOptions?: Apollo.MutationHookOptions<AddCategoryMutation, AddCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCategoryMutation, AddCategoryMutationVariables>(AddCategoryDocument, options);
      }
export type AddCategoryMutationHookResult = ReturnType<typeof useAddCategoryMutation>;
export type AddCategoryMutationResult = Apollo.MutationResult<AddCategoryMutation>;
export type AddCategoryMutationOptions = Apollo.BaseMutationOptions<AddCategoryMutation, AddCategoryMutationVariables>;
export const GetCategoriesDocument = gql`
    query GetCategories {
  getCategories {
    id
    title
    caption
    iconKey
  }
}
    `;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
      }
export function useGetCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const SearchDocument = gql`
    query Search($filters: SearchFilters!, $first: Int, $query: String!) {
  search(filters: $filters, first: $first, query: $query) {
    reviews {
      id
      type
      title
      createdByUser {
        fullName
      }
      createdAt
      body
      tags
      rating
      specialContent
      entity
    }
    entities {
      id
      type
      name
      ownedBy {
        fullName
      }
      specialContent
      views
    }
    total
  }
}
    `;

/**
 * __useSearchQuery__
 *
 * To run a query within a React component, call `useSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      first: // value for 'first'
 *      query: // value for 'query'
 *   },
 * });
 */
export function useSearchQuery(baseOptions: Apollo.QueryHookOptions<SearchQuery, SearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
      }
export function useSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchQuery, SearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
        }
export type SearchQueryHookResult = ReturnType<typeof useSearchQuery>;
export type SearchLazyQueryHookResult = ReturnType<typeof useSearchLazyQuery>;
export type SearchQueryResult = Apollo.QueryResult<SearchQuery, SearchQueryVariables>;
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
export const LoginDocument = gql`
    mutation Login($credentials: LoginInput!) {
  login(credentials: $credentials) {
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      credentials: // value for 'credentials'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;