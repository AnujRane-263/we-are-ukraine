import Layout from "@components/Layout";
import AppConstant from "constant/AppConstant";
// import { Footer, } from "@components/common";
import type { NextPage } from "next";
import Head from "next/head";
import { Footer2, Header } from "@components/common";
import TermsOfUse from "@components/common/TermsOfUse";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <link
          rel="canonical"
          href={`${AppConstant.SiteMeta.url}/terms-of-use`}
        />
        <title>{AppConstant.SiteMeta.title}</title>
        {/* <meta name="description" content={AppConstant.SiteMeta.description} /> */}
      </Head>
      <Header />
      <TermsOfUse />
      <Footer2 />
    </Layout>
  );
};

export default Home;
