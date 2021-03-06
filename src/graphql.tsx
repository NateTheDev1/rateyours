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
  banner?: Maybe<Scalars['String']>;
  topTen: CategoryTopTen;
};

export type CategoryTopTen = {
  mostViewed: Array<Maybe<Entity>>;
  mostRecent: Array<Maybe<Entity>>;
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
  entity: Scalars['Int'];
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
  requestOwnership: Scalars['Boolean'];
  voteReview: Scalars['Boolean'];
  requestProfilePriority: Scalars['Boolean'];
  createUser: CreateUserReturn;
  login: CreateUserReturn;
  sendPasswordReset: Scalars['Boolean'];
  resetPassword: Scalars['Boolean'];
  updateUserDetails: Scalars['Boolean'];
  deleteSearchHistory: Scalars['Boolean'];
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


export type MutationRequestOwnershipArgs = {
  entityId: Scalars['Int'];
  userId: Scalars['Int'];
};


export type MutationVoteReviewArgs = {
  vote: VoteInput;
};


export type MutationRequestProfilePriorityArgs = {
  request: ProfilePriorityInput;
};


export type MutationCreateUserArgs = {
  user: CreateUserInput;
};


export type MutationLoginArgs = {
  credentials: LoginInput;
};


export type MutationSendPasswordResetArgs = {
  email?: Maybe<Scalars['String']>;
};


export type MutationResetPasswordArgs = {
  newCredentials: ResetPasswordCredentials;
};


export type MutationUpdateUserDetailsArgs = {
  patch: UpdateUserDetailsInput;
};


export type MutationDeleteSearchHistoryArgs = {
  id: Scalars['Int'];
};

export type PopularSearch = {
  id: Scalars['Int'];
  query: Scalars['String'];
  searches: Scalars['Int'];
};

export type ProfilePriorityInput = {
  entityId: Scalars['Int'];
  requestedBy: Scalars['Int'];
  why?: Maybe<Scalars['String']>;
};

export type Query = {
  getCategories: Array<Category>;
  search: ReviewSearchResponse;
  getEntity: Entity;
  searchReviews: SearchReviewsResponse;
  hasReviewed: Scalars['Boolean'];
  getCategory: Category;
  getEntityOwnershipRequests: Array<Maybe<EntityOwnershipRequest>>;
  getPopularSearches: Array<Maybe<PopularSearch>>;
  getUser: User;
  getUserActivity: UserActivity;
  getUserEntities: Array<Maybe<Entity>>;
  getSearchHistory: Array<Maybe<SearchHistory>>;
  getReviewVotes: Array<Maybe<ReviewVote>>;
  hasRequestedProfilePriority: Scalars['Boolean'];
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
  filters: ReviewSearchFilters;
  entityId: Scalars['Int'];
  first?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
};


export type QueryHasReviewedArgs = {
  entityId: Scalars['Int'];
  userId: Scalars['Int'];
};


export type QueryGetCategoryArgs = {
  id: Scalars['Int'];
};


export type QueryGetEntityOwnershipRequestsArgs = {
  id: Scalars['Int'];
};


export type QueryGetUserArgs = {
  id: Scalars['Int'];
};


export type QueryGetUserActivityArgs = {
  id: Scalars['Int'];
};


export type QueryGetUserEntitiesArgs = {
  id: Scalars['Int'];
};


export type QueryGetSearchHistoryArgs = {
  id: Scalars['Int'];
};


export type QueryGetReviewVotesArgs = {
  id: Scalars['Int'];
};


export type QueryHasRequestedProfilePriorityArgs = {
  entityId: Scalars['Int'];
};

export type ResetPasswordCredentials = {
  email: Scalars['String'];
  newPassword: Scalars['String'];
  token: Scalars['String'];
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
  upvotes: Scalars['Int'];
  downvotes: Scalars['Int'];
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

export type ReviewSearchFilters = {
  minRating: Scalars['Int'];
  maxRating: Scalars['Int'];
  sortBy: Scalars['String'];
};

export type ReviewSearchResponse = {
  reviews: Array<Maybe<Review>>;
  entities: Array<Maybe<Entity>>;
  total: Scalars['Int'];
};

export type ReviewVote = {
  id: Scalars['Int'];
  votedDate: Scalars['String'];
  voteType?: Maybe<VoteType>;
  reviewId: Scalars['Int'];
};

export type SearchFilters = {
  minRating: Scalars['Int'];
  maxRating: Scalars['Int'];
  sortyBy: Scalars['String'];
  categoryRestriction?: Maybe<Scalars['String']>;
};

export type SearchHistory = {
  id: Scalars['Int'];
  query: Scalars['String'];
  user: Scalars['Int'];
};

export type SearchReviewsResponse = {
  reviews: Array<Maybe<Review>>;
  total: Scalars['Int'];
};

export type UpdateUserDetailsInput = {
  userId: Scalars['Int'];
  fullName?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  accountType?: Maybe<Scalars['String']>;
};


export type User = {
  id: Scalars['Int'];
  fullName?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  accountType: Scalars['String'];
  email: Scalars['String'];
};

export type UserActivity = {
  reviews: Array<Maybe<Review>>;
};

export type VoteInput = {
  userId: Scalars['Int'];
  voteType: VoteType;
  reviewId: Scalars['Int'];
};

export type VoteType =
  | 'UPVOTE'
  | 'DOWNVOTE'
  | 'REMOVE';

export type GetEntityQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetEntityQuery = { getEntity: { id: number, type: string, name: string, specialContent?: Maybe<string>, views?: Maybe<number>, ownedBy?: Maybe<{ id: number, fullName?: Maybe<string> }> } };

export type GetEntityOwnershipRequestsQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetEntityOwnershipRequestsQuery = { getEntityOwnershipRequests: Array<Maybe<{ id: number, entity: number, approved: boolean }>> };

export type RequestOwnershipMutationVariables = Exact<{
  entityId: Scalars['Int'];
  userId: Scalars['Int'];
}>;


export type RequestOwnershipMutation = { requestOwnership: boolean };

export type RequestProfilePriorityMutationVariables = Exact<{
  request: ProfilePriorityInput;
}>;


export type RequestProfilePriorityMutation = { requestProfilePriority: boolean };

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
  filters: ReviewSearchFilters;
  entityId: Scalars['Int'];
  first?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
}>;


export type SearchReviewsQuery = { searchReviews: { total: number, reviews: Array<Maybe<{ id: number, type: string, title: string, createdAt: string, body: string, tags?: Maybe<Array<Maybe<string>>>, rating: number, specialContent?: Maybe<string>, entity: number, upvotes: number, downvotes: number, createdByUser: { fullName?: Maybe<string> } }>> } };

export type AddCategoryMutationVariables = Exact<{
  category: AddCategoryInput;
}>;


export type AddCategoryMutation = { addCategory: { title: string, caption: string } };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { getCategories: Array<{ id: number, title: string, caption: string, iconKey?: Maybe<string> }> };

export type GetCategoryQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetCategoryQuery = { getCategory: { id: number, title: string, caption: string, iconKey?: Maybe<string>, banner?: Maybe<string>, topTen: { mostViewed: Array<Maybe<{ id: number, type: string, name: string, views?: Maybe<number> }>>, mostRecent: Array<Maybe<{ id: number, type: string, name: string, views?: Maybe<number> }>> } } };

export type GetPopularSearchesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPopularSearchesQuery = { getPopularSearches: Array<Maybe<{ query: string, searches: number }>> };

export type SearchQueryVariables = Exact<{
  filters: SearchFilters;
  first?: Maybe<Scalars['Int']>;
  query: Scalars['String'];
}>;


export type SearchQuery = { search: { total: number, reviews: Array<Maybe<{ id: number, type: string, title: string, createdAt: string, body: string, tags?: Maybe<Array<Maybe<string>>>, rating: number, specialContent?: Maybe<string>, entity: number, createdByUser: { fullName?: Maybe<string> } }>>, entities: Array<Maybe<{ id: number, type: string, name: string, specialContent?: Maybe<string>, views?: Maybe<number>, ownedBy?: Maybe<{ fullName?: Maybe<string> }> }>> } };

export type VoteReviewMutationVariables = Exact<{
  vote: VoteInput;
}>;


export type VoteReviewMutation = { voteReview: boolean };

export type CreateUserMutationVariables = Exact<{
  user: CreateUserInput;
}>;


export type CreateUserMutation = { createUser: { token: string, user: { id: number, fullName?: Maybe<string>, birthday?: Maybe<string>, accountType: string, email: string } } };

export type DeleteSearchHistoryMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteSearchHistoryMutation = { deleteSearchHistory: boolean };

export type GetReviewVotesQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetReviewVotesQuery = { getReviewVotes: Array<Maybe<{ id: number, votedDate: string, voteType?: Maybe<VoteType>, reviewId: number }>> };

export type GetSearchHistoryQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetSearchHistoryQuery = { getSearchHistory: Array<Maybe<{ query: string }>> };

export type GetUserQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetUserQuery = { getUser: { id: number, fullName?: Maybe<string>, email: string, birthday?: Maybe<string>, accountType: string } };

export type GetUserActivityQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetUserActivityQuery = { getUserActivity: { reviews: Array<Maybe<{ id: number, type: string, title: string, entity: number, createdAt: string, tags?: Maybe<Array<Maybe<string>>> }>> } };

export type GetUserEntitiesQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetUserEntitiesQuery = { getUserEntities: Array<Maybe<{ id: number, type: string, name: string, views?: Maybe<number> }>> };

export type HasRequestedProfilePriorityQueryVariables = Exact<{
  entityId: Scalars['Int'];
}>;


export type HasRequestedProfilePriorityQuery = { hasRequestedProfilePriority: boolean };

export type LoginMutationVariables = Exact<{
  credentials: LoginInput;
}>;


export type LoginMutation = { login: { token: string } };

export type ResetPasswordMutationVariables = Exact<{
  newCredentials: ResetPasswordCredentials;
}>;


export type ResetPasswordMutation = { resetPassword: boolean };

export type SendPasswordResetMutationVariables = Exact<{
  email?: Maybe<Scalars['String']>;
}>;


export type SendPasswordResetMutation = { sendPasswordReset: boolean };

export type UpdateUserDetailsMutationVariables = Exact<{
  patch: UpdateUserDetailsInput;
}>;


export type UpdateUserDetailsMutation = { updateUserDetails: boolean };


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
export const GetEntityOwnershipRequestsDocument = gql`
    query GetEntityOwnershipRequests($id: Int!) {
  getEntityOwnershipRequests(id: $id) {
    id
    entity
    approved
  }
}
    `;

/**
 * __useGetEntityOwnershipRequestsQuery__
 *
 * To run a query within a React component, call `useGetEntityOwnershipRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEntityOwnershipRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEntityOwnershipRequestsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetEntityOwnershipRequestsQuery(baseOptions: Apollo.QueryHookOptions<GetEntityOwnershipRequestsQuery, GetEntityOwnershipRequestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEntityOwnershipRequestsQuery, GetEntityOwnershipRequestsQueryVariables>(GetEntityOwnershipRequestsDocument, options);
      }
export function useGetEntityOwnershipRequestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEntityOwnershipRequestsQuery, GetEntityOwnershipRequestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEntityOwnershipRequestsQuery, GetEntityOwnershipRequestsQueryVariables>(GetEntityOwnershipRequestsDocument, options);
        }
export type GetEntityOwnershipRequestsQueryHookResult = ReturnType<typeof useGetEntityOwnershipRequestsQuery>;
export type GetEntityOwnershipRequestsLazyQueryHookResult = ReturnType<typeof useGetEntityOwnershipRequestsLazyQuery>;
export type GetEntityOwnershipRequestsQueryResult = Apollo.QueryResult<GetEntityOwnershipRequestsQuery, GetEntityOwnershipRequestsQueryVariables>;
export const RequestOwnershipDocument = gql`
    mutation RequestOwnership($entityId: Int!, $userId: Int!) {
  requestOwnership(entityId: $entityId, userId: $userId)
}
    `;
export type RequestOwnershipMutationFn = Apollo.MutationFunction<RequestOwnershipMutation, RequestOwnershipMutationVariables>;

/**
 * __useRequestOwnershipMutation__
 *
 * To run a mutation, you first call `useRequestOwnershipMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestOwnershipMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestOwnershipMutation, { data, loading, error }] = useRequestOwnershipMutation({
 *   variables: {
 *      entityId: // value for 'entityId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useRequestOwnershipMutation(baseOptions?: Apollo.MutationHookOptions<RequestOwnershipMutation, RequestOwnershipMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestOwnershipMutation, RequestOwnershipMutationVariables>(RequestOwnershipDocument, options);
      }
export type RequestOwnershipMutationHookResult = ReturnType<typeof useRequestOwnershipMutation>;
export type RequestOwnershipMutationResult = Apollo.MutationResult<RequestOwnershipMutation>;
export type RequestOwnershipMutationOptions = Apollo.BaseMutationOptions<RequestOwnershipMutation, RequestOwnershipMutationVariables>;
export const RequestProfilePriorityDocument = gql`
    mutation RequestProfilePriority($request: ProfilePriorityInput!) {
  requestProfilePriority(request: $request)
}
    `;
export type RequestProfilePriorityMutationFn = Apollo.MutationFunction<RequestProfilePriorityMutation, RequestProfilePriorityMutationVariables>;

/**
 * __useRequestProfilePriorityMutation__
 *
 * To run a mutation, you first call `useRequestProfilePriorityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestProfilePriorityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestProfilePriorityMutation, { data, loading, error }] = useRequestProfilePriorityMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useRequestProfilePriorityMutation(baseOptions?: Apollo.MutationHookOptions<RequestProfilePriorityMutation, RequestProfilePriorityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestProfilePriorityMutation, RequestProfilePriorityMutationVariables>(RequestProfilePriorityDocument, options);
      }
export type RequestProfilePriorityMutationHookResult = ReturnType<typeof useRequestProfilePriorityMutation>;
export type RequestProfilePriorityMutationResult = Apollo.MutationResult<RequestProfilePriorityMutation>;
export type RequestProfilePriorityMutationOptions = Apollo.BaseMutationOptions<RequestProfilePriorityMutation, RequestProfilePriorityMutationVariables>;
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
    query SearchReviews($filters: ReviewSearchFilters!, $entityId: Int!, $first: Int, $query: String) {
  searchReviews(
    filters: $filters
    entityId: $entityId
    first: $first
    query: $query
  ) {
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
      upvotes
      downvotes
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
 *      filters: // value for 'filters'
 *      entityId: // value for 'entityId'
 *      first: // value for 'first'
 *      query: // value for 'query'
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
export const GetCategoryDocument = gql`
    query GetCategory($id: Int!) {
  getCategory(id: $id) {
    id
    title
    caption
    iconKey
    banner
    topTen {
      mostViewed {
        id
        type
        name
        views
      }
      mostRecent {
        id
        type
        name
        views
      }
    }
  }
}
    `;

/**
 * __useGetCategoryQuery__
 *
 * To run a query within a React component, call `useGetCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCategoryQuery(baseOptions: Apollo.QueryHookOptions<GetCategoryQuery, GetCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoryQuery, GetCategoryQueryVariables>(GetCategoryDocument, options);
      }
export function useGetCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoryQuery, GetCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoryQuery, GetCategoryQueryVariables>(GetCategoryDocument, options);
        }
export type GetCategoryQueryHookResult = ReturnType<typeof useGetCategoryQuery>;
export type GetCategoryLazyQueryHookResult = ReturnType<typeof useGetCategoryLazyQuery>;
export type GetCategoryQueryResult = Apollo.QueryResult<GetCategoryQuery, GetCategoryQueryVariables>;
export const GetPopularSearchesDocument = gql`
    query GetPopularSearches {
  getPopularSearches {
    query
    searches
  }
}
    `;

/**
 * __useGetPopularSearchesQuery__
 *
 * To run a query within a React component, call `useGetPopularSearchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPopularSearchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPopularSearchesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPopularSearchesQuery(baseOptions?: Apollo.QueryHookOptions<GetPopularSearchesQuery, GetPopularSearchesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPopularSearchesQuery, GetPopularSearchesQueryVariables>(GetPopularSearchesDocument, options);
      }
export function useGetPopularSearchesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPopularSearchesQuery, GetPopularSearchesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPopularSearchesQuery, GetPopularSearchesQueryVariables>(GetPopularSearchesDocument, options);
        }
export type GetPopularSearchesQueryHookResult = ReturnType<typeof useGetPopularSearchesQuery>;
export type GetPopularSearchesLazyQueryHookResult = ReturnType<typeof useGetPopularSearchesLazyQuery>;
export type GetPopularSearchesQueryResult = Apollo.QueryResult<GetPopularSearchesQuery, GetPopularSearchesQueryVariables>;
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
export const VoteReviewDocument = gql`
    mutation VoteReview($vote: VoteInput!) {
  voteReview(vote: $vote)
}
    `;
export type VoteReviewMutationFn = Apollo.MutationFunction<VoteReviewMutation, VoteReviewMutationVariables>;

/**
 * __useVoteReviewMutation__
 *
 * To run a mutation, you first call `useVoteReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVoteReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [voteReviewMutation, { data, loading, error }] = useVoteReviewMutation({
 *   variables: {
 *      vote: // value for 'vote'
 *   },
 * });
 */
export function useVoteReviewMutation(baseOptions?: Apollo.MutationHookOptions<VoteReviewMutation, VoteReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VoteReviewMutation, VoteReviewMutationVariables>(VoteReviewDocument, options);
      }
export type VoteReviewMutationHookResult = ReturnType<typeof useVoteReviewMutation>;
export type VoteReviewMutationResult = Apollo.MutationResult<VoteReviewMutation>;
export type VoteReviewMutationOptions = Apollo.BaseMutationOptions<VoteReviewMutation, VoteReviewMutationVariables>;
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
export const DeleteSearchHistoryDocument = gql`
    mutation DeleteSearchHistory($id: Int!) {
  deleteSearchHistory(id: $id)
}
    `;
export type DeleteSearchHistoryMutationFn = Apollo.MutationFunction<DeleteSearchHistoryMutation, DeleteSearchHistoryMutationVariables>;

/**
 * __useDeleteSearchHistoryMutation__
 *
 * To run a mutation, you first call `useDeleteSearchHistoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSearchHistoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSearchHistoryMutation, { data, loading, error }] = useDeleteSearchHistoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSearchHistoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSearchHistoryMutation, DeleteSearchHistoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSearchHistoryMutation, DeleteSearchHistoryMutationVariables>(DeleteSearchHistoryDocument, options);
      }
export type DeleteSearchHistoryMutationHookResult = ReturnType<typeof useDeleteSearchHistoryMutation>;
export type DeleteSearchHistoryMutationResult = Apollo.MutationResult<DeleteSearchHistoryMutation>;
export type DeleteSearchHistoryMutationOptions = Apollo.BaseMutationOptions<DeleteSearchHistoryMutation, DeleteSearchHistoryMutationVariables>;
export const GetReviewVotesDocument = gql`
    query GetReviewVotes($id: Int!) {
  getReviewVotes(id: $id) {
    id
    votedDate
    voteType
    reviewId
  }
}
    `;

/**
 * __useGetReviewVotesQuery__
 *
 * To run a query within a React component, call `useGetReviewVotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReviewVotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReviewVotesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetReviewVotesQuery(baseOptions: Apollo.QueryHookOptions<GetReviewVotesQuery, GetReviewVotesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReviewVotesQuery, GetReviewVotesQueryVariables>(GetReviewVotesDocument, options);
      }
export function useGetReviewVotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReviewVotesQuery, GetReviewVotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReviewVotesQuery, GetReviewVotesQueryVariables>(GetReviewVotesDocument, options);
        }
export type GetReviewVotesQueryHookResult = ReturnType<typeof useGetReviewVotesQuery>;
export type GetReviewVotesLazyQueryHookResult = ReturnType<typeof useGetReviewVotesLazyQuery>;
export type GetReviewVotesQueryResult = Apollo.QueryResult<GetReviewVotesQuery, GetReviewVotesQueryVariables>;
export const GetSearchHistoryDocument = gql`
    query GetSearchHistory($id: Int!) {
  getSearchHistory(id: $id) {
    query
  }
}
    `;

/**
 * __useGetSearchHistoryQuery__
 *
 * To run a query within a React component, call `useGetSearchHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSearchHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSearchHistoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSearchHistoryQuery(baseOptions: Apollo.QueryHookOptions<GetSearchHistoryQuery, GetSearchHistoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSearchHistoryQuery, GetSearchHistoryQueryVariables>(GetSearchHistoryDocument, options);
      }
export function useGetSearchHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSearchHistoryQuery, GetSearchHistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSearchHistoryQuery, GetSearchHistoryQueryVariables>(GetSearchHistoryDocument, options);
        }
export type GetSearchHistoryQueryHookResult = ReturnType<typeof useGetSearchHistoryQuery>;
export type GetSearchHistoryLazyQueryHookResult = ReturnType<typeof useGetSearchHistoryLazyQuery>;
export type GetSearchHistoryQueryResult = Apollo.QueryResult<GetSearchHistoryQuery, GetSearchHistoryQueryVariables>;
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
export const GetUserActivityDocument = gql`
    query GetUserActivity($id: Int!) {
  getUserActivity(id: $id) {
    reviews {
      id
      type
      title
      entity
      createdAt
      tags
    }
  }
}
    `;

/**
 * __useGetUserActivityQuery__
 *
 * To run a query within a React component, call `useGetUserActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserActivityQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserActivityQuery(baseOptions: Apollo.QueryHookOptions<GetUserActivityQuery, GetUserActivityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserActivityQuery, GetUserActivityQueryVariables>(GetUserActivityDocument, options);
      }
export function useGetUserActivityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserActivityQuery, GetUserActivityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserActivityQuery, GetUserActivityQueryVariables>(GetUserActivityDocument, options);
        }
export type GetUserActivityQueryHookResult = ReturnType<typeof useGetUserActivityQuery>;
export type GetUserActivityLazyQueryHookResult = ReturnType<typeof useGetUserActivityLazyQuery>;
export type GetUserActivityQueryResult = Apollo.QueryResult<GetUserActivityQuery, GetUserActivityQueryVariables>;
export const GetUserEntitiesDocument = gql`
    query GetUserEntities($id: Int!) {
  getUserEntities(id: $id) {
    id
    type
    name
    views
  }
}
    `;

/**
 * __useGetUserEntitiesQuery__
 *
 * To run a query within a React component, call `useGetUserEntitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserEntitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserEntitiesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserEntitiesQuery(baseOptions: Apollo.QueryHookOptions<GetUserEntitiesQuery, GetUserEntitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserEntitiesQuery, GetUserEntitiesQueryVariables>(GetUserEntitiesDocument, options);
      }
export function useGetUserEntitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserEntitiesQuery, GetUserEntitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserEntitiesQuery, GetUserEntitiesQueryVariables>(GetUserEntitiesDocument, options);
        }
export type GetUserEntitiesQueryHookResult = ReturnType<typeof useGetUserEntitiesQuery>;
export type GetUserEntitiesLazyQueryHookResult = ReturnType<typeof useGetUserEntitiesLazyQuery>;
export type GetUserEntitiesQueryResult = Apollo.QueryResult<GetUserEntitiesQuery, GetUserEntitiesQueryVariables>;
export const HasRequestedProfilePriorityDocument = gql`
    query HasRequestedProfilePriority($entityId: Int!) {
  hasRequestedProfilePriority(entityId: $entityId)
}
    `;

/**
 * __useHasRequestedProfilePriorityQuery__
 *
 * To run a query within a React component, call `useHasRequestedProfilePriorityQuery` and pass it any options that fit your needs.
 * When your component renders, `useHasRequestedProfilePriorityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHasRequestedProfilePriorityQuery({
 *   variables: {
 *      entityId: // value for 'entityId'
 *   },
 * });
 */
export function useHasRequestedProfilePriorityQuery(baseOptions: Apollo.QueryHookOptions<HasRequestedProfilePriorityQuery, HasRequestedProfilePriorityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HasRequestedProfilePriorityQuery, HasRequestedProfilePriorityQueryVariables>(HasRequestedProfilePriorityDocument, options);
      }
export function useHasRequestedProfilePriorityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HasRequestedProfilePriorityQuery, HasRequestedProfilePriorityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HasRequestedProfilePriorityQuery, HasRequestedProfilePriorityQueryVariables>(HasRequestedProfilePriorityDocument, options);
        }
export type HasRequestedProfilePriorityQueryHookResult = ReturnType<typeof useHasRequestedProfilePriorityQuery>;
export type HasRequestedProfilePriorityLazyQueryHookResult = ReturnType<typeof useHasRequestedProfilePriorityLazyQuery>;
export type HasRequestedProfilePriorityQueryResult = Apollo.QueryResult<HasRequestedProfilePriorityQuery, HasRequestedProfilePriorityQueryVariables>;
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
export const ResetPasswordDocument = gql`
    mutation ResetPassword($newCredentials: ResetPasswordCredentials!) {
  resetPassword(newCredentials: $newCredentials)
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      newCredentials: // value for 'newCredentials'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const SendPasswordResetDocument = gql`
    mutation SendPasswordReset($email: String) {
  sendPasswordReset(email: $email)
}
    `;
export type SendPasswordResetMutationFn = Apollo.MutationFunction<SendPasswordResetMutation, SendPasswordResetMutationVariables>;

/**
 * __useSendPasswordResetMutation__
 *
 * To run a mutation, you first call `useSendPasswordResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendPasswordResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendPasswordResetMutation, { data, loading, error }] = useSendPasswordResetMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSendPasswordResetMutation(baseOptions?: Apollo.MutationHookOptions<SendPasswordResetMutation, SendPasswordResetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendPasswordResetMutation, SendPasswordResetMutationVariables>(SendPasswordResetDocument, options);
      }
export type SendPasswordResetMutationHookResult = ReturnType<typeof useSendPasswordResetMutation>;
export type SendPasswordResetMutationResult = Apollo.MutationResult<SendPasswordResetMutation>;
export type SendPasswordResetMutationOptions = Apollo.BaseMutationOptions<SendPasswordResetMutation, SendPasswordResetMutationVariables>;
export const UpdateUserDetailsDocument = gql`
    mutation UpdateUserDetails($patch: UpdateUserDetailsInput!) {
  updateUserDetails(patch: $patch)
}
    `;
export type UpdateUserDetailsMutationFn = Apollo.MutationFunction<UpdateUserDetailsMutation, UpdateUserDetailsMutationVariables>;

/**
 * __useUpdateUserDetailsMutation__
 *
 * To run a mutation, you first call `useUpdateUserDetailsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserDetailsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserDetailsMutation, { data, loading, error }] = useUpdateUserDetailsMutation({
 *   variables: {
 *      patch: // value for 'patch'
 *   },
 * });
 */
export function useUpdateUserDetailsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserDetailsMutation, UpdateUserDetailsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserDetailsMutation, UpdateUserDetailsMutationVariables>(UpdateUserDetailsDocument, options);
      }
export type UpdateUserDetailsMutationHookResult = ReturnType<typeof useUpdateUserDetailsMutation>;
export type UpdateUserDetailsMutationResult = Apollo.MutationResult<UpdateUserDetailsMutation>;
export type UpdateUserDetailsMutationOptions = Apollo.BaseMutationOptions<UpdateUserDetailsMutation, UpdateUserDetailsMutationVariables>;