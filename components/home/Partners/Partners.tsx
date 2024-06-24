import { BrandLogo } from "@components/ui";
import Link from "next/link";
import { FC, useState } from "react";
import s from "./Partners.module.scss";
import Image from "next/image";
import AppConstant from "constant/AppConstant";
import NewsLetter from "@components/common/NewsLetter";

const Partners: FC = ({}) => {
  return (
    <div className={`${s.container} `}>
      <div id="partners" className="scroll-nav"></div>
      <div className={`${s.BannerContainer}  container`}>
        <div className={s.heading}>
          Inspired and created with the best partners
        </div>
        <div className="row  d-flex align-items-center justify-content-center">
          {AppConstant.PartnersCard.map((item, i) => (
            <div className="col-12 col-md-4" key={i}>
              <div
                className={` ${s.card}  ${item.link != "#" ? "" : s.static}`}
              >
                {/* <div
                  className={s.image}
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                ></div>

                <div className={s.text}>{item.text}</div> */}

                <Link href={item.link}>
                  <a target="_blank">
                    <Image
                      src={item.image}
                      alt=""
                      width={320}
                      height={160}
                      // layout="fill"xx
                      objectFit="contain"
                    />

                    <div className={s.name}>{item.name}</div>
                    <div className={s.designation}>{item.designation}</div>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="row  d-flex align-items-center justify-content-center">
          <div className="col-12 col-md-12">
            <div className={` ${s.card}  ${s.static}   `}>
              {/* <div
                  className={s.image}
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                ></div>

                <div className={s.text}>{item.text}</div> */}

              <div className={s.textWrapper}>
                show your support
                {/* <Image
                      src={"/images/layout/getInvolved.png"}
                      alt=""
                      width={1000}
                      height={320}
                      // layout="fill"
                      objectFit="contain"
                    /> */}
              </div>

              {/* <Link href="https://opensea.io/weareukrainenft">
                <a target="_blank">
                  <div className={`${s.circleImg}`}>
                    <div className={s.circleImgWrapper}>
                      <Image
                        src={"/images/layout/viewOnOpenSea.png"}
                        alt=""
                        width={240}
                        height={240}
                        // layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                </a>
              </Link> */}
            </div>
            <div className={s.newsLetter}>
              <NewsLetter />
            </div>
          </div>
        </div>
      </div>
      {/* <div id="art"></div> */}
    </div>
  );
};

export default Partners;
