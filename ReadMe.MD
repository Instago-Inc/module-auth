# module/auth - V8 module

This module is a tiny helper for adding bearer tokens to HTTP headers so you can keep workflow code clean and consistent. It is intentionally minimal and focused on one job.

It is designed for the hgi-v8 runtime and pairs well with the other modules in this repository. Learn more at https://instago.ai.

## Technical reference

Exports
- `bearer(key)` -> `{ Authorization: 'Bearer <key>' }`

Usage
- Call `bearer` with a token string and merge the returned object into your request headers.

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
