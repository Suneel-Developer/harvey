"use client";

import { useEffect, useRef, useState } from "react";

export default function AutoCenterTicker() {

    const items = [
        "Due Diligence",
        "Fund Formation",
        "Contract Analysis",
        "Complex Workflows",
        "Document Storage",
        "Legal Research",
        "Deal Management",
    ];

    const ITEM_HEIGHT = 67;
    const VISIBLE_COUNT = 7; // 3 top + 1 center + 3 bottom
    const CENTER_OFFSET = Math.floor(VISIBLE_COUNT / 2);

    const INTERVAL = 5000;

    const [index, setIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const sectionRef = useRef(null);

    // Duplicate items for infinite loop illusion
    const loopItems = [
        ...items.slice(-CENTER_OFFSET),
        ...items,
        ...items.slice(0, CENTER_OFFSET)
    ];

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.5 }
        );

        if (sectionRef.current)
            observer.observe(sectionRef.current);

        return () => observer.disconnect();

    }, []);

    useEffect(() => {

        if (!isVisible) return;

        const interval = setInterval(() => {

            setIndex((prev) =>
                prev === items.length - 1 ? 0 : prev + 1
            );

        }, INTERVAL);

        return () => clearInterval(interval);

    }, [isVisible]);

    return (
        <section ref={sectionRef} className="pb-50 px-7 lg:px-9">

            <div className="max-w-342.5 mx-auto grid grid-cols-10 items-center">

                {/* left */}
                <div className="col-span-2">
                    <p className="text-xl text-balance harvey-small font-medium leading-[1.3] text-[#0f0e0d]">
                        The top legal teams<br />
                        use Harvey for
                    </p>
                </div>

                {/* ticker */}
                <div
                    className="overflow-hidden flex justify-center col-span-6 relative"
                    style={{
                        height: ITEM_HEIGHT * VISIBLE_COUNT,
                        transform: "translateY(0px)", transition: "none", maskImage: "linear-gradient(transparent 0%, white 7%, white 93%, transparent 100%)"
                    }}
                >

                    <div
                        className="transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateY(-${(index) * ITEM_HEIGHT}px)`
                        }}
                    >

                        {loopItems.map((item, i) => {

                            const activeIndex = index + CENTER_OFFSET;

                            const isActive = i === activeIndex;
                            const distance = Math.abs(i - activeIndex);

                            return (
                                <div
                                    key={i}
                                    style={{ height: ITEM_HEIGHT }}
                                    className={`
                                        flex items-center justify-center
                                        transition-all duration-500
                                        ${isActive
                                            ? "text-[#0f0e0d] text-[64px] harvey text-balance font-medium whitespace-nowrap"
                                            : distance <= 3
                                                ? "text-[64px] harvey text-[#8f8a85]"
                                                : "text-[64px] harvey text-[#8f8a85]"}
                                    `}
                                >
                                    {item}
                                </div>
                            );
                        })}

                    </div>

                </div>

                {/* right */}
                <div className="flex justify-end col-span-2">
                    <button className="border border-black px-3 h-8 cursor-pointer harvey-small rounded-sm text-[#0f0e0d] text-sm hover:bg-black hover:text-white transition-colors duration-300 ease-out">
                        Explore Platform
                    </button>
                </div>

            </div>

        </section>
    );
}