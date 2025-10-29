import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MapPin, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const testimonials = [
    {
        quote: `"Wealth Bridge Advisory made my visa application seamless and stress-free. Their team was professional and supportive throughout the process."`,
        name: "James Kamau",
    },
    {
        quote: `"I received my visa faster than expected! Their consultants provided clear guidance and kept me updated at every stage."`,
        name: "Mary Njeri",
    },
    {
        quote: `"Exceptional service! I highly recommend them for anyone seeking reliable visa support."`,
        name: "John Otieno",
    },
];

const Contact = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

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
                    Contact
                </motion.p>

                {/* Heading */}
                <motion.h1
                    className="text-white sm:text-3xl text-xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                    Wealth Bridge Advisory Limited
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
                    Contact us or learn more about Visa and Immigration companies in South Africa.
                </motion.p>
            </div>
            <div className='sm:px-[60px] px-[40px] py-[40px] bg-gray-50'>
                <div className='flex sm:flex-row flex-col'>
                    <form action="" className='p-[40px] bg-white sm:w-[70%] shadow-sm'>
                        <div className='flex flex-col gap-2 mb-6'>
                            <h1 className='text-[#002e5a] text-2xl font-semibold'>Send us a Message</h1>
                            <hr className='text-[#fdb930] h-1 bg-[#fdb930] w-[40px]' />
                        </div>
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
                                <label className='text-gray-500 font-semibold' htmlFor="">Email<span className='text-red-500'>*</span></label>
                                <input type="email" className='border border-gray-200 rounded-md p-1 outline-none' required />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-gray-500 font-semibold' htmlFor="">Phone<span className='text-red-500'>*</span></label>
                                <input type="tel" className='border border-gray-200 rounded-md p-1 outline-none' required />
                            </div>
                            <div className='flex flex-col gap-2 col-span-2'>
                                <label className='text-gray-500 font-semibold' htmlFor="">Message</label>
                                <textarea name="" id="" rows={6} className='border border-gray-200 rounded-md p-1 outline-none'></textarea>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => { }} className='bg-[#002e5a] px-4 py-1 rounded-sm text-white cursor-pointer hover:bg-[#fdb930] duration-300 transition-all'>SEND MESSAGE</button>
                        </div>
                    </form>
                    <div className='flex flex-col sm:w-[30%]'>
                        <div className='bg-[#002e5a] h-[70%] flex flex-col p-6 text-white'>
                            <div className='flex flex-col gap-2 mb-[30px]'>
                                <h1 className='text-2xl font-semibold'>Info</h1>
                                <hr className='text-[#fdb930] h-1 bg-[#fdb930] w-[10%]' />
                            </div>
                            <div className='flex flex-col gap-6'>
                                <div className='flex gap-3'>
                                    <MapPin color='#fdb930' />
                                    <p>Kings of Brooklyn, <br />
                                        18 Kings Road, <br />
                                        Brooklyn,<br />
                                        Cape Town, 7405</p>
                                </div>
                                <div className='flex gap-3'>
                                    <Phone color='#fdb930' />
                                    <p>+25412345678</p>
                                </div>
                                <div className='flex gap-3'>
                                    <Mail color='#fdb930' />
                                    <p>info@wealthbridgevisa.com</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#001d3b] h-[30%] flex flex-col items-center justify-center p-6 gap-2'>
                            <h1 className='text-lg text-white text-center font-semibold'>Ready to try our online visa assessment?</h1>
                            <button onClick={() => navigate('/eligibility-assesment')} className='bg-transparent px-4 py-1 rounded-sm border border-white text-white hover:bg-[#fdb930] duration-300 transition-all cursor-pointer'>GET STARTED</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-[60px] bg-[#001d3b] flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTestimonial}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="text-center w-[70%]"
                    >
                        <p className="text-white italic text-lg mb-4">
                            {testimonials[activeTestimonial].quote}
                        </p>
                        <p className="text-[#fdb930] font-semibold">
                            ~ {testimonials[activeTestimonial].name}
                        </p>
                    </motion.div>
                </AnimatePresence>

                {/* Dots Indicator */}
                <div className="flex gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTestimonial(index)}
                            className={`w-3 h-3 rounded-full border border-white ${activeTestimonial === index ? "bg-[#fdb930]" : "bg-transparent"
                                } transition-all duration-300`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Contact