import { BrandLogo } from "@components/ui";
import { FC, useState } from "react";
import s from "./Banner.module.scss";
import Image from "next/image";
import Link from "next/link";
import NewsLetter from "@components/common/NewsLetter";

interface Props {
  className?: string;
  type?: "" | "textBanner";
}

const Banner: FC<Props> = ({ className = "", type = "" }) => {
  return (
    <div className={`${s.container} ${s[type]}`} id="newsletter">
      <div className="container">
        <div className={s.bannerText}>
          {/* <h1 className="default-heading h1"> */}
          <div className={s.bannerTextImg}>
            <Image
              src="/images/layout/hero-text.svg"
              alt="We are Ukraine"
              layout="fill"
              className={s.deskImage}
            />
          </div>
          <div className={s.bannerTextImgMob}>
            <Image
              src="/images/layout/we-are-ukraine-mob.svg"
              alt="We are Ukraine"
              layout="fill"
              className={s.mobImage}
            />
          </div>
          {/* <span className={`${s.fontBrush}`}>
              We are <span className={s.div}>Ukraine</span>         
            </span>
            <br /> */}
          <h1 className={s.bText}>
            Charitable 10,000 NFT Collection to <br /> raise awareness of the
            war in Ukraine
            {/* <span> Get your NFT first!</span> */}
          </h1>
          {/* BACKED BY OPENSEA */}
          {/* </h1> */}
          {type !== "textBanner" && <NewsLetter className={s.newsletter} />}

          {/* <div className={s.ctaSection}>
            <NewsLetter />
            <div className={s.bannerCta}>
              <Link href="./">
                <div className={s.LearnMore}>
                  <a>VIEW COLLECTION</a>
                </div>
              </Link>
            </div>
            <div className={`${s.bannerCta} `}>
              <Link href="./">
                <div className={`${s.LearnMore}  ${s.style2}`}>
                  <a>LEARN MORE</a>
                </div>
              </Link>
            </div>
          </div> */}
          <div className={s.OpenSea}>
            <div className={s.text}>Available on</div>
            <div className={s.imgWrapper}>
              <Image
                src="/images/layout/openSe2.png"
                alt="OpenSea"
                width={148}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
