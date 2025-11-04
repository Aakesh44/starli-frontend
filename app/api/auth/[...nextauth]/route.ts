import api from "@/lib/api";
import NextAuth, {NextAuthOptions, User} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import { google, login } from "@/lib/api/auth";

export const authOptions: NextAuthOptions = ({
    providers: [

        // 🟢 google OAtuth Provider
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),

        // 🟣 Credentials (Email + Password)

        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "m@example.com"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize(credentials: Record<'email' | 'password', string> | undefined) {
                try {

                    if(!credentials?.email || !credentials?.password) return null;

                    const {user, token} = await login(credentials?.email, credentials?.password);
                    
                    return {...user, accessToken: token};

                } catch (error) {
                    console.log('Authorization error', error);
                    return null
                }
            }
        })
    ],

    pages: {
        signIn: '/login',
    },
    callbacks: {
        async jwt ({token, user, account}) {
            
            if(user) {
                token.user = user;
                token.accessToken = user.accessToken;
            }

            if(account?.provider === "google"){
                
                if(!account.id_token) return token;
                const {user, token: userToken} = await google(account?.id_token);
                
                token.user = user as User;
                token.accessToken = userToken as string;
            }

            return token
        },
        async session ({session, token}){
            session.user = token.user as any;
            session.accessToken = token.accessToken as any;
            return session
        }   
    },
    secret: process.env.NEXTAUTH_SECRET,

});

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };