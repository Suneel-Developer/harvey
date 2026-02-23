import Link from "next/link";

export default function SecuritySection() {
    const securityItems = [
        {
            title: "SOC2 II",
            icon: "/assets/images/soc-2-icon.svg",
            href: "#",
        },
        {
            title: "CCPA",
            icon: "/assets/images/ccpa-icon.svg",
            href: "#",
        },
        {
            title: "ISO 27001",
            icon: "/assets/images/iso-icon.svg",
            href: "#",
        },
        {
            title: "GDPR",
            icon: "/assets/images/gdpr-icon.svg",
            href: "#",
        },
    ];

    return (
        <section className="relative bg-[#0f0e0d] py-36 overflow-hidden">

            {/* subtle vertical gradient lines */}
            <div className="pointer-events-none absolute inset-0 bg-[#1F1D1A]" />

            <div className="relative px-7 lg:px-9 flex flex-col gap-y-36 max-w-332.5 w-full mx-auto">

                {/* top grid */}
                <div className="flex justify-between">

                    {/* left heading */}
                    <h2 className="text-4xl md:text-4xl font-medium max-w-96.5 harvey-small mb-18 text-white">
                        Enterprise-grade
                        <br />
                        security and controls
                    </h2>

                    {/* right content */}
                    <div className="max-w-96.5 w-full">
                        <p className="text-[#cccac6] text-xl harvey-small leading-[1.3] font-normal mb-6">
                            Harvey meets the highest industry standards for security and compliance.
                            We include all default controls that enterprise teams expect:
                            SAML SSO, audit logs, IP allow-listing, data lifecycle management, and more.
                        </p>

                        <Link
                            href="#"
                            className="inline-flex items-center border border-[#cccac6] px-3 h-8 mt-9 text-sm rounded-sm harvey-small hover:border-[#fafaf9] text-[#fafaf9] hover:text-black transition-colors ease-out duration-300"
                        >
                            More About Security
                        </Link>
                    </div>

                </div>

                {/* bottom icons grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-28.75">

                    {securityItems.map((item) => (
                        <div
                            key={item.title}
                            className="flex flex-col items-center justify-center text-center gap-9"
                        >

                            {/* icon */}
                            <div>
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className="w-24 sm:w-40 object-contain"
                                    loading="lazy"
                                />
                            </div>

                            <div>
                                {/* title */}
                                <h3 className="text-xl mb-2.5 font-normal harvey-small text-white">
                                    {item.title}
                                </h3>

                                {/* details link */}
                                <Link href="#" className="flex items-center justify-center gap-1 harvey-small text-base text-[#8f8b85] hover:text-white transition-colors duration-300 ease-out">
                                    Details

                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9999 7L6.99994 17M16.9999 7L6.99994 7M16.9999 7V17" stroke="currentColor" stroke-width="1.5"></path></svg>
                                </Link>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}