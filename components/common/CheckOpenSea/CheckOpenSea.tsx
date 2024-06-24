import s from "./CheckOpenSea.module.scss";
import Image from "next/image";
import Link from "next/link";
const CheckOpenSea = () => {
  return (
    <div className={`${s.container}`}>
      <div className={`${s.mainCard}`}>
        <div className={`${s.imageCard}`}>
          <Image src="/images/kyiv.png" alt="kyiv" width={528} height={450} />
        </div>
        <div className={`${s.contentCard}`}>
          <p>
            The generative collection is made of the most famous monuments in a
            number of cities across the country.
          </p>
          <p>
            Assets will include corresponding verbiage; such as Kyiv is Ukraine,
            Lviv is Ukraine, Kharkiv is Ukraine and so on, with imagery of the
            relative landmarks found in that area. The purpose is to celebrate
            and honour Ukraine’s bold history and tell its story to the masses.
          </p>
          <Link href="#">
            <a>
              <button id={`${s.btn}`}>Check on OpenSea</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckOpenSea;
