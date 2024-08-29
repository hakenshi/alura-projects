import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import {PrismaAdapter} from "@auth/prisma-adapter";
import db from "../../../../../prisma/db";
import {DefaultSession, DefaultUser, Session, User} from "next-auth";
import {OAuthUserConfig} from "@auth/core/providers";

export const options = {
    adapter: PrismaAdapter(db),
    providers: [
        GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID as string,
        clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
        CredentialsProvider<any>({
            credentials:{
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "Digite seu e-mail",
                },
                senha: {
                    label: "Senha",
                    type: "password",
                    placeholder: "Digite sua senha",
                }
            }
        })
    ],
    callbacks: {
        async session({ session, user }: {
            session: Session,
            user: User
        }): Promise<Session>{
            if(session?.user){
                session.user.id = user;
            }
            return session
        }
    }
}