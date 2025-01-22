import React from 'react'
import { CONTACT } from '../constants'
import { BiMailSend, BiMapPin, BiPhone } from 'react-icons/bi'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="space-y-8 text-center">
        {/* Address */}
        <div className="flex items-center justify-center space-x-3">
          <BiMapPin className="w-5 h-5 text-neutral-600" aria-hidden="true" />
          <address className="not-italic">
            {CONTACT.address}
          </address>
        </div>

        {/* Phone */}
        <div className="flex items-center justify-center space-x-3">
          <BiPhone className="w-5 h-5 text-neutral-600" aria-hidden="true" />
          <a
            href={`tel:${CONTACT.phoneNo.replace(/\s+/g, '')}`}
            className="hover:text-neutral-600 transition-colors duration-200"
          >
            {CONTACT.phoneNo}
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center justify-center space-x-3">
          <BiMailSend className="w-5 h-5 text-neutral-600" aria-hidden="true" />

          <a href={`mailto:${CONTACT.email}`}
            className="border-b border-neutral-600 hover:border-neutral-900 transition-colors duration-200"
          >
            {CONTACT.email}
          </a>
        </div>
      </div>
      
    </div>
  )
}

export default Contact