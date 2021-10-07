import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import axios from 'axios'

const providers = [
  Providers.Credentials({
    name: 'Credentials',
    id: 'login',
    authorize: async (credentials) => {
      return {status: 'success', data: {
        ...credentials
      }}
    }
  }),
  Providers.Credentials({
    id: "sign-up",
    name: "Credentials",
    authorize: async (credentials) => {
      return {status: 'success', data: {
        ...credentials
      }}
    }
  })
]

const callbacks = {
  jwt: async (token, user) => {
    if (user) {
      token.jwt = user.data.token;
      token.user = user.data;
      token.accessToken = user.data.token;
    }
    return Promise.resolve(token);
  },
  session: async (session, token) => {
    session.jwt = token.jwt;
    session.accessToken = token.accessToken ? token.accessToken :
    session.user = token.user ? token.user : session.user
    return Promise.resolve(session);
  },
}

const options = {
  providers,
  callbacks,
}

const authFunction = (req, res) => NextAuth(req, res, options);

export default authFunction;