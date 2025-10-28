import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import about1 from "../assets/business.jpg"
import about2 from "../assets/bgImg4.jpg"
import partner from "../assets/partner.png"
import { useNavigate } from "react-router-dom";

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

const About = () => {
    const navigate = useNavigate();
    const [activeTestimonial, setActiveTestimonial] = useState(0);

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
                    ABOUT
                </motion.p>

                {/* Heading */}
                <motion.h1
                    className="text-white text-3xl"
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
                    As one of South Africa’s leading independent visa & permit firms, Visa Immigration SA is a professional solution for all corporate firms and foreign nationals requiring assistance with all immigration related matters to South Africa.
                </motion.p>
            </div>
            <div className="bg-white px-[60px] py-[40px] flex flex-col gap-[60px]">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-3 w-[50%]">
                        <h1 className="text-3xl text-[#002e5a] font-semibold">Who We Are</h1>
                        <hr className="h-1 text-[#fdb930] bg-[#fdb930] w-[50px]" />
                        <h1 className="text-[#002e5a] font-bold text-lg">Knowledgeable team and prompt results</h1>
                        <p className="w-[70%] text-gray-600">Our experienced immigration experts and legal team understands the processes adhered to by the South African Department of Home Affairs and offers unlimited advice. They keep clients updated with bi-weekly follow ups and ensure that documents are processed timeously.</p>
                    </div>
                    <div className="w-[50%] h-[350px]">
                        <img src={about1} alt="source" className="w-[80%] ml-8 h-full object-cover" />
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="w-[50%] h-[350px]">
                        <img src={about2} alt="source" className="w-[80%] ml-8 h-full object-cover" />
                    </div>
                    <div className="flex flex-col gap-3 w-[50%]">
                        <h1 className="text-3xl text-[#002e5a] font-semibold">What we do</h1>
                        <hr className="h-1 text-[#fdb930] bg-[#fdb930] w-[50px]" />
                        <h1 className="text-[#002e5a] font-bold text-lg">Our values represent who we are and what we stand for.</h1>
                        <p className="w-[70%] text-gray-600">We pride ourselves by taking swift action to deliver the highest-quality visa and immigration services. We ensure that visas and permits are acquired timeously. Our immigration services assist foreign nationals with South African visa and permit applications and make it simple to work, study, or operate a business in South Africa.</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#fdb930] px-[60px] py-[40px] flex justify-between items-center">
                <div className="flex flex-col gap-1 w-[60%]">
                    <h1 className="font-bold text-white text-3xl">Free Eligibility Assessment</h1>
                </div>
                <div>
                    <button onClick={() => navigate('eligilibity-assesment')} className="px-10 py-1 bg-white rounded-sm hover:bg-[#002e5a] cursor-pointer hover:text-white transition-all duration-300">GET STARTED</button>
                </div>
            </div>
            <div className="px-[60px] py-[40px] bg-white flex flex-col gap-4 items-center justify-center">
                <h1 className="text-3xl text-[#002e5a] font-semibold">Our Partners</h1>
                <hr className="text-[#fdb930] w-[40px]" />
                <p className="text-center text-gray-600">Our team brings with them a wealth of legal experience, as well as a consummate understanding of the processes adhered to by the South African Department of Home Affairs. We work with in association with the following legal firms:</p>
                <img src={partner} alt="partner" />
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
    );
};

export default About;
