import React from 'react'
import Author from '../../components/Author'
import Categories from '../../components/Categories'
import Comment from '../../components/Comment'
import CommentForms from '../../components/CommentForms'
import Header from '../../components/Header'
import Postdetails from '../../components/Postdetails'
import Postwidget from '../../components/Postwidget'
import { getPosts } from '../../services'

const PostDetails = () => {
  return (
    
    <div className="container mx-auto px-10 mb-8">
      <Header />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-1'>
        <div className='lg:col-span-8 col-span-1'>
          <Postdetails  />
          <Author />
          <CommentForms />
          <Comment />

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

export default PostDetails

export async function getStaticProps() {
  const posts = (await getPosts() || [])

  return {
    props: {posts}
  }
}
