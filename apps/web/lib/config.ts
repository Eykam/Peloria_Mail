import { z } from 'zod';

const configSchema = z.object({
  appUrl: z.string(),
  googleTrackingId: z.string(),
  supabase: z.object({
    url: z.string(),
    anonKey: z.string(),
  }),
});

export const config = configSchema.parse({
  appUrl:
    process.env.ENV_TYPE === 'production'
      ? process.env.NEXT_PUBLIC_VERCEL_URL
      : 'http://localhost:3000',
  googleTrackingId: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
});
