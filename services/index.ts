import {request, gql } from "graphql-request"

const graphqlAPI: String | any = process.env.NEXT_PUBLIC_BUDDY_TRAVELOR_ENDPOINT;

export const getPosts = async () => {
    const query = gql `
    query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                author
                bio
                id
                photo {
                  url
                }
              }
              content {
                raw
              }
              createdAt
              slug
              excerpt
              tittle
              featuredPost
              image {
                url
              }
              categories {
                slug
                category
              }
            }
          }
        }
      }         
    `

    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges
    

}
export const getPostDetails = async (slug: any) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        tittle
        excerpt
        image {
          url
        }
        author{
          author
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          category
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};



export const getSimilarPosts = async (categories: string, slug: [string]) => {
    const query = gql`
      query GetPostDetails($slug: String!, $categories: [String!]) {
        posts(
          where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
          last: 3
        ) {
          tittle
          image {
            url
          }
          createdAt
          slug
        }
      }
    `;
    const result = await request(graphqlAPI, query, { slug, categories });
  
    return result.posts;
  };

  export const getRecentPosts = async () => {
    const query = gql`
      query GetPostDetails() {
        posts(
          orderBy: createdAt_ASC
          last: 3
        ) {
          tittle
          image {
            url
          }
          createdAt
          slug
        }
      }
    `;
    const result = await request(graphqlAPI, query);
  
    return result.posts;
  };
  
  export const getCategories = async () => {
    const query = gql `
        query GetCategories{
            categories {
                category
                slug
            }
        }
    `;

    const result = await request(graphqlAPI, query);
  
    return result.categories ;


  }