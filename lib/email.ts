// lib/utils.tsx 

"use server";

import z from "zod";
import { formSchema } from "./schema";
import { Resend } from 'resend';
// import { EmailTemplate } from "@/components/ui/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
    // Server-side re-validation (never trust the client)
    const parsed = formSchema.safeParse(emailFormData);
    if (!parsed.success) {
        return { ok: false, error: "Invalid input" };
    }

    try {
        const { data, error } = await resend.emails.send({
        from: `AwesomePortfolio <${process.env.RESEND_FROM_EMAIL}>`,
        to: ['jkilonzo2023@gmail.com'], //emailFormData.email,
        replyTo: emailFormData.email,
        subject: `New contact from ${emailFormData.name}`, //'Welcome',
        //react: EmailTemplate({ firstName: emailFormData.name }),
        html: `
           <h2>New contact from ${emailFormData.name}</h2>
           <p><strong>Email:</strong> ${emailFormData.email}</p>
           <p><strong>Subject:</strong> ${emailFormData.subject}</p>
           <p><strong>Message:</strong> ${emailFormData.message}</p>
           `,
        });

        if (error) {
            return { ok: false, error: error.message ?? "Send failed" };
        }

        return { ok: true, id: data?.id };

        } catch (err) {
            return { ok: false, error: err instanceof Error ? err.message : "Unknown error" };
        }



}












