import "../styles/globals.scss";
import Layout from "../components/layout/Layout";
import App from "next/app";
import Head from "next/head";
import { createContext, useEffect } from "react";
import { fetchAPI } from "../util/getAPI";
import { getStrapiMedia } from "../util/media";

export const navContext = createContext({});

function MyApp({ Component, pageProps }) {
  const { global, links } = pageProps;
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon.data[0])}
        />
      </Head>
      <navContext.Provider value = {links.attributes}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </navContext.Provider>
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);

  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  });
  const navLinks = await fetchAPI("/header", {
    populate: "*",
  });
  return { ...appProps, pageProps: { global: globalRes.data, links: navLinks.data } };
};

export default MyApp;
