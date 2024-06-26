import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/effect-fade";
import "nprogress/nprogress.css";
import "../styles/theme.scss";
import type { AppProps } from "next/app";
import NProgress from "nprogress";
import Router from "next/router";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   const initializeWeglot = () => {
  //     const script = document.createElement('script');
  //     script.src = 'https://cdn.weglot.com/weglot.min.js';
  //     script.async = true;
  //     document.body.appendChild(script);

  //     script.onload = () => {
  //       (window as any).Weglot.initialize({
  //         api_key: 'wg_483a30b01475dffe292de868cb6e87d27',
  //       });
  //     };
  //   };

  //   initializeWeglot();
  // }, []);
  useEffect(() => {
    const initializeSmartcat = () => {
      const script = document.createElement('script');
      script.id = 'sc-script';
      script.src = "https://cdn.smartcat-proxy.com/d2d6b77570274823b01dce89f6e5c9f8/script-v1/__translator.js?hash=c734e5efbb79fc79ffa785e04a1ef6f3";
      script.async = true;
      document.body.appendChild(script);
    };

    initializeSmartcat();
  }, []);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
