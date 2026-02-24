// Type-safe environment variable accessor using @nkzw/define-env.
// Add new env var names to the array and map them from import.meta.env here.
// Vite only exposes variables prefixed with VITE_ to the client bundle.
import defineEnv from '@nkzw/define-env';

export default defineEnv(['SERVER_URL'], {
  SERVER_URL: import.meta.env.VITE_SERVER_URL,
});
