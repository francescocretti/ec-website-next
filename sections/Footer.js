import React from 'react'

const Footer = () => {
  return (
    <div className='bg-transparent w-100 px-10 py-2'>
      <div className='border-t p-5 font-righteous'>
        © {new Date().getFullYear()} Electric Circus
      </div>
    </div>
  )
}

export default Footer;