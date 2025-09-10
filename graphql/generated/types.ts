import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Companion = {
  __typename?: 'Companion';
  /** The author of the companion */
  author: Scalars['String']['output'];
  /** The duration of the companion */
  duration: Scalars['Int']['output'];
  /** The id of the companion */
  id: Scalars['String']['output'];
  /** The name of the companion */
  name: Scalars['String']['output'];
  /** The style of the companion */
  style: Scalars['String']['output'];
  /** The subject of the companion */
  subject: Scalars['String']['output'];
  /** The topic of the companion */
  topic: Scalars['String']['output'];
  /** The voice of the companion */
  voice: Scalars['String']['output'];
};

export type CompanionConnection = {
  __typename?: 'CompanionConnection';
  edges?: Maybe<Array<CompanionEdge>>;
  pageInfo?: Maybe<PageInfo>;
};

export type CompanionEdge = {
  __typename?: 'CompanionEdge';
  cursor: Scalars['String']['output'];
  node: Companion;
};

export type CreateCompanionInput = {
  /** The duration of the companion */
  duration: Scalars['Int']['input'];
  /** The name of the companion */
  name: Scalars['String']['input'];
  /** The style of the companion */
  style: Scalars['String']['input'];
  /** The subject of the companion */
  subject: Scalars['String']['input'];
  /** The topic of the companion */
  topic: Scalars['String']['input'];
  /** The voice of the companion */
  voice: Scalars['String']['input'];
};

export type CreateSessionHistoryInput = {
  /** Companion id */
  companion_id: Scalars['ID']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCompanion: Companion;
  createSessionHistory: SessionHistory;
  removeCompanion: Companion;
  removeSessionHistory: SessionHistory;
  updateCompanion: Companion;
  updateSessionHistory: SessionHistory;
};


export type MutationCreateCompanionArgs = {
  createCompanionInput: CreateCompanionInput;
};


export type MutationCreateSessionHistoryArgs = {
  createSessionHistoryInput: CreateSessionHistoryInput;
};


export type MutationRemoveCompanionArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveSessionHistoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateCompanionArgs = {
  updateCompanionInput: UpdateCompanionInput;
};


export type MutationUpdateSessionHistoryArgs = {
  updateSessionHistoryInput: UpdateSessionHistoryInput;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  companion?: Maybe<Companion>;
  companions?: Maybe<CompanionConnection>;
  sessionHistories: Array<SessionHistory>;
  sessionHistory: SessionHistory;
};


export type QueryCompanionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCompanionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySessionHistoryArgs = {
  id: Scalars['Int']['input'];
};

export type SessionHistory = {
  __typename?: 'SessionHistory';
  Companion: Companion;
  /** The id of the companion */
  companion_id: Scalars['String']['output'];
  /** The creation date of the session history */
  createdAt: Scalars['DateTime']['output'];
  /** The id of the session history */
  id: Scalars['String']['output'];
  /** The id of the user */
  user_id: Scalars['String']['output'];
};

export type UpdateCompanionInput = {
  /** The duration of the companion */
  duration?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  /** The name of the companion */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The style of the companion */
  style?: InputMaybe<Scalars['String']['input']>;
  /** The subject of the companion */
  subject?: InputMaybe<Scalars['String']['input']>;
  /** The topic of the companion */
  topic?: InputMaybe<Scalars['String']['input']>;
  /** The voice of the companion */
  voice?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSessionHistoryInput = {
  /** Companion id */
  companion_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['Int']['input'];
};
