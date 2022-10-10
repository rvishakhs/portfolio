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
                markdown
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