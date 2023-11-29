"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion'

const CV = 'https://doc-08-ak-docstext.googleusercontent.com/export/lt71o51cu3tgddnqk2hbvee1ho/6cbqs5pb10rf00lc1kl3u9cicg/1701292250000/105049996907873855783/105049996907873855783/1WMfhufxj-McCfdhJgQ9aZVt2Zh19AjpA?format=pdf&id=1WMfhufxj-McCfdhJgQ9aZVt2Zh19AjpA&token=AC4w5VhJjlzDSNrcGlVOgkFHVFCGkhDxcA:1701292244491&ouid=105049996907873855783&includes_info_params=true&usp=drive_web&cros_files=false&inspectorResult=%7B%22pc%22:1,%22lplc%22:63%7D&dat=AOBvIb1z1ROT8sex6GHOxjwCGZepRbW-WdqNA1_HXmH1UucTCtEwW6b_-VdfUi9ijkudK5ZPHMF3EZETTdedvE9191G8CTYoKpeBo1dk4Y7HiHS0f9SUSAiPlmRt8mdXJ5mLwNDJIeobOKCkoR2_aknyH3rg-XiN04fDL9-gODNoP3hWbq8-2qr6Db74AbgccxUSj-vKD0s4tWpuAUOOaAu45PeXahZw7GOPgGb-5j1l3a2y2dW-Xmr94P2eaaCRL6bqecbdWqghtg4Y88S_emex_vTViOdzDdBAdF_2MM3_GGNSstvlz1wn4htZICqebvzVilRJSMfTGXVoMb6ck2vEJpt19Mp8EWr9Fff4jsGJ20OpxTo0HwypD3aLR-d0CCq7xTv_lzbeTUgrxlWfbB8caD4zOAGIYw3LlEZ3a13aM817oAU0sXP3_sLJKFq6ow_1MOMAjhrEs0gQF6j1xY0EVgX_T8et3kIFNbSrVO7pnFF0uGa4PPW4oZFSia95uFOnG6bFBjOPnVUet_D8gKKvefA1p8zh2ruvqSklqA_ZlqRtwWZGIZEPnSUqzfXImZ5W_ChLQ-dPXNTRyH0alnUqUtmC6afYFvRjY6UHYIA__kdNYfQ3PLS4MaHJBS5lx3b8Q4lCtxNHO-S_PuxrXjnIeCmLrwTNeqi0wEqPVpcC8LhXww3Xt05TcnRGQkWQugtJXt2Phgr1KPqNs2DCeUzRonvzgr4S1w_PgJLFksxqCgMevcxOroQ92J6zHI-aNHdpP3nz2-R95KWyTnNDT-0miUo4UvozpW-BuO6jsV5MMTfq2bcmEYhh3pWXxc6auHCpuD8dlOZJbhCEH1uvEeVCC--rYaOnri388I3zy1Q4awCm2zh_RpLLt3sbdgEMN7a_wLmwLgRpo7XNmDajLEzZesmljlYxU5FbAAUbKWP471wFgG50YRH4oaAmhrlV58P-U0O8pjSvV8D6rLzFDGuqgK4qcB0bBg'

export const HeroSection = () => {
    return (
        <section>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className='grid grid-cols-1 lg:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-yellow-600 to-red-600'>
                            Hi, I&apos;m Robert!
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Software Developer',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Project Leader',
                                1000,
                                'Game Developer',
                                1000,
                                'Eternal Student',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-lg mb-6 lg:text-xl'>
                        Software developer with over 4 years in the field, seeking opportunities to broaden my skill set, tackle fresh challenges,
                        and contribute to the creation of exceptional software.
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-2 bg-gradient-to-br from-orange-600 via-yellow-600 to-red-600 hover:bg-slate-200 text-white'>
                            <Link href={'/#contact'}>Hire Me</Link>
                        </button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-orange-600 via-yellow-600 to-red-600 hover:bg-slate-800 text-white'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                                <Link href={`${CV}`}>Download CV</Link>
                            </span>
                        </button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image
                            src="/images/3d_emoticon.png"
                            alt='hero image'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={280}
                            height={300}
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
