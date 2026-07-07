// lib/Home/schema.tsx 

import { z } from "zod";

export const formSchema = z.object(
    {
        name: z.string().min(2, "Name must be at least 2 characters").max(50),
        email: z.string().email("Please enter a valid email address"),
        subject: z.string().min(2, "Subject is too short").max(50),
        message: z.string().min(2, "Message is too short"),
    }
);




























