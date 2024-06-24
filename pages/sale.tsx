import { Footer2, Header, NFTCollection } from "@components/common";
import { Banner } from "@components/home";
import Layout from "@components/Layout";
import AppConstant from "constant/AppConstant";
// import { Footer, } from "@components/common";
import type { NextPage } from "next";
import Head from "next/head";
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const Sale: NextPage = () => {
  return (
    <Layout className="page-home">
      <Head>
        <link rel="canonical" href={`${AppConstant.SiteMeta.url}/sale.`} />
        <title>{AppConstant.SiteMeta.title}</title>
      </Head>

      <Header />
      <Banner type="textBanner" />
      <NFTCollection />
      <Footer2 />
    </Layout>
  );
};

export default Sale;
