import { BrandLogo } from "@components/ui";
import Link from "next/link";
import { FC, useState } from "react";
import s from "./BannerDetails.module.scss";
import Image from "next/image";

const BannerDetails: FC = ({}) => {
  return (
    <div className={`${s.container} `}>
      <div className={`${s.BannerContainer}  container`}>
        {/* <div className={s.photoCred}>Photo Credit : Save the Children</div> */}

        <div className="row no-gutters">
          <div className="col-sm-6">
            <div className={s.leftContent}>
              <div className={s.heading}>
                Escalation of the armed conflict of Ukraine
              </div>
              <div className={s.details}>
                has resulted in increased humanitarian needs and population
                displacement within and outside of the country.
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className={`${s.imageCard}`}>
              <Image
                src="/images/layout/bannerDetails.jpg"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerDetails;
