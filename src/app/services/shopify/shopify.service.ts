// import GraphQLClient from 'graphql-js-client';
import { GraphQLClient, gql } from 'graphql-request'
import { Injectable } from '@angular/core';
// This is the generated type bundle from graphql-js-schema
const uri = 'https://patrykkrol.myshopify.com/api/2021-10/graphql.json'; // <-- add the URL of the GraphQL server here
const token = 'e0ecfa0c1bae281a70ae7545d8251f21'

@Injectable({
  providedIn: 'root',
})
export class ShopifyService {


  async getAllProducts() {

    const graphQLClient = new GraphQLClient(uri)
    graphQLClient.setHeader('X-Shopify-Storefront-Access-Token', token)
    const query = gql`
    {
      products(first: 10) {
        edges {
          node {
            title
            images(first: 1) {
              edges {
                node {
                  src
                }
              }
            }
          }
        }
      }
    }
       
    `
    const product = await graphQLClient.rawRequest(query)
    const data = await graphQLClient.request(query)
    console.log('raw' + JSON.stringify(data, undefined, 2))
    console.log('request' + JSON.stringify(product, undefined, 2));

    return product;
  }



}