import { gql } from '@apollo/client';
import { COMPANION_FRAGMENT } from '../fragements/fragements';

export const GET_SESSION_HISTORIES = gql`
  query getSessionHistories {
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
