/* Generated File DO NOT EDIT. */
/* tslint:disable */
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

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Float']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: UserModel;
  deleteUser: BatchPayload;
  updateUser: UserModel;
};


export type MutationCreateUserArgs = {
  user: UserCreateInput;
};


export type MutationDeleteUserArgs = {
  userIds: Array<Scalars['String']['input']>;
};


export type MutationUpdateUserArgs = {
  user: UserUpdateInput;
};

export type Query = {
  __typename?: 'Query';
  users: Array<UserModel>;
};

export type RoleModel = {
  __typename?: 'RoleModel';
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};

export type UserCreateInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  role_id: Scalars['Float']['input'];
  user_state_id: Scalars['Float']['input'];
};

export type UserModel = {
  __typename?: 'UserModel';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  role: RoleModel;
  user_state: UserStateModel;
};

export type UserStateModel = {
  __typename?: 'UserStateModel';
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};

export type UserUpdateInput = {
  email: Scalars['String']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  role_id: Scalars['Float']['input'];
  user_state_id: Scalars['Float']['input'];
};
