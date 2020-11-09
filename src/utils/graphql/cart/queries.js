import gql from 'graphql-tag';

/**
 * @description generates graphql query for fetching all currencies
 * */ 
export const GET_CURRENCIES = gql`
    query ALL_CURRENCIES {
        currency
    }
`;