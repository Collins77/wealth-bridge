import React from 'react'
import { AnimatePresence, motion } from "framer-motion";

const EligibilityTest = () => {
    return (
        <div>
            <div className="px-[60px] py-[40px] bg-[#002e5a] flex flex-col gap-3 overflow-hidden">
                {/* ABOUT Tag */}
                <motion.p
                    className="text-[#fdb930] text-sm border border-gray-200 rounded-xl px-2 py-1 w-fit"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    Get Started
                </motion.p>

                {/* Heading */}
                <motion.h1
                    className="text-white text-3xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                    Eligibility check
                </motion.h1>

                {/* Divider */}
                <motion.hr
                    className="text-[#fdb930] w-[15%]"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                />

                {/* Paragraph */}
                <motion.p
                    className="text-white"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                >
                    Kickstart your visa or residency permit application by completing our immigration eligibility assessment. Once we confirm your eligibility, we will assist you through the process. If not eligible at this stage, we will provide you with advice about your immigration or visa application options.
                </motion.p>
            </div>
            <div className='px-[60px] py-[40px] bg-gray-50'>

            </div>
        </div>
    )
}

export default EligibilityTest