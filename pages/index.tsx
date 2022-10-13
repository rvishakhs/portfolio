import { AnyNsRecord } from 'dns'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Key } from 'react'
import Categories from '../components/Categories'
import Header from '../components/Header'
import Postcard from '../components/Postcard'
import Postwidget from '../components/Postwidget'
import { getPosts } from '../services'

interface Props {
  posts : any
}



const Home: NextPage = ({posts}:Props) => {


  console.log(posts);
  

  return (
<div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Buddy Traveler</title>
        <link rel="icon" href="https://buddytraveler.com/wp-content/uploads/2021/03/Capture-e1615401034628.png" />
      </Head>
        <Header />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-1'>

        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post: { tittle: Key | null | undefined }) => (
            <Postcard key={post.tittle} posts={post}  />
          ))}
        </div>
        <div className='lg:col-span-4 col-span-1 gap-y-2'>
            <div className='lg:sticky relative top-8'>
              <Postwidget />
              <Categories />
            </div>
        </div>
      </div>  
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const posts = (await getPosts() || [])

  return {
    props: {posts}
  }
}
