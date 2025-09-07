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

export type Mutation = {
  __typename?: 'Mutation';
  createCompanion: Companion;
  removeCompanion: Companion;
  updateCompanion: Companion;
};


export type MutationCreateCompanionArgs = {
  createCompanionInput: CreateCompanionInput;
};


export type MutationRemoveCompanionArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateCompanionArgs = {
  updateCompanionInput: UpdateCompanionInput;
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
  companion: Companion;
  companions: CompanionConnection;
};


export type QueryCompanionArgs = {
  id: Scalars['String']['input'];
};


export type QueryCompanionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
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
