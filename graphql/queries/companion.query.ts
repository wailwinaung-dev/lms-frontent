import { gql } from '@apollo/client';
import { COMPANION_FRAGMENT } from '../fragements/fragements';

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

export const GET_TOTAL_COUNT_BY_USER = gql`
  query TotalCountByUser {
    totalCountByUser
  }
`;
