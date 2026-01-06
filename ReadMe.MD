# module/auth - V8 module

This module is a small helper you can drop into workflows that need to attach a token to outbound requests. It keeps the calling code tidy and consistent without pulling in extra dependencies.

It runs inside the hgi-v8 environment and pairs well with other modules in this repo. Learn more at https://instago.ai.

## Technical reference

Exports
- `bearer(key)` -> `{ Authorization: 'Bearer <key>' }`

Usage
- `bearer` returns an object you can merge into request headers.

Configuration
- No configuration or env keys are required.

Examples
```js
const { bearer } = require('auth@latest');

const headers = Object.assign(
  { 'Content-Type': 'application/json' },
  bearer(env.API_TOKEN)
);
```
