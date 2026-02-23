export default function StatsSection() {
    const stats = [
        {
            label: "Average hours saved per month",
            value: "20+",
        },
        {
            label: "Professionals using Harvey",
            value: "100,000+",
        },
        {
            label: "Law firms and in-house legal teams using Harvey",
            value: "1,000+",
        },
        {
            label: "Countries Harvey is used in",
            value: "60",
        },
        {
            label: "Am Law 100 firms using Harvey",
            value: "50+",
        },
    ];

    return (
        <section className="bg-[#0f0e0d] py-40 px-7 lg:px-9">
            <div className="max-w-342.5 mx-auto w-full">

                {/* heading */}
                <div className="flex justify-end mb-40">
                    <h2 className="text-lg md:text-[40px] font-medium leading-[1.3] max-w-134 harvey-small text-[#fafaf9]">
                        Helping teams stay focused
                        and see measurable results
                    </h2>
                </div>

                {/* stats list */}
                <div>
                    {stats.map((stat, index) => ( 
                        <div
                            key={index}
                            className="grid grid-cols-5 items-start py-10 border-t border-[#33312c]"
                        >
                            {/* left text */}
                            <p className="text-xs md:text-xl mb-5 text-[#fafaf9] harvey-small col-span-3">
                                {stat.label}
                            </p>

                            {/* right value */}
                            <div className="flex col-span-2">
                                <span className="text-3xl md:text-[96px] font-medium text-[#fafaf9] harvey">
                                    {stat.value}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}