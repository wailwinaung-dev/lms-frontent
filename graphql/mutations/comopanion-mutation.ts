import { gql } from '@apollo/client';
import { COMPANION_FRAGMENT } from '../queries/companion-query';

export const CREATE_COMPANION = gql`
  mutation CreateCompanion($createCompanionInput: CreateCompanionInput!) {
    createCompanion(createCompanionInput: $createCompanionInput) {
      ...CompanionFragment
    }
  }
  ${COMPANION_FRAGMENT}
`;
