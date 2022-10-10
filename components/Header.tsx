import Link from 'next/link'
import React from 'react'



function Header() {
    const categories = [
        {name: "Destination", slug:"destinations"},
        {name: "Activities", slug:"activities"},
        {name: "Blog", slug:"blog"},
        {name: "About Us", slug:"about"},
        {name: "Contact Us", slug:"contact"},
    ]
  return (
    <div className='container mx-auto px-3 md:px-10 mb-8 '>
        <div className='border-b flex flex-row justify-between w-full items-center border-blue-400 py-8'>
            <div className='flex flex-col items-center '>
                <Link href="/">
                    <span className='cursor-pointer font-bold text-2xl max-w-xs md:text-4xl text-black'>
                        Buddy Traveller
                    </span>
                </Link>
                <p className='hidden md:inline'>Don't be a tourist, Be a traveler</p>
            </div>

            <div className='hidden md:inline '>
                {categories.map(category => (
                    <Link key={category.slug} href={category.slug}>
                        <span className=' mt-2 align-middle text-black ml-4 cursor-pointer'>
                            {category.name}    
                        </span>
                    </Link>
                ))}


            </div>

        </div>
    </div>
  )
}

export default Header