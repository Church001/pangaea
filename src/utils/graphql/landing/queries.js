import gql from 'graphql-tag';

/**
 * @description generates query for getting all producst based on currency
 * @param currency: String representing the currency
 * @returns graphql query for getting all products from the server
 * */ 
export const getAllProducts= (currency) => gql`
    query ALL_PRODUCTS {
        products{
            id
            title
            image_url
            price(currency:${currency})
            product_options{
              title
              options{
                id
                value
              }
            }
          }
    }
`;