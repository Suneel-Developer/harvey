import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='py-14 lg:py-18 px-7 lg:px-9 bg-[#0f0e0d] max-w-432 w-full mx-auto'>
            <section className='border-b border-[#33312c] flex lg:items-center justify-between flex-col lg:flex-row pb-14 lg:pb-18'>
                <h3 className='text-2xl lg:text-[32px] text-white text-balance mb-7 lg:mb-1 harvey'>
                    Unlock Professional Class AI for Your Firm
                </h3>

                <Link href="#" className="text-[#0f0e0d] text-base w-fit font-medium px-5 h-12 flex justify-center items-center harvey-small bg-[#fafaf9] rounded-sm transition-all duration-300 hover:bg-[#8f8b85]">
                    Request a Demo
                </Link>
            </section>

            <div className='mt-14 lg:mt-18 flex justify-between flex-col lg:flex-row'>
                <div className='flex flex-col justify-between'>
                    <Image src="/assets/images/h-logo.svg" alt='harvey-logo' width={45} height={32} />

                    <p className='text-[#33312c] text-balance text-sm font-normal leading-[1.3] harvey-small max-w-56 hidden lg:block'>
                        Copyright © 2026 Harvey AI Corporation. All rights reserved.
                    </p>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 ml-auto gap-7 lg:gap-4 max-w-236.25 w-full my-14 lg:my-0'>
                    <div className='flex flex-col gap-y-3.5'>
                        <h3 className='text-[#8f8b85] font-medium text-sm harvey-small'>Platform</h3>

                        <ul className='flex flex-col gap-3.5'>
                            {[
                                { name: "Assistant", href: "/assistant" },
                                { name: "Vault", href: "/vault" },
                                { name: "Knowledge", href: "/knowledge" },
                                { name: "Workflows", href: "/workflows" },
                                { name: "Ecosystem", href: "/ecosystem" },
                                { name: "Partnerships", href: "/partnerships" }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className='group inline-flex items-center text-[#fafaf9] leading-[1.3] font-medium text-sm whitespace-nowrap harvey-small transition-all duration-300 ease-in-out hover:text-[#fafaf9]'
                                    >
                                        {item.name}

                                        <span className='relative ml-1 hidden w-3 md:inline-block'>
                                            <span className='absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100'>
                                                →
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex flex-col gap-y-3.5'>
                        <h3 className='text-[#8f8b85] font-medium text-sm harvey-small'>Solutions</h3>

                        <ul className='flex flex-col gap-3.5'>
                            {[
                                { name: "Innovation", href: "#" },
                                { name: "In-House", href: "#" },
                                { name: "Transactional", href: "#" },
                                { name: "Litigation", href: "#" },
                                { name: "Mid-Sized Firms", href: "#" },
                                { name: "Collaboration", href: "#" }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className='group inline-flex items-center text-[#fafaf9] leading-[1.3] font-medium text-sm whitespace-nowrap harvey-small transition-all duration-300 ease-in-out hover:text-[#fafaf9]'
                                    >
                                        {item.name}

                                        <span className='relative ml-1 hidden w-3 md:inline-block'>
                                            <span className='absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100'>
                                                →
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex flex-col gap-y-3.5'>
                        <h3 className='text-[#8f8b85] font-medium text-sm harvey-small'>About</h3>

                        <ul className='flex flex-col gap-3.5'>
                            {[
                                { name: "Customers", href: "#" },
                                { name: "Security", href: "#" },
                                { name: "Company", href: "#" },
                                { name: "Newsroom", href: "#" },
                                { name: "Careers", href: "#" },
                                { name: "Law Schools", href: "#" }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className='group inline-flex items-center text-[#fafaf9] leading-[1.3] font-medium text-sm whitespace-nowrap harvey-small transition-all duration-300 ease-in-out hover:text-[#fafaf9]'
                                    >
                                        {item.name}

                                        <span className='relative ml-1 hidden w-3 md:inline-block'>
                                            <span className='absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100'>
                                                →
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex flex-col gap-y-3.5'>
                        <h3 className='text-[#8f8b85] font-medium text-sm harvey-small'>Resources</h3>

                        <ul className='flex flex-col gap-3.5'>
                            {[
                                { name: "Blog", href: "#" },
                                { name: "Videos", href: "#" },
                                { name: "Guides", href: "#" },
                                { name: "Legal", href: "#" },
                                { name: "Privacy Policy", href: "#" },
                                { name: "Press Kit", href: "#" },
                                { name: "Your Privacy Choices", href: "#", icon: "/assets/images/privacy-icon.svg" }
                            ].map((item, index, array) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className='group inline-flex items-center text-[#fafaf9] leading-[1.3] font-medium text-sm whitespace-nowrap harvey-small transition-all duration-300 ease-in-out'
                                    >
                                        {index === array.length - 1 && (
                                            <img
                                                src={item.icon}
                                                alt=""
                                                className='mr-1 object-contain'
                                            />
                                        )}

                                        {item.name}

                                        <span className='relative ml-1 hidden w-3 md:inline-block'>
                                            <span className='absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100'>
                                                →
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex flex-col gap-y-3.5'>
                        <h3 className='text-[#8f8b85] font-medium text-sm harvey-small'>Follow</h3>

                        <ul className='flex flex-col gap-3.5'>
                            {[
                                { name: "X", href: "#" },
                                { name: "LinkedIn", href: "#" },
                                { name: "YouTube", href: "#" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className='group inline-flex items-center text-[#fafaf9] leading-[1.3] font-medium text-sm whitespace-nowrap harvey-small transition-all duration-300 ease-in-out hover:text-[#fafaf9]'
                                    >
                                        {item.name}

                                        <span className='relative ml-1 hidden w-3 md:inline-block'>
                                            <span className='absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100'>
                                                →
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <p className='text-[#33312c] text-balance text-sm font-normal leading-[1.3] harvey-small max-w-56 block lg:hidden'>
                    Copyright © 2026 Harvey AI Corporation. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer