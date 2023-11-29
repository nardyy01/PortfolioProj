'use client'
import React, { useState } from 'react'
import GitHubIcon from '/public/github-icon.svg'
import LinkedinIcon from '/public/LinkedIn_icon.svg'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {

    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = '/api/send';

        const options = {
            method: 'POST',
            body: JSONdata
        }

        const response = await fetch(endpoint, options)

        if (response.status === 200) {
            console.log('Message Sent.')
            setEmailSubmitted(true);
        }
    }

    return (
        <section name='contact' className='grid md:grid-cols-2 md:my-12 py-24 gap-4'>
            <div>
                <h5 className='text-xl font-bold text-white my-2'>
                    Let&aposs Connect
                </h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    Seeking a proactive developer enthusiastic about acquiring new skills, overcoming challenges, and contributing to software development and improvement.
                    Don&apost hesitate to reach out—I&aposm also available for casual chats or a friendly hello.
                    Wishing you a fantastic day, and thanks for stopping by!
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link href={'https://www.github.com/nardyy01'} target='_blank'>
                        <Image src={GitHubIcon} alt='Github Icon'></Image>
                    </Link>
                    <Link href={'https://www.linkedin.com/in/r-duffie'} target='_blank'>
                        <Image src={LinkedinIcon} alt='Linkedin Icon'></Image>
                    </Link>
                </div>
            </div>

            <div>
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label htmlFor="email" className='text-white block mb-2 font-medium'>Your Email</label>
                        <input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            name='email' type="email" id='email' required placeholder='email@gmail.com' />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="subject" className='text-white block mb-2 font-medium'>Subject</label>
                        <input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            name='subject' type="subject" id='subject' required placeholder='How is your day?' />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="message" className='text-white block mb-2 font-medium'>Message</label>
                        <textarea
                            name='message'
                            type='message'
                            id='message'
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder='Lets Chat!'
                        />
                    </div>
                    <button type='submit'
                        className='bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                        Send Message
                    </button>

                    {emailSubmitted && (
                        <p className='text-green-500' text-sm mt-2>
                            Email sent successfully
                        </p>
                    )}
                </form>
            </div>
        </section>
    )
}

export default EmailSection