import { BrandLogo } from "@components/ui";
import Link from "next/link";
import { FC, useState } from "react";
import s from "./HomeSlider.module.scss";
import Image from "next/image";
import AppConstant from "constant/AppConstant";

const HomeSlider: FC = ({}) => {
  return (
    <div className={`${s.container} `}>
      <div className={`${s.BannerContainer}  container`} data-aos="fade-up">
        <div className={`${s.BannerRow} row ml-0 mr-0 pl-0 pr-0`}>
          {AppConstant.SliderCard.map((item, i) => (
            <div className={`${s.BannerCol} col-4`} key={i}>
              <div className={s.card}>
                <div
                  className={s.image}
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                ></div>
                <div className={s.text}>{item.text}</div>
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default HomeSlider;
