import { BrandLogo } from "@components/ui";
import AppConstant from "constant/AppConstant";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <div className={s.container}>
      <div className={s.socialWrapper}>
        <div className="container">
          <div className={`${s.footerContainer}`}>
            <BrandLogo className={`${s.bannerLogo}`} />
            {/* <Image 
              src={"/images/ukrainianLogo.png"}
              width={130}
              height={130}
              /> */}
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

              {/* <li>

                
                <Link href={""}>
                  <a href="#">Background</a>
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <a href="#">Collection</a>
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <a href="#">Partners</a>
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <a href="#">Art</a>
                </Link>
              </li> */}
            </ul>
            <div className={s.openSea}>
              <Link href="https://opensea.io/weareukrainenft">
                <a target="_blank">
                  <Image
                    src={"/images/openseaLogo.png"}
                    width={200}
                    height={60}
                    alt="openseaLogo"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
