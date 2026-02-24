import { createAuthClient } from 'better-auth/solid';
import env from '../lib/env.tsx';

export default createAuthClient({
  baseURL: env('SERVER_URL'),
});
