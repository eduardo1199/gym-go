import z from 'zod'

const envSchema = z.object({
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  API_DATABASE_URL: z.string().url(),
  GOOGLE_MAPS_KEY: z.string(),
  NEXTAUTH_SECRET: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error('Invalid environment variable')

  throw new Error('Invalid environment variable')
}

export const env = envSchema.parse(process.env)
