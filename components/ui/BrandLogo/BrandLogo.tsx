import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./BrandLogo.module.scss";

interface Props {
  className?: string;
  imagePath?: string;
  widthClass?: any;
}

const BrandLogo: FC<Props> = ({
  className = "",
  imagePath = "/images/logo.png",
  widthClass = "",
}) => (
  <Link href="/">
    <a className={`${s.logoWrapper} ${className}`}>
      <div className={`${s.logoContainer}  ${s[widthClass]} `}>
        <Image
          src={imagePath}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          loading="eager"
          alt="logo"
        />
      </div>
    </a>
  </Link>
);

export default BrandLogo;
