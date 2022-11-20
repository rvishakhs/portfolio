import React from 'react';

import { getCategories, getCategoryPost } from '../../services';
import Postcard from '../../components/Postcard';
import Categories from '../../components/Categories';
import Head from 'next/head';
import Header from '../../components/Header';

interface Props {
  params : any
  posts : any
  slug : any
}




const CategoryPost = ({ posts }: Props) => {

console.log(posts);

  return (

    
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>{posts[0].node.categories[0].category}</title>
        <link rel="icon" href="https://buddytraveler.com/wp-content/uploads/2021/03/Capture-e1615401034628.png" />
      </Head>

      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post: any, index:any) => (
            <Postcard key={index} posts={post} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params} : Props) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug } : Props) => ({ params: { slug } })),
    fallback: true,
  };
}