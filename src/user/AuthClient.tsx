// Better Auth client for SolidJS — provides useSession(), signIn, signOut, etc.
// See https://www.better-auth.com/docs/integrations/solid for SolidJS-specific API.
import { createAuthClient } from 'better-auth/solid';
import env from '../lib/env.tsx';

// SERVER_URL must be set in .env as VITE_SERVER_URL
// See nkzw-tech/server-template for the matching server implementation
export default createAuthClient({
  baseURL: env('SERVER_URL'),
});
