import NextAuth, { AuthOptions } from "next-auth"
import AzureAd from "next-auth/providers/azure-ad"

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
    AzureAd({
        clientId: process.env.AZURE_ENTRA_CLIENT_ID,
        clientSecret: process.env.AZURE_ENTRA_CLIENT_SECRET,
        tenantId: process.env.AZURE_ENTRA_TENANT_ID,
        authorization: { params: { scope: "openid profile user.Read email" } }
    })
  ],
  callbacks: {
    async jwt({ token, account }) {
      // IMPORTANT: Persist the access_token to the token right after sign in
      if (account) {
        token.idToken = account.id_token;
      }
      return token;
    },
  },
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }