import { gql } from '@apollo/client';
import { COMPANION_FRAGMENT } from '../fragements/fragements';

export const GET_COMPANIONS_N_SESSIONS_HISTORY_BY_USER_ID = gql`
  query myJourney {
    companionsByUser {
      ...CompanionFragment
    }
    sessionHistoriesByUser {
      id
      createdAt
      Companion {
        ...CompanionFragment
      }
    }
  }
  ${COMPANION_FRAGMENT}
`;
