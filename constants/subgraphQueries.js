import { gql } from "@apollo/client";

const GET_ACTIVE_ITEMS = gql`
  {
    activeItems(first: 10, where: { buyer: "0x0000000000000000000000000000000000000000" }) {
      id
      buyer
      seller
      nftAddress
      tokenId
      price
    }
  }
`;
// const GET_ACTIVE_ITEMS = gql`
//   query ActiveItems {
//     activeItems(first: 5, where: { buyer: "0x00000000" }) {
//       id
//       buyer
//       seller
//       nftAddress
//       tokenId
//       price
//     }
//   }
// `;
export default GET_ACTIVE_ITEMS;
