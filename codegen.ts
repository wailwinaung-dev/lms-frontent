import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3000/graphql',
  generates: {
    'generated/types.ts': {
      plugins: ['typescript', 'typescript-document-nodes']
    },
    './graphql.schema.json': {
      plugins: ['introspection']
    }
  }
};

export default config;
