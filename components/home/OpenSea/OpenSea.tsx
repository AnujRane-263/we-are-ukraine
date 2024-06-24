import { BrandLogo } from "@components/ui";
import Link from "next/link";
import { FC, useState } from "react";
import s from "./OpenSea.module.scss";
import Image from "next/image";
import AppConstant from "constant/AppConstant";

const OpenSea: FC = ({}) => {
  return (
    <div className={`${s.container} `} data-aos="fade-up">
      <div id="art" className="scroll-nav type3"></div>
      <div className={`${s.bannerContainer}  container`}>
        <div className={`${s.row}  row`}>
          <div className="col-sm-6">
            <Image
              src={"/images/layout/openSea.jpg"}
              alt=""
              width={500}
              height={400}
              objectFit="contain"
            />
          </div>

          <div className="col-sm-6 p-4 d-flex align-items-center justify-content-center ">
            <div>
              <h4>
                The generative collection is made of the most famous monuments
                in a number of cities across the country.
              </h4>
              <p>
                Assets will include corresponding verbiage; such as Kyiv is
                Ukraine, Lviv is Ukraine, Kharkiv is Ukraine and so on, with
                imagery of the relative landmarks found in that area. The
                purpose is to celebrate and honour Ukraine’s bold history and
                tell its story to the masses.
              </p>
              <div className={s.cta}>Check on OpenSea</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSea;
