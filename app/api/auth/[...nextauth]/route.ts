import { signInWithEmailAndPassword } from "firebase/auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { auth } from "../../../firebase";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {},
            async authorize(credentials, req) : Promise <any> {
                console.log('madiii')
                return await signInWithEmailAndPassword(auth, (credentials as any).email || '',(credentials as any).password || '')
                .then(
                    userCredential =>{
                        if (userCredential.user){
                            return userCredential.user
                        }
                        return null;
                    }
                )
                .catch(
                    error =>(console.log(error))
                )
            }
        })
    ],
    pages: {
        signIn: '/auth/signin'
    },
    debug: process.env.NODE_ENV === 'development',
    session: {
        // Set to jwt in order to CredentialsProvider works properly
        strategy: 'jwt'
      }
});
export const dynamic = "force-static";

export { handler as GET, handler as POST }

