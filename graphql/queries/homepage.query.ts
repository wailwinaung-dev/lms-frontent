import { gql } from '@apollo/client';
import { COMPANION_FRAGMENT } from '../fragements/fragements';

export const GET_COMPANIONS_N_SESSIONS_HISTORY = gql`
  query HomePageData($first: Int) {
    companions(first: $first) {
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
    sessionHistories {
      id
      createdAt
      Companion {
        ...CompanionFragment
      }
    }
  }
  ${COMPANION_FRAGMENT}
`;
