import Link from "next/link";
import React, { FC, useEffect, useRef, useState } from "react";
// import BrandLogo from "../BrandLogo";
import s from "./HeaderNav.module.scss";
import { useRouter } from "next/router";
import { BrandLogo } from "@components/ui";
import AppConstant from "constant/AppConstant";

interface Props {
  className?: any;
}

const Header: FC<Props> = ({ className }) => {
  const myRef = useRef(null);
  const useMountEffect = (fun: any) => useEffect(fun, []);

  const [menuActive, setMenuActive] = useState(false);
  const [subMenuActive, setSubMenuActive] = useState("");
  const { pathname }: any = "useRouter()";

  const onMenuItemClick = (item: any, e: any) => {
    const isMobile = window.innerWidth < 767;

    if (isMobile && item.subMenu) {
      setSubMenuActive(item.label);
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    setMenuActive(false);
  };

  const [clientWindowHeight, setClientWindowHeight] = useState(0);

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [logoHeight, setLogoHeight] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
    console.log(window.scrollY);
    setScroll(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 40 - backgroundTransparacyVar * 20 - 10;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
    if (clientWindowHeight > 50) {
      backgroundTransparacyVar = 0.8;
      setBackgroundTransparacy(backgroundTransparacyVar);
    }
  }, [clientWindowHeight]);

  return (
    // <div className ={s.container}>  new header</div>
    <>
      <div
        className={`${s.desktopHeaderContainer}  ${
          menuActive ? s.menuActive : ""
        } ${s[className]}`}
      >
        <div
          className={`${s.desktopHeader} ${s[className]}`}
          style={{
            background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
            padding: `${padding}px 1rem`,
            boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
          }}
        >
          {/* <div className={s.logo}> */}
          {/* <BrandLogo /> */}
          {/* </div> */}
          <div className={s.brandLogoMobile}>
            <BrandLogo />
          </div>
          <div
            className={s.hamBurgerMenu}
            onClick={() => {
              setMenuActive(!menuActive);
              setSubMenuActive("");
            }}
          >
            <span className={s.bar}></span>
            <span className={s.bar}></span>
            <span className={s.bar}></span>
          </div>
          <div className={s.nav}>
            <nav>
              <div
                className={s.brandLogo}
                style={
                  {
                    // width: `${padding}rem`,
                  }
                }
              >
                <BrandLogo widthClass={scroll > 100 ? "headerMain" : ""} />
              </div>
              <div className={s.leftMenu}>
                <ul>
                  {AppConstant.SiteMenuLeft.map((item, i) => (
                    <li
                      key={i}
                      onClick={() => {
                        setMenuActive(!menuActive);
                        setSubMenuActive("");
                      }}
                    >
                      <Link href={item.url}>
                        <a>{item.label}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={s.socialMenu}>
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

              <div className={s.hr}></div>
              <div className={s.rightMenu}>
                <ul>
                  {AppConstant.SiteMenuRight.map((item, i) => (
                    <li key={i}>
                      <Link href={item.url}>
                        <a>{item.label}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
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
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
