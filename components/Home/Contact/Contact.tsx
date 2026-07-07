// components/Home/Contact/Contact.tsx

"use client";
import React from 'react';
import SectionHeading from '@/components/Helper/SectionHeading';
import { contactInfo, socialLinks } from '@/data';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { formSchema } from '@/lib/schema';
import { send } from '@/lib/email';

import { toast } from "sonner";

const Contact = () => {

    const form = useForm<z.infer<typeof formSchema>>(
        {
            resolver: zodResolver(formSchema),
            mode: "onTouched",
            defaultValues: {
                name: "",
                email: "",
                subject: "",
                message: "",
            }
        }
    );

    const { errors } = form.formState;

    async function onSubmit(values: z.infer<typeof formSchema>){
        // Do sth with the form values 
        const result = await send(values);

        if (result.ok) {
            toast.success("Message sent! Thanks for reaching out.");
            form.reset();
        } else {
            toast.error(`Failed to send: ${result.error}`);
        }
    }

  return (
    <div id="contact" className="py-16 bg-gray-100 dark:bg-gray-950">
      <SectionHeading 
        title_1='Get In'
        title_2='Touch'
        description='Have a project in mind or just want to say hi? I&apos;d love to hear from you'
      />
      <div className="w-[80%] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
                <div 
                    data-aos="zoom-out" 
                    data-aos-delay="300"
                    data-os-anchor-placement="top-center" 
                    className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-4">
                        Let&apos;s talk
                    </h3>
                    <p className="text-muted-foreground">
                        I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                </div>
                <div className="space-y-4 h-5">
                    {" "}
                </div>
                <div 
                    data-aos="zoom-in" 
                    data-aos-delay="300"
                    data-os-anchor-placement="top-center" 
                    className="space-y-4">
                    {
                        contactInfo.flatMap((item) => {
                            return <a 
                            href={item.href} 
                            key={item.label} 
                            target="_blank"
                            className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 shadow-md rounded-xl hover:scale-105 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                                    <item.icon 
                                        className="w-5 h-5 text-blue-500 dark:text-white"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        {item.label}
                                    </p>
                                    <p className="font-medium font-mono">
                                        {item.value}
                                    </p>
                                </div>
                            </a>
                        })
                    }
                </div>
                {/* Social Icons */}
                <div className="space-y-4 h-5">
                    {" "}
                </div>
                <div>
                    <h4 className="text-lg font-medium mb-4 ">
                        Follow me 
                    </h4>
                    <div className="flex gap-3">
                        {
                            socialLinks.map((link) => {
                                return <a 
                                href={link.href} 
                                key={link.label}
                                target='_blank'
                                className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center text-muted-foreground hover:text-blue-500 transition-colors"
                                >
                                    <link.icon className="w-5 h-5" />
                                </a>
                            })
                        }
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div
                data-aos="zoom-out-up" 
                data-aos-delay="300"
                data-os-anchor-placement="top-center" 
                >
                <form 
                    onSubmit={form.handleSubmit(onSubmit, (errors) => console.log(
                        "Validation errors:", errors
                    ) )}
                    action="" 
                    className="bg-white dark:bg-gray-800 rounded-2xl p-8 space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">
                                Name
                            </label>
                            <Input 
                                id="name"
                                {...form.register("name")}
                                placeholder="John Smith" 
                                className="bg-gray-100"
                            />
                            {
                            errors.name && 
                                <p className="text-sm text-red-500">
                                    {errors.name.message}
                                </p>
                            }
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                                Email
                            </label>
                            <Input 
                                id="email"
                                {...form.register("email")}
                                placeholder="john@example.com" 
                                className="bg-gray-100"
                            />
                            {
                            errors.email && 
                                <p className="text-sm text-red-500">
                                    {errors.email.message}
                                </p>
                            }
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                            Subject
                        </label>
                        <Input 
                            id="subject"
                            {...form.register("subject")}
                            placeholder="Project Inquiry" 
                            className="bg-gray-100"
                        />
                        {
                        errors.subject && 
                            <p className="text-sm text-red-500">
                                {errors.subject.message}
                            </p>
                        }
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                            Message
                        </label>
                        <Textarea 
                            id="message"
                            {...form.register("message")}
                            placeholder="Tell me about your project" 
                            rows={5}
                            className="bg-gray-100 h-40"
                        />
                        {
                        errors.message && 
                        <p className="text-sm text-red-500">
                            {errors.message.message}
                        </p>
                        }
                    </div>
                    <Button 
                        type="submit"
                        size={"lg"}
                        className="w-full cursor-pointer"
                    >
                        <Send 
                            className="w-4 h-4 mr-2"                            
                        />
                        Send Message

                    </Button>
                </form>
            </div>




        </div>
      </div>
    </div>
  )
}

export default Contact















