import { signInWithEmailAndPassword } from "firebase/auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { auth } from "../../../firebase";
import { getUser } from "@/app/dbengine";
import { userAgent } from "next/server";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {},
            async authorize(credentials, req): Promise<any> {
                let userID = ''
                await signInWithEmailAndPassword(auth, (credentials as any).email || '', (credentials as any).password || '')
                    .then(
                        (userCredential) => {
                            if (userCredential.user) {
                                userID = userCredential.user.uid
                            }
                            return null;
                        }
                    )
                    .catch(
                        error => (console.log(error))
                    )
                let signedInUser = await getUser(userID).then((user)=>{
                    return user
                })
                return signedInUser

            }
        })
    ],
    pages: {
        signIn: '/auth/signin'
    },
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    callbacks: {
        async jwt({token, user }) {
            return {...user, ...token};
        },

        async session({ session, token, user }) {
            session.user = { ...token as {}  }
            return session;
        },
    }

});

export { handler as GET, handler as POST }

