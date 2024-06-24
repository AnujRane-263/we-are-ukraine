import { BrandLogo } from "@components/ui";
import Link from "next/link";
import { FC, useState } from "react";
import s from "./HomeGrid.module.scss";
import Image from "next/image";

const HomeSwipe: FC = ({}) => {
  return (
    <div className={`${s.container} `}>
      <div className={`container`}>
        <div id="about" className="scroll-nav type1"></div>
        <div
          className={`${s.text} ${s.blueBg} ${s.textResponsive} ${s.pt3} ${s.mt1600}`}
        >
          The conflict has led to the{" "}
          <span className={s.redText1}>destruction</span> of key civilian <br />
          infrastructures and the <span className={s.redText2}>
            disruption
          </span>{" "}
          of social services
          <br /> and economic activity country-wide.
        </div>
        <div className={`${s.subText}`}>
          Escalation of the armed conflict of Ukraine has resulted in <br />
          increased humanitarian needs and population displacement <br />
          within and outside of the country.
        </div>
        <div className={`${s.gridRows} ${s.hideOnMob}`}>
          <div className={`${s.imgWrapper}`}>
            <Image
              src="/images/layout/grid6.jpg"
              className=""
              alt=""
              width={540}
              height={400}
              objectFit="cover"
            />
          </div>
          <div className={`${s.imgWrapper} `}>
            <Image
              src="/images/layout/grid5.jpg"
              className=""
              alt=""
              width={638}
              height={650}
              objectFit="cover"
            />
          </div>
          <div className={`${s.imgWrapper}`}>
            <Image
              src="/images/layout/grid4.jpg"
              className=""
              alt=""
              width={540}
              height={400}
              objectFit="cover"
            />
          </div>
        </div>
        <div className={`${s.gridRows2} ${s.hideOnMob} `}>
          <div className={`${s.headingMain}`}>Since 24 February 2022</div>

          <div className={s.ten}>
            <div className={s.heading}>10 MILLION</div>
            <div className={s.text}>
              people have been displaced due to
              <br /> escalation of violence in Ukraine
            </div>
          </div>
          <div className={s.seven}>
            <div className={s.heading}>7 MILLION</div>
            <div className={s.text}>
              internally displaced people <br /> who are still in Ukraine
            </div>
          </div>
          <div className={s.four}>
            <div className={s.heading}>4 MILLION</div>
            <div className={s.text}>
              refugees - half of them children - who
              <br /> have fled the country to seek shelter
            </div>
          </div>
        </div>

        <div className={s.statsSectionResponsive}>
          {/* <div className={s.statSingle}> */}
          <div className={s.subTitle}>Since 24 February 2022</div>
          {/* </div> */}
          <div className={s.statSingle}>
            <Image
              src="/images/layout/grid6.jpg"
              className=""
              alt=""
              width={540}
              height={400}
              objectFit="cover"
            />
            <div className={s.ten}>
              <div className={s.heading}>10 MILLION</div>
              <div className={s.text}>
                people have been displaced due to
                <br /> escalation of violence in Ukraine
              </div>
            </div>
          </div>

          <div className={`${s.statSingle} ${s.statSingle2}`}>
            <Image
              src="/images/layout/grid5.jpg"
              className=""
              alt=""
              width={638}
              height={650}
              objectFit="cover"
            />

            <div className={s.seven}>
              <div className={s.heading}>7 MILLION</div>
              <div className={s.text}>
                internally displaced people <br /> who are still in Ukraine
              </div>
            </div>
          </div>

          <div className={`${s.statSingle} ${s.statSingle3}`}>
            <Image
              src="/images/layout/grid4.jpg"
              className=""
              alt=""
              width={540}
              height={400}
              objectFit="cover"
            />
            <div className={s.four}>
              <div className={s.heading}>4 MILLION</div>
              <div className={s.text}>
                refugees - half of them children - who
                <br /> have fled the country to seek shelter
              </div>
            </div>
          </div>
        </div>
        <div className={`${s.text} ${s.textResponsive} `}>
          A number of children have also been caught in the <br />
          crossfire and have been{" "}
          <span className={s.redText3}> killed, injured </span>and <br />
          <span className={s.redText4}>traumatised</span>, highlighting the
          extremely vulnerable <br />
          situation Ukraine’s younger population is in.
        </div>
        <div className={`${s.gridRows} ${s.gridRows3} ${s.imgsSection}`}>
          <div className={`${s.imgWrapper}`}>
            <Image
              src="/images/layout/grid7.jpg"
              className=""
              alt=""
              width={540}
              height={400}
              objectFit="cover"
            />
            <div className={`${s.text} ${s.caption}`}>
              Photo Credit : Save the Children
            </div>
          </div>
          <div className={`${s.imgWrapper} `}>
            <Image
              src="/images/layout/grid8.jpg"
              className=""
              alt=""
              width={638}
              height={650}
              objectFit="cover"
            />
            <div className={`${s.text} ${s.caption}`}>
              Photo Credit : Save the Children
            </div>
          </div>
          <div className={`${s.imgWrapper}`}>
            <Image
              src="/images/layout/grid9.jpg"
              className=""
              alt=""
              width={540}
              height={400}
              objectFit="cover"
            />
            <div className={`${s.text} ${s.caption} ${s.captionLeft}`}>
              Photo Credit : Save the Children
            </div>
          </div>
        </div>

        <div className={s.text}>
          The war in Ukraine poses an immediate and <br /> growing threat to the
          lives and well-being <br />
          of the country’s{" "}
          <span className={s.yellowText1}>7.5 million children.</span>
        </div>
        <div className={`${s.subText} ${s.subText2}`}>
          They are in need of safety, stability and protection. As refugees,
          they are <br />
          at risk of human trafficking and exploitation. They need our help,
          urgently.
        </div>
      </div>
    </div>
  );
};

export default HomeSwipe;
