'use client';

import React from 'react';

const ValueProposition = () => {
    const sections = [
        {
            id: '1',
            title: 'Navigate complex issues with an always-on colleague',
            subtitle:
                'Bounce ideas off an intelligent partner available 24/7 to pressure-test your thinking.',
            mockupBg: 'bg-gradient-to-b from-[#2a2824] to-[#3d3935]',
        },
        {
            id: '2',
            title: 'Surface the winning insight',
            subtitle:
                'Identify exactly what you need from across your documents.',
            mockupBg: 'bg-gradient-to-b from-[#1a1816] to-[#2d2a26]',
        },
        {
            id: '3',
            title: 'Produce first-rate work product in seconds',
            subtitle:
                'Transform rough ideas into polished first drafts without switching between tools.',
            mockupBg: 'bg-gradient-to-b from-[#3d2a24] to-[#4a3a33]',
        },
    ];

    return (
        <div className='bg-[#fafaf9] pt-40 pb-32 px-7'>
            <div className="max-w-342.5 mx-auto w-full">
                <h3 className='text-[32px] text-[#8f8b85] font-medium harvey-small leading-[110%] max-w-172'>
                    <strong className='text-[#0f0e0d]'>Research, reason, deliver.</strong> Get instant answers, comprehensive reasoning, and polished drafts in one unified interface.
                </h3>

                <div className="mt-32 relative w-full">
                    <div className="relative w-full" style={{ height: `${sections.length * 90}vh` }}>
                        {sections.map((section, index) => (
                            <div
                                key={section.id}
                                className="sticky top-28 bg-[#fafaf9] border-t border-[#cccac6] h-[90vh] flex items-center justify-center"
                                style={{ zIndex: (index + 1) * 10 }}
                            >
                                <div className="w-full px-7 grid grid-cols-2 gap-16">
                                    {/* LEFT */}
                                    <div className="flex flex-col justify-center">
                                        <h2 className="text-4xl font-bold mb-6">{section.title}</h2>
                                        <p className="text-lg text-gray-600">{section.subtitle}</p>
                                    </div>

                                    {/* RIGHT */}
                                    <div className="flex items-center">
                                        <div
                                            className={`${section.mockupBg} rounded-2xl w-full h-150`}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ValueProposition;