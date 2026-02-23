"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialSwiper() {

    const testimonials = [
        {
            image: "/assets/images/1.webp",
            quote: "The legal industry is evolving rapidly, and AI is essential to keep pace with growing complexity. :Harvey: has transformed how we work—enabling us to navigate challenges with precision, tackle intricate legal issues, and focus on delivering strategic value.",
            name: "Dr. Claudia Junker",
            role: "General Counsel",
            company: "Deutsche Telekom AG",
            link: "#",
        },
        {
            image: "/assets/images/2.webp",
            quote: "What we have seen at Reed Smith with Harvey is by far the most successful firm technology adoption story I have ever been a part of.",
            name: "Rich Robbins",
            role: "Director of Applied Artificial Intelligence",
            company: "Reed Smith",
            link: "#",
        },
        {
            image: "/assets/images/3.webp",
            quote: "Harvey: has become part of our routine. Having a partner like :Harvey: at this stage is a real game-changer.",
            name: "Marie-Cécile Martin",
            role: "Head of Legal Operations",
            company: "Syngenta Group",
            link: "#",
        },
    ];

    return (
        <section className="bg-[#f2f1f0] pt-40 pb-20 px-7 lg:px-9">

            <div className="max-w-342.5 mx-auto relative">

                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    loop={true}

                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}

                    pagination={{
                        el: ".testimonial-progress",
                        type: "progressbar",
                    }}

                    speed={800}
                    className="testimonial-swiper pb-16"
                >

                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>

                            <div className="grid md:grid-cols-10 gap-12 items-center">

                                {/* image */}
                                <div className="relative col-span-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="aspect-square w-full rounded-lg object-cover"
                                    />
                                </div>

                                {/* content */}
                                <div className="col-span-6 flex justify-center flex-col">

                                    <div className="max-w-168.75 w-full mx-auto space-y-10">
                                        <blockquote className="text-2xl md:text-[40px] harvey font-normal -tracking-[.01em] leading-[1.05] text-[#0f0e0d]">
                                            <span className="-ml-5">“</span>{item.quote}”
                                        </blockquote>

                                        <div>
                                            <p className="font-medium text-xl text-[#0f0e0d] harvey-small">
                                                {item.name}
                                            </p>

                                            <p className="text-base text-[#33312c] harvey-small leading-[1.3] font-normal">
                                                {item.role}
                                                <br />
                                                {item.company}
                                            </p>
                                        </div>

                                        <Link
                                            href={item.link}
                                            className="inline-flex items-center gap-2 font-medium text-[#0f0e0d] harvey-small hover:text-[#1a1a1a] transition-colors duration-300 ease-out"
                                        >
                                            Customer Story →
                                        </Link>
                                    </div>

                                </div>

                            </div>

                        </SwiperSlide>
                    ))}

                </Swiper>

                {/* Progress bar at bottom */}
                <div className="testimonial-progress absolute bottom-0 left-0 w-full h-[2px] bg-[#d6d3cd]" />

            </div>


            {/* animated progress styling */}
            <style jsx global>{`
                .testimonial-progress .swiper-pagination-progressbar-fill {
                    background: #1a1a1a;
                    transition: transform 6000ms linear !important;
                }
            `}</style>

        </section>
    );
}