import React from 'react'
import { AnimatePresence, motion } from "framer-motion";

const EligibilityTest = () => {
    return (
        <div>
            <div className="sm:px-[60px] px-[40px] py-[40px] bg-[#002e5a] flex flex-col gap-3 overflow-hidden">
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
                    className="text-white sm:text-3xl text-xl"
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
                    className="text-white sm:text-base text-sm"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                >
                    Kickstart your visa or residency permit application by completing our immigration eligibility assessment. Once we confirm your eligibility, we will assist you through the process. If not eligible at this stage, we will provide you with advice about your immigration or visa application options.
                </motion.p>
            </div>
            <div className='sm:px-[60px] px-[40px] py-[40px] bg-gray-50'>
                <form action="" className='bg-white shadow-md p-[40px]'>
                    <h1 className='text-[#002e5a] text-2xl font-semibold text-center mb-[30px]'>You’re one step closer…</h1>
                    <div className='sm:grid sm:grid-cols-2 flex flex-col gap-4 mb-5'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-gray-500 font-semibold' htmlFor="">First Name<span className='text-red-500'>*</span></label>
                            <input type="text" className='border border-gray-200 rounded-md p-1 outline-none' required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-gray-500 font-semibold' htmlFor="">Last Name<span className='text-red-500'>*</span></label>
                            <input type="text" className='border border-gray-200 rounded-md p-1 outline-none' required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-gray-500 font-semibold' htmlFor="">Phone<span className='text-red-500'>*</span></label>
                            <input type="text" className='border border-gray-200 rounded-md p-1 outline-none' required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-gray-500 font-semibold' htmlFor="">Email<span className='text-red-500'>*</span></label>
                            <input type="email" className='border border-gray-200 rounded-md p-1 outline-none' required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-gray-500 font-semibold' htmlFor="">Number of Children<span className='text-red-500'>*</span></label>
                            <input type="number" min={0} className='border border-gray-200 rounded-md p-1 outline-none' required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-gray-500 font-semibold' htmlFor="">Date Of Birth<span className='text-red-500'>*</span></label>
                            <input type="date" className='border border-gray-200 rounded-md p-1 outline-none' required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-gray-500 font-semibold' htmlFor="">Current Country of Residence<span className='text-red-500'>*</span></label>
                            <input type="text" className='border border-gray-200 rounded-md p-1 outline-none' required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-gray-500 font-semibold' htmlFor="">Nationality<span className='text-red-500'>*</span></label>
                            <input type="text" className='border border-gray-200 rounded-md p-1 outline-none' required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-gray-500 font-semibold' htmlFor="">Desired Destination<span className='text-red-500'>*</span></label>
                            <input type="text" className='border border-gray-200 rounded-md p-1 outline-none' required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-gray-500 font-semibold' htmlFor="">Desired Destination<span className='text-red-500'>*</span></label>
                            <select name="" id="" className='border border-gray-200 rounded-md p-1 outline-none'>
                                <option value="">Study Visa</option>
                                <option value="">Work Visa</option>
                                <option value="">Business Visa</option>
                                <option value="">Medical Visa</option>
                                <option value="">Visitor Visa</option>
                                <option value="">Relative Visa</option>
                                <option value="">Retirement Visa</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-2 col-span-2'>
                            <label className='text-gray-500 font-semibold' htmlFor="">Any requests or something you want us to know?</label>
                            <textarea name="" id="" rows={6} className='border border-gray-200 rounded-md p-1 outline-none'></textarea>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => { }} className='bg-[#002e5a] px-4 py-1 rounded-sm text-white cursor-pointer hover:bg-[#fdb930] duration-300 transition-all'>SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EligibilityTest