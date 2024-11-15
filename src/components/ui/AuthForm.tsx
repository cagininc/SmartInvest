
"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    // FormControl,
    // FormDescription,
    // FormField,
    // FormItem,
    // FormLabel,
    // FormMessage,
} from "@/components/ui/form"
import CustomInput from './CustomInput'
import { authFormSchema } from '@/lib/utils'
import { Loader2 } from 'lucide-react'







const AuthForm = ({ type }: { type: string }) => {
    const [user, setUser] = useState(null)

    //loading state 
    const [isLoading, setIsLoading] = useState(false)



    // 1. Define your form.
    const form = useForm<z.infer<typeof authFormSchema>>({
        resolver: zodResolver(authFormSchema),
        defaultValues: {
            email: "",
            password: ''
        },
    })
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof authFormSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        setIsLoading(true)
        console.log(values)
        setIsLoading(false)
    }
    return (
        <section className=' auth-form'>
            <header className='flex flex-col gap-5 md:gap-8'>

                <Link href="/" className="cursor-pointer flex items-center gap-1  ">
                    <Image
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="SmartInvest logo"
                    />
                    <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">SmartInvest</h1>
                </Link>
                {/* <h2 className='text-15 font medium text-gray-700 font-ibm-plex-serif -mt-5'> Your Financial Dashboard for Smarter Investments</h2> */}



                <div className='flex flex-col gap-1 md:gap-3'>

                    <h1 className='text-20 lg:text-36 font-semibold  text-gray-900'>
                        {user ? 'Link Account'
                            : type === 'sign-in' ? 'Sign In' : 'Sign Up'}

                        <p className='text-16 font-normal text-gray-600'>
                            {user ? 'Link your account to get started' : 'Please enter your details'}
                        </p>
                    </h1>
                </div>


            </header>
            {user ? (
                <div className=' flex flex-col gap-4'>

                    {/* link to our bank account */}
                </div>
            ) : (<Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <CustomInput control={form.control} name='email' label="Email" placeholder='Enter your email'
                    />
                    <CustomInput control={form.control} name='password' label="Password" placeholder='Enter your password'
                    />

                    {/* Load aniamtion added (disabled option added when loading state)*/}
                    <Button className='form-btn' type="submit" disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <Loader2 size={20} className='animate-spin' /> &nbsp;
                                Loading...
                            </>
                        ) : type === 'sign-in' ?
                            'Sign In' : 'Sign Up'
                        }
                    </Button>
                </form>
            </Form>)}
            <footer className='flex justify-center gap-1'>
                <p>{type == 'sign-in' ?
                    "Don't have an account?"
                    : "Already have an account?"

                }</p>
                <Link className='text-blue-900' href={type === 'sign-in' ? '/sign-up' : '/sign-in'}>

                    {type === 'sign-in' ? 'Sign up' : 'Sign in '}

                </Link>
            </footer>
        </section>

    )
}

export default AuthForm