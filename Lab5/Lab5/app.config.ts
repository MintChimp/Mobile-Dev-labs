import 'dotenv/config';

export default {
  expo: {
    name: "Lab5",
    slug: "Lab-5",
    version: "1.0.0",
    sdkVersion: "53.0.0",
    extra: {
      EXPO_PUBLIC_SUPABASE_URL: process.env.EXPO_PUBLIC_SUPABASE_URL,
      EXPO_PUBLIC_SUPABASE_KEY: process.env.EXPO_PUBLIC_SUPABASE_KEY,
    },
  },
};
