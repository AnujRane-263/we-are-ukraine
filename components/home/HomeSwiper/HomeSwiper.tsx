import { BrandLogo } from "@components/ui";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./HomeSwiper.module.scss";
import AppConstant from "constant/AppConstant";
import React from "react";
import { NFTData } from "@components/common/NFTCollection/NFTData";
SwiperCore.use([Autoplay]);

const HomeSwiper: FC = ({}) => {
  const bulletList = useRef<HTMLDivElement>(null);
  const [swiper, setSwiper] = useState();
  useEffect(() => {
    if (swiper !== null) {
      // swiper.update();
    }
  }, [swiper]);

  const sliderOptions = {
    spaceBetween: 30,
    effect: "fade" as const,
    // allowTouchMove: false,
    speed: 300,
    watchSlidesProgress: true,
    // centeredSlides: true,
    loop: false,
    autoPlay: true,
    // speed: 600,
    autoplay: {
      delay: 1000,
      disableOnInteraction: true,
    },
    navigation: false,

    // direction: "vertical" as const,
    onBeforeInit: (swiperItem: any) => {
      setTimeout(() => {
        swiperItem.rebuildOnUpdate = true;
        setSwiper(swiperItem);
      });
    },
    pagination: {
      clickable: true,
      el: bulletList.current,
      type: "bullets" as const,
      bulletElement: "span",
      bulletClass: "m-swiper-dots",
      bulletActiveClass: "active",
      renderBullet: (index: number, className: string) => {
        return '<span class="' + className + '"></span>';
      },
    },
    breakpoints: {
      280: {
        slidesPerView: 1.9,
        centeredSlides: true,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 1.7,
        centeredSlides: true,
        spaceBetween: 30,
      },
      1200: {
        initialSlide: 2.4,
        slidesPerView: 4,
        centeredSlides: true,
      },
      1400: {
        initialSlide: 2.4,
        slidesPerView: 4,
        centeredSlides: true,
        // spaceBetween: 10,
        // slidesPerView: "auto" as const,
      },
    },
  };
  const sliderOptions2 = {
    spaceBetween: 20,
    effect: "fade" as const,
    // allowTouchMove: false,
    speed: 300,
    watchSlidesProgress: true,
    // centeredSlides: true,
    loop: false,
    autoPlay: true,
    // speed: 600,
    autoplay: {
      delay: 1000,
      reverseDirection: true,
      disableOnInteraction: true,
    },
    navigation: false,

    // direction: "vertical" as const,
    onBeforeInit: (swiperItem: any) => {
      setTimeout(() => {
        swiperItem.rebuildOnUpdate = true;
        // setSwiper(swiperItem);
      });
    },
    pagination: {
      clickable: true,
      el: bulletList.current,
      type: "bullets" as const,
      bulletElement: "span",
      bulletClass: "m-swiper-dots",
      bulletActiveClass: "active",
      renderBullet: (index: number, className: string) => {
        return '<span class="' + className + '"></span>';
      },
    },
    breakpoints: {
      280: {
        slidesPerView: 2.2,
      },
      768: {
        slidesPerView: 2.2,
      },
      1200: {
        slidesPerView: 4,
      },
      1400: {
        // initialSlide: 2.3,
        slidesPerView: 4,
        // centeredSlides: true,
        // spaceBetween: 20,
        // initialSlide: 2.2,
        // spaceBetween: 10,
        // slidesPerView: "auto" as const,
      },
    },
  };
  // const onMouseEnterHandler = () => {
  //   console.log("hi");
  //   // swiper.autoplay.start();
  // };

  const swiperRef = React.useRef<SwiperCore>();
  const onInit = (Swiper: SwiperCore): void => {
    swiperRef.current = Swiper;
  };
  const onMouseEnterHandler = () => {
    if (swiperRef.current) swiperRef.current.autoplay.stop();
    console.log(1);
  };
  const onMouseLeaveHandler = () => {
    if (swiperRef.current) swiperRef.current.autoplay.start();
    console.log(2);
  };

  const swiperRef2 = React.useRef<SwiperCore>();
  const onInit2 = (Swiper: SwiperCore): void => {
    swiperRef2.current = Swiper;
  };
  const onMouseEnterHandler2 = () => {
    if (swiperRef2.current) swiperRef2.current.autoplay.stop();
    console.log(1);
  };
  const onMouseLeaveHandler2 = () => {
    if (swiperRef2.current) swiperRef2.current.autoplay.start();
    console.log(2);
  };

  return (
    <div className={`${s.container} `}>
      <div className={` container`}>
        <div id="collection" className="scroll-nav type1"></div>
        <div className={s.text}>
          We are launching a charitable NFT <br />
          collection which will be available on OpenSea
        </div>
        <div className={`${s.subText}`}>
          The generative collection is made of the most famous <br /> monuments
          in a number of cities across the country
        </div>
        <div className={`${s.gridRows} `}>
          <div className={`${s.swiper}`}>
            <div
              onMouseEnter={onMouseEnterHandler}
              onMouseLeave={onMouseLeaveHandler}
            >
              <Swiper
                onMouseEnter={onMouseEnterHandler}
                onMouseLeave={onMouseLeaveHandler}
                onInit={onInit}
                {...sliderOptions}
                className={`${s.slider} ${s.centeredSlider} centeredSlider testimonial-slider`}
              >
                {NFTData.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className={`${s.singleItem}`}>
                      <div className={s.imageWrapper2}>
                        <div className={s.text}>
                          <div>
                            <div className={s.headingText}>
                              {item.title}
                              {/* <Image
                                src="/images/layout/kyiv.svg"
                                alt="We are Ukraine"
                                layout="fill"
                              /> */}
                            </div>
                            <div className={s.description}>{item.name}</div>
                          </div>
                        </div>

                        <img
                          src={item.img}
                          alt="Kyiv Logo"
                          // layout="fill"
                          // objectFit="cover"
                          // objectPosition="top center"
                          width={500}
                          height={400}
                          // loading="eager"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div
              onMouseEnter={onMouseEnterHandler2}
              onMouseLeave={onMouseLeaveHandler2}
            >
              <Swiper
                onInit={onInit2}
                {...sliderOptions2}
                className={`${s.slider} ${s.mobilehide} testimonial-slider`}
              >
                {NFTData.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className={`${s.singleItem}`}>
                      <div className={s.imageWrapper2}>
                        <div className={s.text}>
                          <div>
                            <div className={s.headingText}>
                              {item.title}
                              {/* <Image
                                src="/images/layout/kyiv.svg"
                                alt="We are Ukraine"
                                layout="fill"
                              /> */}
                            </div>
                            <div className={s.description}>{item.name}</div>
                          </div>
                        </div>

                        <img
                          src={item.img}
                          alt="Kyiv Logo"
                          // layout="fill"
                          // objectFit="cover"
                          // objectPosition="top center"
                          width={500}
                          height={400}
                          // loading="eager"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className={s.text}>
          Proceeds from the NFT
          <br /> sales will be donated to:
        </div>
        <div className={s.img}>
          <div className={s.imgWrapper}>
            <Image
              src="/images/layout/p4.png"
              className=""
              alt="Kyiv"
              width={435}
              height={150}
              objectFit="contain"
            />
          </div>
          <div className={s.imgWrapper}>
            <Image
              src="/images/layout/p5.png"
              className=""
              alt="kyiv"
              width={435}
              height={150}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSwiper;
