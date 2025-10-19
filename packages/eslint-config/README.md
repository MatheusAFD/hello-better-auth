# `@repo/eslint-config`

Collection of shared ESLint configurations for the monorepo.

## Available Configs

### Base Config

```js
import baseConfig from '@repo/eslint-config/base'
```

### Next.js Config

```js
import nextConfig from '@repo/eslint-config/next-js'
```

### NestJS Config

```js
import nestConfig from '@repo/eslint-config/nest-js'
```

### React Internal Config

```js
import reactConfig from '@repo/eslint-config/react-internal'
```

## Usage in Apps

### Example for NestJS app (`apps/api/eslint.config.mjs`):

```js
// @ts-check
import nestConfig from '@repo/eslint-config/nest-js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  ...nestConfig,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  }
)
```

## Features

- TypeScript support with `typescript-eslint`
- Prettier integration
- NestJS specific rules (Node.js + Jest globals)
- Next.js specific rules
- React specific rules
