import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./NFTItem.module.scss";

interface Props {
  img?: any;
  name?: any;
  link?: any;
  amount?: any;
}

const NFTItem: FC<Props> = ({ img, name, link, amount }) => {
  return (
    <div className={s.container}>
      <span className={s.external} />
      <div className={s.image}>
        <Image
          src={img}
          width={400}
          height={300}
          objectFit="contain"
          quality={100}
        />
      </div>
      <span className={s.name}>{name}</span>
      <span className={s.amount}>{amount}</span>
      <Link href="https://opensea.io/assets/ethereum/0x60e4d786628fea6478f785a6d7e704777c86a7c6/17924">
        <a target="_blank" className={s.btnAction}>
          Purchase
        </a>
      </Link>
    </div>
  );
};

export default NFTItem;
