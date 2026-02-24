import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section className="pt-20 px-7 lg:px-9 bg-[#fafaf9]">
            <div className="max-w-342.5 mx-auto w-full">
                <div className='mb-7 sm:mb-9 text-[20px] leading-6.5 font-medium text-[#0F0E0D] harvey-small'>
                    <Link href='/' className='text-[#706D66]'>Platform Overview</Link><span>&nbsp;/&nbsp;</span>Assistant
                </div>

                <h1 className='text-[48px] lg:text-[128px] xl:text-[144px] leading-[1.05] harvey'>An Intelligent <br /> Legal Coworker</h1>

                <div className='mt-14 sm:mt-18'>
                    <Image src='/assets/images/assistant.webp' alt='assistant' width={1440} height={400} className='w-full rounded-lg shadow' />
                </div>
            </div>
        </section>
    )
}

export default Hero
