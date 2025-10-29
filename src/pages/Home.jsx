import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/bgImg.jpg";
import img2 from "../assets/bgImg2.jpg";
import img3 from "../assets/bgImg3.jpg";
import business from "../assets/business.jpg";
import work from "../assets/work.jpg";
import vacay from "../assets/vacay.jpg";
import med from "../assets/med.jpg";
import retire from "../assets/retire.jpg";
import study from "../assets/study.jpg";
import visaImg from "../assets/visaImg.jpg";
import { useNavigate } from "react-router-dom";
import { Check, CircleCheck } from "lucide-react";

const visaOptions = [
    { title: "Business Visa", image: business, link: "/business-visa" },
    { title: "Tourist Visa", image: vacay, link: "/tourist-visa" },
    { title: "Student Visa", image: study, link: "/student-visa" },
    { title: "Work Visa", image: work, link: "/work-visa" },
    { title: "Retirement Visa", image: retire, link: "/permanent-residency" },
    { title: "Medical Visa", image: med, link: "/family-visa" },
];

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

const Home = () => {
    const images = [img1, img2, img3];
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    // Auto-switch testimonials every 6 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    // Auto change slides every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div>
            <div className="relative h-[80vh] w-full overflow-hidden">
                {/* Background Carousel with Zoom + Fade */}
                <AnimatePresence>
                    {images.map((img, index) =>
                        index === activeIndex ? (
                            <motion.div
                                key={index}
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${img})` }}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            ></motion.div>
                        ) : null
                    )}
                </AnimatePresence>

                {/* Dark Overlay Behind Text */}
                <div className="absolute inset-0 bg-[#002e5a]/80"></div>

                {/* Hero Text */}
                <div className="absolute inset-0 flex flex-col justify-center items-start sm:px-[60px] px-[30px]">
                    <motion.p
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        className="sm:text-xl text-lg md:text-xl text-[#fdb930] max-w-2xl uppercase"
                    >
                        Wealth Bridge Advisory Limited
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="sm:text-6xl text-2xl md:text-5xl font-bold text-white mb-4 uppercase"
                    >
                        VISA APPLICATIONS Made simple & secure
                    </motion.h1>
                    <motion.hr
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4, ease: "easeOut" }}
                        className="w-[100px] text-[#fdb930] bg-[#fdb930] mb-2"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                        className="sm:text-lg md:text-xl text-gray-200 max-w-2xl mb-[20px]"
                    >
                        We simplify your visa and immigration journey — with expert support
                        and unmatched professionalism.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.7, ease: "easeOut", delay: 0.3 }}
                        className="flex sm:flex-row flex-col items-center gap-4"
                    >
                        <button onClick={() => navigate('about-us')} className="uppercase px-4 py-1 border-2 border-[#fdb930] text-white hover:bg-[#fdb930] cursor-pointer duration-300 transition-all rounded-sm text-lg sm:w-fit w-full">Learn More</button>
                        <button onClick={() => navigate('services/visa-application')} className="uppercase px-4 py-1 bg-[#fdb930] text-white hover:bg-transparent hover:border-2 hover:border-[#fdb930] cursor-pointer duration-300 transition-all rounded-sm text-lg sm:w-fit w-full">Consultation Services</button>
                    </motion.div>
                </div>

                {/* Dots Indicator */}
                <div className="absolute bottom-6 right-6 flex gap-2">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full border border-white ${activeIndex === index ? "bg-[#fdb930]" : "bg-transparent"
                                } transition-all duration-300`}
                        ></div>
                    ))}
                </div>
            </div>
            <div className="bg-[#fdb930] px-[60px] py-[40px] flex flex-col sm:gap-0 gap-6 sm:flex-row justify-between items-center">
                <div className="flex flex-col gap-1 sm:w-[60%]">
                    <h1 className="font-bold text-white sm:text-3xl text-xl sm:text-start text-center">Complementary Eligibility Assessment</h1>
                    <p className="text-gray-500 text-sm sm:text-start text-center">Complete our assessment to get free and unbiased feedback about your visa options,
                        eligibility and guidance about your next steps</p>
                </div>
                <div>
                    <button onClick={() => navigate('eligilibity-assesment')} className="px-10 py-1 bg-white rounded-sm hover:bg-[#002e5a] cursor-pointer hover:text-white transition-all duration-300">GET STARTED</button>
                </div>
            </div>
            <div className="bg-white p-[60px]">
                <div className="flex gap-2 flex-col mb-[40px]">
                    <p className="uppercase text-[#fdb930] text-[12px] border border-gray-200 rounded-xl w-fit px-2 py-1">About Wealth Bridge Advisory Limited</p>
                    <h1 className="sm:text-3xl text-xl font-semibold text-[#414c79]">We drive successful visa and residency permit applications</h1>
                    <motion.hr
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeIn", delay: 0.3 }}
                        className="text-[#fdb930] bg-[#fdb930] w-[80px] h-1"
                    />
                </div>
                <p className="text-gray-500 mb-[40px]">Visa Immigration South Africa provides corporate firms and individuals with sound advice and guidance through the South African visa application and residency permit processes. Our deep understanding of South African immigration laws, online process tracking platform and unrivalled customer services will ensure that you have a smooth visa application or immigration experience.</p>
                <div>
                    <h1 className="text-[#414c79] text-xl mb-[30px]">Visa Options</h1>
                    {/* Visa options */}
                    <div className="sm:grid sm:grid-cols-3 flex flex-col gap-6 mb-[30px]">
                        {visaOptions.map((visa, index) => (
                            <a
                                key={index}
                                href={visa.link}
                                className="flex items-center justify-center h-[200px] rounded-md relative overflow-hidden"
                                style={{
                                    backgroundImage: `url(${visa.image})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                }}
                            >
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/50 hover:bg-black/70 transition-all duration-300"></div>
                                {/* Text */}
                                <div className="absolute flex flex-col items-center justify-center text-center px-2">
                                    <h1 className="font-bold text-white text-xl mb-2">{visa.title}</h1>
                                    <a href={visa.link} className="underline text-sm text-gray-200 cursor-pointer">
                                        Learn More
                                    </a>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center justify-center">
                        <a href="#" className="border border-[#fdb930] px-4 py-1 hover:bg-[#fdb930] hover:text-white duration-300 transition-all">VIEW ALL OPTIONS</a>
                    </div>
                </div>
            </div>
            <div className="relative p-[60px] sm:h-[500px] h-[800px]" style={{ backgroundImage: `url(${visaImg})`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="flex flex-col justify-center gap-4 absolute inset-0">
                    <div className="flex flex-col gap-2 justify-center items-center mb-[40px]">
                        <p className="border rounded-xl border-gray-200 px-4 py-1 text-[#fdb930] text-sm w-fit font-semibold">OUR CONSULTATION PROCESS</p>
                        <h1 className="sm:text-3xl text-xl font-semibold text-white">Applying for your Visa has never been this easy</h1>
                        <motion.hr
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeIn", delay: 0.3 }}
                            className="text-[#fdb930] bg-[#fdb930] w-[80px] h-1"
                        />
                    </div>
                    <div className="sm:grid sm:grid-cols-4 flex flex-col items-center gap-6 px-[60px] text-white mb-4">
                        <div className="flex sm:flex-row flex-col sm:items-start items-center gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.3, ease: "easeIn", delay: 0.3 }}
                                className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center"
                            >
                                <Check color="#fdb930" />
                            </motion.div>
                            <div className="flex flex-col sm:items-start items-center gap-2 text-white">
                                <h1 className="font-bold text-lg">Step 1</h1>
                                <p>Complete our eligibility check.</p>
                            </div>
                        </div>
                        <div className="flex sm:flex-row flex-col sm:items-start items-center gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.3, ease: "easeIn", delay: 0.3 }}
                                className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center"
                            >
                                <Check color="#fdb930" />
                            </motion.div>
                            <div className="flex flex-col sm:items-start items-center gap-2 text-white">
                                <h1 className="font-bold text-lg">Step 2</h1>
                                <p>Upload your documents.</p>
                            </div>
                        </div>
                        <div className="flex sm:flex-row flex-col sm:items-start items-center gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.3, ease: "easeIn", delay: 0.3 }}
                                className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center"
                            >
                                <Check color="#fdb930" />
                            </motion.div>
                            <div className="flex flex-col sm:items-start items-center gap-2 text-white">
                                <h1 className="font-bold text-lg">Step 3</h1>
                                <p>Submit your visa application.</p>
                            </div>
                        </div>
                        <div className="flex sm:flex-row flex-col sm:items-start items-center gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.3, ease: "easeIn", delay: 0.3 }}
                                className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center"
                            >
                                <Check color="#fdb930" />
                            </motion.div>
                            <div className="flex flex-col sm:items-start items-center gap-2 text-white">
                                <h1 className="font-bold text-lg">Step 4</h1>
                                <p>Collect your processed visa.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="px-8 py-1 border border-[#fdb930] text-white hover:bg-[#002e5a] transition-all duration-300 cursor-pointer">GET STARTED</button>
                    </div>
                </div>

            </div>
            <div className="bg-white p-[60px]">
                <div className="flex gap-2 flex-col mb-[40px]">
                    <p className="uppercase text-[#fdb930] text-[12px] border border-gray-200 rounded-xl w-fit px-2 py-1">Why Use Wealth Bridge Advisory Limited</p>
                    <h1 className="sm:text-3xl text-xl font-semibold text-[#414c79]">Quick and efficient results</h1>
                    <motion.hr
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeIn", delay: 0.3 }}
                        className="text-[#fdb930] bg-[#fdb930] w-[80px] h-1"
                    />
                </div>
                <p className="mb-[30px]">Immigrating can seem like a daunting, time-consuming task. This is why you need experienced consultants and a simple application process. Visa Immigration SA provides all of this and more.</p>
                <div className="flex sm:flex-row flex-col sm:justify-between sm:gap-0 gap-6">
                    <div className="sm:w-[50%] h-[200px] sm:block hidden">
                        <img src={business} alt="image4" className="sm:w-[70%] w-full h-full object-cover" />
                    </div>
                    <ul className="flex flex-col gap-4 sm:w-[50%]">
                        <li className="flex gap-4">
                            <CircleCheck color="#fdb930" />
                            Professional, competent and timely advice
                        </li>
                        <li className="flex gap-4">
                            <CircleCheck color="#fdb930" />
                            Ensures adherence to Immigration Act
                        </li>
                        <li className="flex gap-4">
                            <CircleCheck color="#fdb930" />
                            Unlimited advice and consultations
                        </li>
                        <li className="flex gap-4">
                            <CircleCheck color="#fdb930" />
                            Free information pack
                        </li>
                        <li className="flex gap-4">
                            <CircleCheck color="#fdb930" />
                            Bi-weekly follow-ups
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-[#fdb930] px-[60px] py-[40px] flex sm:flex-row flex-col sm:gap-0 gap-6 sm:justify-between items-center">
                <div className="flex flex-col gap-1 sm:w-[60%]">
                    <h1 className="font-bold text-white sm:text-3xl text-xl">Free Eligibility Assessment</h1>
                </div>
                <div>
                    <button onClick={() => navigate('eligilibity-assesment')} className="px-10 py-1 bg-white rounded-sm hover:bg-[#002e5a] cursor-pointer hover:text-white transition-all duration-300">GET STARTED</button>
                </div>
            </div>
            {/* Testimonials */}
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

export default Home;
