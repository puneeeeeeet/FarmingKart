import NextAuth from "next-auth"
import GoogleProvider from   "next-auth/providers/google"

const handler = NextAuth({
  providers:[
    GoogleProvider({
        clientId:process.env.GOOGLE_ID,
        clientSecret:process.env.GOOGLE_SECRET,
    })
  ],
  callbacks:{
    async signIn({user, account}){
      console.log("user",user);
      console.log("Account",account)
      return user;
    },
  },

})
export { handler as GET, handler as POST }