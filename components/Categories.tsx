
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {getCategories} from '../services/index'

function Categories() {

  const [categories, setCategories] = useState([])

  useEffect(()=>{

    getCategories().then((results) => {
      setCategories(results)
    })

  },[])


  return (
    <div className='bg-white rounded-lg p-8 pb-12 mb-3 ml-2'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
          Categories
      </h3>
      <div>
        {categories.map((category: any) =>(
            <div key={category.slug} className='p-2 text-base text-gray-700'>
                <Link href={`/categories/${category.slug}`}>
                  {category.category}
                </Link>
            </div> 
        ))}
      </div>

    </div>
  )
}

export default Categories