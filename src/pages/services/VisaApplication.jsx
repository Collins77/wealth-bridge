import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const immigrationOptions = [
    {
        title: "Visitor Visa",
        text: "Visitors’ Visas are for international travellers (citizens of other countries) who have permanent residence outside South Africa and who wish to visit the country on a temporary 90 day Visitor’s Visa.",
        link: "visa-application/visitor-visa",
    },
    {
        title: "Medical Treatment Visa",
        text: "A medical treatment visa is a permit issued to foreigners intending to visit South Africa for the purpose of undergoing medical treatment and may be issued for a maximum period of six (6) months at a time.",
        link: "visa-application/medical-treatment-visa",
    },
    {
        title: "Study Visa",
        text: "A South African study visa allows a foreign national to reside in the Republic whilst studying at a South African institution of primary, secondary or tertiary education.",
        link: "visa-application/study-visa",
    },
    {
        title: "Work Visa",
        text: "South Africa offers work visas to foreign nationals, allowing employment within specific categories. Requirements vary, including skills, qualifications, and employer sponsorship. Visa duration depends on contract terms.",
        link: "visa-application/work-visa",
    },
    {
        title: "Business Visa",
        text: "Foreigners who are contemplating investing in the South African economy by establishing a business or by investing in an existing business in the country must apply for a business permit.",
        link: "visa-application/business-visa",
    },
    {
        title: "Relative Visa",
        text: "A temporary residence Relative’s Visa can be applied for by a family member of a South African citizen or permanent resident if they fall within the 1st or 2nd line of kinship.",
        link: "visa-application/relative-visa",
    },
    {
        title: "Retirement Visa",
        text: "A retirement visa as a means of immigration to South Africa, is granted to immigrants wishing to spend their retirement years in South Africa.",
        link: "visa-application/retirement-visa",
    },
    {
        title: "Volunteer Visa",
        text: "The South African volunteer visa (long-stay visitor’s visa) allows foreign nationals to partake in volunteer or charity work within the Republic.",
        link: "visa-application/volunteer-visa",
    },
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

const VisaApplication = () => {
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
            <div className='bg-[#002e5a] px-[60px] py-[40px] flex flex-col gap-4'>
                <motion.h1
                    className="text-white font-semibold text-4xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                    Visa Application Consultants
                </motion.h1>

                {/* Divider */}
                <motion.hr
                    className="text-[#fdb930] w-[20%]"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                />
            </div>
            <h1 className='uppercase text-gray-500 mt-2 text-sm px-[60px]'>Immigration Consultants</h1>
            <div className='flex flex-col gap-4  justify-center px-[60px] py-[40px]'>
                <p className='text-gray-500'>Visa Immigration SA represent and guide prospective travellers and migrants to South Africa through their visa applications and the immigration process</p>
                <h1 className='text-xl text-[#002e5a] text-center font-semibold'>How do we help you through the immigation or visa application process?</h1>
                <p className='text-gray-500'>There are numerous immigration options and visa types to choose from when visiting or relocating to South Africa. There are also a lot of forms and supporting documents that must be submitted on time and error free. With our consultation through the process, you are assured that your submission will be complete, error free and on time. We will also advise you on how long the process will take, issues you may encounter and discuss possible outcomes</p>
                <h1 className='text-lg text-[#002e5a] text-center font-semibold'>Our consultation services include the following :</h1>
                <ul>
                    <li className='flex gap-2 items-center text-gray-500'>
                        <div className='w-2 h-2 rounded-full bg-gray-500'></div>
                        Advice on the best possible visa options available to you
                    </li>
                    <li className='flex gap-2 items-center text-gray-500'>
                        <div className='w-2 h-2 rounded-full bg-gray-500'></div>
                        A plan of action with the least amount of risk involved
                    </li>
                    <li className='flex gap-2 items-center text-gray-500'>
                        <div className='w-2 h-2 rounded-full bg-gray-500'></div>
                        We include a comprehensive information pack, as well as templates and forms needed
                    </li>
                    <li className='flex gap-2 items-center text-gray-500'>
                        <div className='w-2 h-2 rounded-full bg-gray-500'></div>
                        Represent your interests in communicating with the Department of Home Affairs / South African High Commissions in accordance with the Immigration Act and regulations.
                    </li>
                    <li className='flex gap-2 items-center text-gray-500'>
                        <div className='w-2 h-2 rounded-full bg-gray-500'></div>
                        Assistance with the submission of the application at the relevant governmental offices, both locally and internationally,
                    </li>
                    <li className='flex gap-2 items-center text-gray-500'>
                        <div className='w-2 h-2 rounded-full bg-gray-500'></div>
                        Follow-ups on the progress made with the application, once submitted.
                    </li>
                </ul>
            </div>
            <div className='bg-white px-[60px] py-[40px] flex flex-col gap-4 items-center justify-center'>
                <h1 className='text-[#002e5a] text-2xl font-semibold'>Ready to get started?</h1>
                <p className='text-center text-gray-500 w-[80%]'>Start by completing our online eligibility check. When we receive your information, we will provide you with guidance about the most suitable South African visa option.</p>
                <button onClick={() => navigate('eligibility-test')} className='bg-[#fdb930] px-4 py-1 rounded-sm text-white cursor-pointer hover:bg-[#002e5a] transition-all duration-300'>GET STARTED</button>
            </div>
            <div className='bg-gray-50 px-[100px] py-[40px]'>
                <h1 className='text-2xl text-[#002e5a] text-center mb-[40px]'>Some of the immigration options we assist with</h1>
                {/* Immigration options */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[60px]'>
                    {immigrationOptions.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.link}
                            className="bg-white p-6 shadow-md h-[250px] flex flex-col gap-3 rounded-md hover:shadow-lg transition-shadow duration-300"
                            initial={{ opacity: 0, y: 60, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 60, scale: 0.95 }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <h1 className="text-[#002e5a] text-xl font-bold">{item.title}</h1>
                            <hr className="h-1 bg-[#fdb930] text-[#fdb930] w-[30px]" />
                            <p className="text-gray-600">{item.text}</p>
                            <span className="underline text-gray-600 text-sm mt-auto">
                                Learn More
                            </span>
                        </motion.a>
                    ))}
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

export default VisaApplication