'use client'
import { useState } from "react";

const cases = [
    {
        id: "regulatory",
        title: "Regulatory briefings",
        description: "Synthesize internal policies and trusted sources into a cited action memo for leadership on fast-moving regulations.",
        image: "/assets/images/contract-drafting-from-precedent.svg",
    },
    {
        id: "deposition",
        title: "Deposition preparation",
        description: "Turn transcripts and exhibits into key admissions grouped by case theme, with citations linked directly to source material.",
        image: "/assets/images/contract-drafting-from-precedent.svg",
    },
    {
        id: "dealpoint",
        title: "Deal point analysis",
        description: "Distill multiple emails and drafts into a list of deal points and recommended negotiating positions.",
        image: "/assets/images/contract-drafting-from-precedent.svg",
    },
    {
        id: "contract",
        title: "Contract drafting from precedent",
        description: "Generate first drafts tailored to deal-specific facts using your precedent library as a foundation.",
        image: "/assets/images/contract-drafting-from-precedent.svg",
    },
    {
        id: "casestrategy",
        title: "Case strategy development",
        description: "Map legal theories to evidence, identify gaps, and build a structured litigation roadmap.",
        image: "/assets/images/contract-drafting-from-precedent.svg",
    },
];

export default function HowTeamsUseAssistant() {
    const [active, setActive] = useState("regulatory");
    const current = cases.find((c) => c.id === active);

    return (
        <div className="bg-[#0f0e0d] min-h-screen px-7 py-28 md:py-32 text-white">
            <div className="grid lg:grid-cols-2 lg:gap-5 mb-14 sm:mb-16">
                <div></div>
                <h2 className="text-[28px] sm:text-[32px] leading-9 text-[#FAFAF9] tracking-[-.01em] harvey-small font-medium">
                    How teams use Assistant
                </h2>
            </div>

            <div className="max-w-342.5 mx-auto grid lg:grid-cols-2 lg:gap-5">
                <div className="w-full lg:max-w-137.5 shrink-0">
                    {cases.map((c) => (
                        <div
                            key={c.id}
                            onClick={() => setActive(c.id)}
                            className={`cursor-pointer border-t-2 pt-3.5 sm:pt-5 pb-14 lg:pb-0 ${
                                active === c.id
                                    ? "border-[#FAFAF9] lg:pb-6"
                                    : "border-[#FAFAF9] lg:border-[#33312c]"
                            }`}
                        >
                            <div className='text-[24px] leading-8 text-[#FAFAF9] pb-3.5 sm:pb-3 font-medium harvey-small transition-colors duration-200'>
                                {c.title}
                            </div>
                            <div
                                className={`text-[16px] text-[#cccac6] mb-7 sm:mb-6 leading-[1.3] sm:w-3/4 font-normal harvey-small overflow-hidden transition-all duration-200 ${
                                    active === c.id
                                        ? "lg:max-h-24 lg:opacity-100"
                                        : "lg:max-h-0 lg:opacity-0"
                                }`}
                            >
                                {c.description}
                            </div>

                            {/* Mobile: image always visible under each item */}
                            <div
                                className="block lg:hidden w-full rounded overflow-hidden "
                                style={{
                                    backgroundImage: "url('/assets/images/cards-bg.webp')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <img
                                    src={c.image}
                                    alt={c.title}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Image Panel — desktop only */}
                <div
                    className="hidden lg:block flex-1 min-w-0 rounded overflow-hidden"
                    style={{
                        backgroundImage: "url('/assets/images/cards-bg.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <img
                        key={active}
                        src={current.image}
                        alt={current.title}
                        className="w-full h-auto object-cover animate-[fadeUp_0.35s_ease]"
                    />
                </div>
            </div>

            <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
}