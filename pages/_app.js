import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import Header from "../components/Header";
import Head from "next/head";
import { NotificationProvider } from "web3uikit";
import { ApolloProvider, ApolloClient, InMemoryCache, useQuery } from "@apollo/client";
import { GET_ACTIVE_ITEMS } from "../constants/subgraphQueries";

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache: cache,
  uri: "https://api.studio.thegraph.com/query/35808/nft-marketplace/v0.0.1",
});

//const APP_ID = "6ALuRt6L8Z8VzbrGtBaGK0PjUm1OonpcX7U9FRwk"; //process.env.NEXT_PUBLIC_APP_ID;
//const SERVER_URL = "https://ocba0yghvrf0.usemoralis.com:2053/server"; //process.env.NEXT_PUBLIC_SERVER_URL;
const APP_ID = process.env.NEXT_PUBLIC_MORALIS_APP_ID;
const SERVER_URL = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL;

//const { loading, error, data: listedNfts } = useQuery(GET_ACTIVE_ITEMS);
//console.log(`Look here! ${client.name}`);

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>NFT Marketplace</title>
        <meta name="description" content="NFT Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MoralisProvider initializeOnMount={false}>
        <ApolloProvider client={client}>
          <NotificationProvider>
            <Header />
            <Component {...pageProps} />
          </NotificationProvider>
        </ApolloProvider>
      </MoralisProvider>
    </div>
  );
}

export default MyApp;
