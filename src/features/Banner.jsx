import { Facebook, Mail, Phone, Twitter } from 'lucide-react'
import React from 'react'

const Banner = () => {
  return (
    <div className='w-full bg-[#002e5a] border-b-2 border-[#fdb930] py-2 px-[60px] flex items-center gap-3'>
        <p className='flex items-center gap-1 text-sm text-white font-bold'>
            <Phone color='#fdb930' size={14} fill='#fdb930' />
            +254712345678
        </p>
        <a mailto='info@immigration.com' className='flex items-center gap-1 text-sm text-white font-bold underline'>
            <Mail color='#fdb930' size={14} />
            info@immigration.com
        </a>
        <p className='flex items-center gap-1 text-sm text-white font-bold'>
            <Facebook color='#fdb930' size={14} />
            immigration
        </p>
        <p className='flex items-center gap-1 text-sm text-white font-bold'>
            <Twitter color='#fdb930' size={14} />
            @Immigration
        </p>
    </div>
  )
}

export default Banner