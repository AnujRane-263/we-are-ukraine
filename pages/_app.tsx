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
  useEffect(() => {
    const initializeWeglot = () => {
      const script = document.createElement('script');
      script.src = 'https://cdn.weglot.com/weglot.min.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        (window as any).Weglot.initialize({
          api_key: 'wg_483a30b01475dffe292de868cb6e87d27',
        });
      };
    };

    initializeWeglot();
  }, []);
  // const router = useRouter();
  // for loader

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
