import { useQuery, gql } from "@apollo/client";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import GET_ACTIVE_ITEMS from "../constants/subgraphQueries";

// const GET_ACTIVE_ITEMS = gql`
//   {
//     query
//     activeItems(first: 5, where: { buyer: "0x0000000000000000000000000000000000000000" }) {
//       id
//       buyer
//       seller
//       nftAddress
//       tokenId
//       price
//     }
//   }
// `;

export default function GraphExample() {
  const { loading, error, data } = useQuery(GET_ACTIVE_ITEMS);
  if (error) return <p>Error :(</p>;
  if (loading) return <p>Loading...</p>;
  return <div>Loaded!</div>;
}
