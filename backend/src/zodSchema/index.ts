import {z} from 'zod';

const User = z.object({
    email: z.string().email(), 
    name: z.string(),
    password: z.string(),
});

const userSignIn = z.object({
    email: z.string().email(),
    password: z.string(),
})

export {User, userSignIn};