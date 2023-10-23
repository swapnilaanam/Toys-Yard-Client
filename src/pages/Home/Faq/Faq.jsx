import { Flip } from "react-awesome-reveal";

const Faq = () => {
    return (
        <section className="mt-28 pb-40 px-4 lg:px-0">
            <div className="max-w-[1380px] mx-auto bg-black pt-28 pb-36 rounded-sm">
                <Flip direction='horizontal'>
                    <h2 className="mb-20 text-center text-3xl md:text-4xl text-white font-semibold tracking-wide">
                        Frequently Asked Questions
                    </h2>
                </Flip>
                <div className="space-y-4 px-10 lg:px-20">
                    <details
                        className="group border-s-4 border-green-500 bg-white p-6 [&_summary::-webkit-details-marker]:hidden"
                        open
                    >
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                            <h2 className="text-lg font-medium text-gray-900">
                                What materials are used to manufacture the products?
                            </h2>

                            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">
                            The materials used to manufacture the action figures vary depending on the manufacturer. Some common materials include PVC, ABS, and vinyl.
                        </p>
                    </details>
                    <details
                        className="group border-s-4 border-green-500 bg-white p-6 [&_summary::-webkit-details-marker]:hidden"
                    >
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                            <h2 className="text-lg font-medium text-gray-900">
                                What’s the cost of shipping?
                            </h2>

                            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">
                            Shipping costs can vary depending on the shipping destination, weight of the package, and shipping method.
                        </p>
                    </details>
                    <details
                        className="group border-s-4 border-green-500 bg-white p-6 [&_summary::-webkit-details-marker]:hidden"
                    >
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                            <h2 className="text-lg font-medium text-gray-900">
                                How do I wash the product?
                            </h2>

                            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">
                            It’s best to avoid washing action figures with water as it can damage them. Instead, use a soft-bristled brush or cloth to remove dust and dirt from the figure.
                        </p>
                    </details>
                    <details
                        className="group border-s-4 border-green-500 bg-white p-6 [&_summary::-webkit-details-marker]:hidden"
                    >
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                            <h2 className="text-lg font-medium text-gray-900">
                                Where do the products get shipped from?
                            </h2>

                            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">
                            The action figures first gets shipped from seller location to our warehouse and then from our warehouse it gets delivered to your house through our delivery partners.
                        </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Faq;