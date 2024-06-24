import CookiePolicy from "@components/common/CookiePolicy";
import Layout from "@components/Layout";
import AppConstant from "constant/AppConstant";
// import { Footer, } from "@components/common";
import type { NextPage } from "next";
import Head from "next/head";
import { Footer2, Header } from "@components/common";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <link
          rel="canonical"
          href={`${AppConstant.SiteMeta.url}/cookie-policy`}
        />
        <title>{AppConstant.SiteMeta.title}</title>
        {/* <meta name="description" content={AppConstant.SiteMeta.description} /> */}
      </Head>
      <Header />
      <CookiePolicy />
      <Footer2 />
    </Layout>
  );
};

export default Home;
