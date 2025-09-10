import { gql } from '@apollo/client';

export const CREATE_SESSION_HISTORY = gql`
  mutation CreateSessionHistory(
    $createSessionHistoryInput: CreateSessionHistoryInput!
  ) {
    createSessionHistory(
      createSessionHistoryInput: $createSessionHistoryInput
    ) {
      id
      user_id
      companion_id
      createdAt
    }
  }
`;
