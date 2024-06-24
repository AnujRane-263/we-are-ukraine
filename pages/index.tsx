import { Footer, Footer2, Header } from "@components/common";
import CheckOpenSea from "@components/common/CheckOpenSea";
import {
  Banner,
  BannerDetails,
  HomeGrid,
  HomeSlider,
  HomeSwipe,
  HomeSwiper,
  OpenSea,
  Partners,
} from "@components/home";
import Layout from "@components/Layout";
import AppConstant from "constant/AppConstant";
// import { Footer, } from "@components/common";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <Layout className="page-home">
      <Head>
        <link rel="canonical" href={`${AppConstant.SiteMeta.url}`} />
        <title>{AppConstant.SiteMeta.title}</title>
        {/* <meta name="description" content={AppConstant.SiteMeta.description} /> */}
      </Head>

      <Header />
      <Banner />
      {/* <BannerDetails /> */}
      <HomeGrid />
      {/* <HomeSwipe /> */}
      {/* <HomeSlider /> */}
      <HomeSwiper />
      <Partners />
      <Footer2 />
      {/* <OpenSea /> */}
      {/* <CheckOpenSea /> */}
      {/* <Footer /> */}
    </Layout>
  );
};

export default Home;
