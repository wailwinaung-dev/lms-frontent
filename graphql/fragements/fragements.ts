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
