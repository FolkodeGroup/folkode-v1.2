import React from 'react';
import { FaEnvelope, FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa6';
import { ChevronRight } from 'lucide-react'

export default function ContactDatos() {
  return (

    <section>
      <div className="w-full max-w-md dark rounded-xl flex flex-col h-full contactos aling-items-c">
        <div className="flex flex-wrap gap-4 mt-2 contactate mt-8 w-full md:w-100">
          <div className="flex w-full items-center gap-3 text-xs md:text-sm lg:text-base bg-[#025159] px-6 py-4 rounded-xl">
            <FaEnvelope title="Gmail" className="text-lg md:text-xl lg:text-2xl text-primary" />
            <a
              href="mailto:contactofolkode@gmail.com"
              className="flex w-full align-center items-center justify-center truncate font-medium hover:underline"
            >
              contactofolkode@gmail.com
              <ChevronRight className='ml-auto' />
            </a>

          </div>
          <div className="flex w-full items-center gap-3 text-xs md:text-sm lg:text-base bg-[#025159] px-6 py-4 rounded-xl">
            <FaWhatsapp title="Whatsapp" className="text-lg md:text-xl lg:text-2xl text-white" />
            <a
              href="https://wa.me/541131078008"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full align-center items-center truncate font-medium hover:underline"
            >
              WhatsApp
              <ChevronRight className='ml-auto' />
            </a>

          </div>
          <div className="flex items-center gap-3 text-xs md:text-sm lg:text-base">

            <a
              href="https://www.facebook.com/folkode"
              target="_blank"
              rel="noopener noreferrer"
              className="truncate font-medium hover:underline bg-[#025159!important] p-4 rounded-full"
            >
              <FaFacebook title="Facebook" className="text-lg md:text-xl lg:text-2xl text-white" />
            </a>
          </div>
          <div className="flex items-center gap-3 text-xs md:text-sm lg:text-base">

            <a
              href="https://www.instagram.com/fol.kode"
              target="_blank"
              rel="noopener noreferrer"
              className="truncate font-medium hover:underline bg-[#025159!important] p-4 rounded-full"
            >
              <FaInstagram title="Instagram" className="text-lg md:text-xl lg:text-2xl text-white" />
            </a>
          </div>
          <div className="flex items-center gap-3 text-xs md:text-sm lg:text-base">

            <a
              href="https://www.linkedin.com/in/folkode"
              target="_blank"
              rel="noopener noreferrer"
              className="truncate font-medium hover:underline bg-[#025159!important] p-4 rounded-full"
            >
              <FaLinkedin title="LinkedIn" className="text-lg md:text-xl lg:text-2xl text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
