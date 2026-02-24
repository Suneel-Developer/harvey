import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const stats = [
    {
        value: '10+',
        description:
            'hours saved per week per attorney on document analysis, redline review, legal research, and drafting at Cole-Frieman & Mallon',
    },
    {
        value: '96%',
        description:
            'adoption at Repsol with 4–6 hours saved per lawyer weekly on drafting, summaries, and legal translations',
    },
    {
        value: '90%',
        description: 'efficiency boost in document reviews at B. Cremades & Asociados',
    },
]

const ProvenResultsWithAssistant = () => {
    return (
        <section className="px-7 lg:px-9 bg-[#f2f1f0] text-[#0f0e0d] pt-28 sm:pt-32 pb-14 sm:pb-16">
            <div className="max-w-342.5 mx-auto w-full">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-28 lg:gap-5'>
                    {/* Left: heading */}
                    <h2 className="text-[28px] sm:text-[32px] leading-8 sm:leading-10 font-medium text-[#0F0E0D] harvey-small">
                        Proven results with Assistant
                    </h2>

                    {/* Right: stats */}
                    <div className="flex flex-col">
                        {stats.map((stat, index) => (
                            <div key={index}>
                                {/* Top divider */}
                                <div className="border-t md:border-t-2 border-[#cccac6]" />
                                <div className="py-7 lg:py-8 lg:mb-8">
                                    <p className="text-[48px] sm:text-[72px] leading-none font-normal text-[#0F0E0D] mb-3.5 sm:mb-2 harvey">
                                        {stat.value}
                                    </p>
                                    <p className="text-[20px] harvey-small leading-6.5 text-[#33312c] mb-3.5 sm:mb-4">
                                        {stat.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-5 mt-8'>
                    <Image src='/assets/images/claudia-junker.webp' alt='claudia-junker' width={1440} height={400} className='w-full rounded-lg shadow' />
                    <div className='space-y-10'>
                        <p className='text-[28px] sm:text-[32px] leading-[1.05] harvey-small font-normal tracking-[-.01em]'>"Harvey has transformed how we work—enabling us to navigate challenges with precision, tackle intricate legal issues, and focus on delivering strategic value."</p>
                        <div className="flex flex-col harvey-small">
                            <p className="text-[20px] leading-6.5 text-[#0F0E0D] font-medium">Dr. Claudia Junker</p>
                            <p className="text-[16px] leading-5 text-[#0F0E0D] font-normal">General Counsel</p>
                            <p className="text-[16px] leading-5 text-[#0F0E0D] font-normal">Deutsche Telekom AG</p>
                        </div>
                        <Link href='/' className='text-[#0F0E0D] text-[20px] leading-6.5 harvey-small font-medium'>Customer Story →</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProvenResultsWithAssistant