import { NextAuthConfig } from 'next-auth'

export const authConfig = {
  pages: {
    signIn: '/auth/login',
    newUser: '/auth/new-account'
  },
  providers: []
} satisfies NextAuthConfig
