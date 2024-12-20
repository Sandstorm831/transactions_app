import { z } from 'zod';

const User = z.object({
    email: z.string().email(), 
    name: z.string(),
    password: z.string(),
});

const userSignIn = z.object({
    email: z.string().email(),
    password: z.string(),
})

const userName = z.string();
const userPassword = z.string();

const partialUser = User.partial(); 

const transferSchema = z.object({
    to: z.number(),
    amount: z.number(),
})

export {User, userSignIn, userName, userPassword, partialUser, transferSchema};