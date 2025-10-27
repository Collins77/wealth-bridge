import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='px-[60px] pt-[40px] bg-[#002e5a]'>
        <div className='grid grid-cols-4 gap-6 mb-4'>
            <div className='col-span-2 text-white'>
                <h1 className='font-bold text-lg mb-2'>Wealth Bridge Advisory Limited</h1>
                <p className='text-gray-200 mb-3'>We'll assist you with all Visa Applications, Permit Applications and Immigration Services.</p>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-4'>
                        <Phone color='#fdb930' />
                        <p>+25412345678</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Mail color='#fdb930' />
                        <p>info@wealthbridgevisa.com</p>
                    </div>
                    <div className='flex gap-4'>
                        <MapPin color='#fdb930' />
                        <div>
                            <p>Kings of Brooklyn,</p>
                            <p>18 Kings Road, Brooklyn,</p>
                            <p>Cape Town, 7405</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='mb-4 text-white font-bold text-lg'>Consultation Services</h1>
                <ul className='text-white flex flex-col gap-2'>
                    <li className='flex items-center gap-4'>
                        <div className='w-2 h-2 rounded-full bg-[#fdb930]'></div>
                        <a href="" className='hover:text-[#fdb930] transition-all duration-300'>Visitor Visa</a>
                    </li>
                    <li className='flex items-center gap-4'>
                        <div className='w-2 h-2 rounded-full bg-[#fdb930]'></div>
                        <a href="" className='hover:text-[#fdb930] transition-all duration-300'>Medical Treatment Visa</a>
                    </li>
                    <li className='flex items-center gap-4'>
                        <div className='w-2 h-2 rounded-full bg-[#fdb930]'></div>
                        <a href="" className='hover:text-[#fdb930] transition-all duration-300'>Study Visa</a>
                    </li>
                    <li className='flex items-center gap-4'>
                        <div className='w-2 h-2 rounded-full bg-[#fdb930]'></div>
                        <a href="" className='hover:text-[#fdb930] transition-all duration-300'>Work Visa</a>
                    </li>
                    <li className='flex items-center gap-4'>
                        <div className='w-2 h-2 rounded-full bg-[#fdb930]'></div>
                        <a href="" className='hover:text-[#fdb930] transition-all duration-300'>Business Visa</a>
                    </li>
                    <li className='flex items-center gap-4'>
                        <div className='w-2 h-2 rounded-full bg-[#fdb930]'></div>
                        <a href="" className='hover:text-[#fdb930] transition-all duration-300'>Retirement Visa</a>
                    </li>
                </ul>
            </div>
            <div>
                <h1 className='mb-4 text-white font-bold text-lg'>Quick Links</h1>
                <ul className='text-white flex flex-col gap-2'>
                    <li className='flex items-center gap-4'>
                        <div className='w-2 h-2 rounded-full bg-[#fdb930]'></div>
                        <a href="" className='hover:text-[#fdb930] transition-all duration-300'>Eligibility Check</a>
                    </li>
                    <li className='flex items-center gap-4'>
                        <div className='w-2 h-2 rounded-full bg-[#fdb930]'></div>
                        <a href="" className='hover:text-[#fdb930] transition-all duration-300'>Contact Us</a>
                    </li>
                    <li className='flex items-center gap-4'>
                        <div className='w-2 h-2 rounded-full bg-[#fdb930]'></div>
                        <a href="" className='hover:text-[#fdb930] transition-all duration-300'>About Us</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className='border-t border-gray-600 p-2 flex items-center justify-center'>
            <p className='uppercase text-gray-500 text-[12px]'>&copy;Copyright 2025 Wealth Bridge Advisory Limited</p>
        </div>
    </div>
  )
}

export default Footer