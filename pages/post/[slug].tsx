import Head from 'next/head'
import React from 'react'
import Author from '../../components/Author'
import Categories from '../../components/Categories'
import Comment from '../../components/Comment'
import CommentForms from '../../components/CommentForms'
import Header from '../../components/Header'
import Postdetails from '../../components/Postdetails'
import Postwidget from '../../components/Postwidget'
import {  getPostDetails, getPosts } from '../../services'

interface Props {
  params : any
  post : any
  node : any
}



const PostDetails = ({post }: Props) => {


  console.log(post);
  

  return (

    
    <div className="container mx-auto px-5 mb-8">
      <Head>
        <title>{post.tittle}</title>
        <link rel="icon" href="https://buddytraveler.com/wp-content/uploads/2021/03/Capture-e1615401034628.png" />
      </Head>

      <Header />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-1'>
        <div className='lg:col-span-8 col-span-1'>
          <Postdetails post={post} />
          <Author author={post.author}/>
          <CommentForms slug={post.slug} />
          <Comment slug={post.slug}/>

        </div>
        <div className='lg:col-span-4 col-span-1 gap-y-2'>
            <div className='lg:sticky relative top-8'>
              <Postwidget slug={post.slug} categories={post.categories.map((Category: any)=> Category.slug)} />
              <Categories />
            </div>
        </div>

      </div>
      
    </div>
  )

}

export default PostDetails



export async function getStaticProps({params}: Props) {
  const data = await getPostDetails(params.slug)

  return {
    props: {post: data}
  }
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }: Props) => ({ params: { slug } })),
    fallback: true,
  };
}
