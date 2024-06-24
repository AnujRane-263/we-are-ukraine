import { BrandLogo } from "@components/ui";
import AppConstant from "constant/AppConstant";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./Footer2.module.scss";

const Footer2: FC = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={`${s.logoImg}`}>
          <Link href="#">
            <a target="#">
              <div className={s.circleImgWrapper}>
                <Image
                  src={"/images/layout/footerLogo.png"}
                  alt="footerLogo"
                  width={400}
                  height={120}
                  // layout="fill"
                  objectFit="contain"
                />
              </div>
            </a>
          </Link>
        </div>
        <div className={s.menu}>
          <ul>
            {AppConstant.SiteMenuLeft.map((item, i) => (
              <li key={i}>
                <Link href={item.url}>
                  <a
                  // className={`${
                  //   item.label == "Contact Us" ? s.boxMenu : ""
                  // }  ${
                  //   pathname === item.url && item.label != "Contact Us"
                  //     ? s.activeLink
                  //     : ""
                  // } `}
                  // onClick={(e) => onMenuItemClick(item, e)}
                  >
                    {item.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={s.hr}></div>
      <div className={s.content2}>
        <div className={s.leftWrapper}>
          <div className={`${s.menu} mt-1 ${s.pl0}`}>
            <ul>
              {AppConstant.LegalMenu.map((item, i) => (
                <li key={i}>
                  <Link href={item.url}>
                    <a
                      className={`${s.bottomLinks}`}
                    // className={`${
                    //   item.label == "Contact Us" ? s.boxMenu : ""
                    // }  ${
                    //   pathname === item.url && item.label != "Contact Us"
                    //     ? s.activeLink
                    //     : ""
                    // } `}
                    // onClick={(e) => onMenuItemClick(item, e)}
                    >
                      {item.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={s.copywrightWrapper}>
            @ All rights reserved. Decentralised Investment Group 2022
          </div>
        </div>

        <div className={s.social}>
          <ul>
            {AppConstant.SocialIcon.map((item, i) => (
              <li key={i}>
                <Link href={item.url}>
                  <a target="_blank">
                    <i className={` fab  ${item.icon}`}></i>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
