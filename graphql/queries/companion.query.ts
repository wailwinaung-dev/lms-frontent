import { gql } from '@apollo/client';

export const COMPANION_FRAGMENT = gql`
  fragment CompanionFragment on Companion {
    id
    name
    subject
    topic
    style
    voice
    duration
    author
  }
`;
export const GET_COMPANIONS = gql`
  query Companions(
    $first: Int
    $last: Int
    $after: String
    $before: String
    $filter: String
    $subject: String
  ) {
    companions(
      first: $first
      last: $last
      after: $after
      before: $before
      filter: $filter
      subject: $subject
    ) {
      pageInfo {
        startCursor
        endCursor
        hasPreviousPage
        hasNextPage
      }
      edges {
        cursor
        node {
          ...CompanionFragment
        }
      }
    }
  }
  ${COMPANION_FRAGMENT}
`;

export const GET_COMPANION = gql`
  query Companion($id: ID!) {
    companion(id: $id) {
      ...CompanionFragment
    }
  }
  ${COMPANION_FRAGMENT}
`;
