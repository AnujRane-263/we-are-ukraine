import Link from "next/link";
import React, { FC, useEffect, useRef, useState } from "react";
// import BrandLogo from "../BrandLogo";
import s from "./SaleOpenSea.module.scss";
import { useRouter } from "next/router";
import { BrandLogo } from "@components/ui";
import AppConstant from "constant/AppConstant";

const SaleOpenSea: FC = () => {
  const myRef = useRef(null);
  const useMountEffect = (fun: any) => useEffect(fun, []);

  const [menuActive, setMenuActive] = useState(false);
  const [subMenuActive, setSubMenuActive] = useState("");
  const { pathname }: any = "useRouter()";
  return (
    <div className={s.container}>
      <div className={s.iframeContainer}>
        <iframe
          src="https://opensea.io/collection/coolcopsclub"
          width="100%"
          className={s.iframe}
          height="1900px"
          frameBorder="0"
          id="allow1"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
export default SaleOpenSea;
