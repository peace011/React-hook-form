import { CodegenConfig } from '@graphql-codegen/cli';
import * as path from 'path';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://182.93.94.7:4003/graphql',
  documents: path.join(__dirname, '/**/*.graphql'),
  generates: {
    [path.join(__dirname, 'src/graphql/codegen.ts')]: {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
    [path.join(__dirname, './graphql.schema.json')]: {
      plugins: ['introspection'],
    },
  },
};

export default config;
