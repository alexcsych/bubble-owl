const BETTER_AUTH_URL = process.env.BETTER_AUTH_URL;

import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: BETTER_AUTH_URL,
});
