import {DefaultSession, DefaultUser} from "next-auth";

declare module 'next-auth' {
    interface Session{
        user: {
            id: unknown
        } & DefaultSession['user']
    }

    interface User extends DefaultUser{
        id: unknown
    }
}