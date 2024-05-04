import { api } from 'lib/api'
import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      const { email } = user

      try {
        const userAuthentication = await api.post('/authenticate', {
          email,
        })

        // TODO: check user exist and set permissions cookies

        if (userAuthentication) {
          return true
        } else {
          return '/register'
        }
      } catch (err) {
        return true
      }
    },
  },
}

export default NextAuth(authOptions)
