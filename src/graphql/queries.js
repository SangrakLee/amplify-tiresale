/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTireSale = /* GraphQL */ `
  query GetTireSale($id: ID!) {
    getTireSale(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTireSales = /* GraphQL */ `
  query ListTireSales(
    $filter: ModelTireSaleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTireSales(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
