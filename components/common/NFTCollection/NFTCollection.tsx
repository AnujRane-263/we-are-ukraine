import { FC, useEffect, useRef, useState } from "react";
import s from "./NFTCollection.module.scss";
import NFTItem from "./NFTItem";
import { NFTData } from "./NFTData";
import {
  Button,
  Dropdown,
  Form,
  Input,
  Menu,
  message,
  Space,
  Tabs,
} from "antd";
const { TabPane } = Tabs;
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

SwiperCore.use([Navigation, Autoplay]);

const onChange = (key: any) => {
  console.log(key);
};

const NFTCollection: FC = () => {
  const [swiper, setSwiper] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [topActiveMenu, setTopActiveMenu] = useState(false);

  useEffect(() => {
    if (swiper !== null && swiper !== undefined) {
      (swiper as any).update();
    }
  }, [swiper]);

  const filtered = NFTData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // useEffect(() => {
  //   const filtered = NFTData.filter((item) =>
  //     item.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  // }, [searchTerm]);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const handleButtonClick = (e: any) => {
    message.info("Click on left button.");
    console.log("click left button", e);
  };

  const handleMenuClick = (e: any) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  const sliderOptions = {
    spaceBetween: 20,
    effect: "fade" as const,
    // allowTouchMove: false,
    speed: 300,
    watchSlidesProgress: true,
    // centeredSlides: true,
    loop: true,
    // allowTouchMove: false,
    // autoPlay: false,
    // autoplay: {
    // 	delay: 3000,
    // 	disableOnInteraction: false,
    // }, // according to the codepen
    // speed: 600,
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: true,
    // },
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },

    // direction: "vertical" as const,
    onBeforeInit: (swiperItem: any) => {
      setTimeout(() => {
        swiperItem.rebuildOnUpdate = true;
        setSwiper(swiperItem);
      });
    },
    // pagination: {
    //   clickable: true,
    //   // el: bulletList.current,
    //   type: "bullets" as const,
    //   bulletElement: "span",
    //   bulletClass: "m-swiper-dots",
    //   bulletActiveClass: "active",
    //   renderBullet: (index: number, className: string) => {
    //     return '<span class="' + className + '"></span>';
    //   },
    // },
    breakpoints: {
      280: {
        slidesPerView: 2,
        // centeredSlides: true,
      },
      768: {
        slidesPerView: 2,
        // centeredSlides: true,
      },
      1200: {
        slidesPerView: 5,
        centeredSlides: true,
      },
      1400: {
        slidesPerView: 5,
        // centeredSlides: true,
        // initialSlide: 0.2,
        // spaceBetween: 10,
        // slidesPerView: "auto" as const,
      },
    },
  };

  const values = [
    { id: 1, text: "RECENTLY VIEWED" },
    { id: 2, text: "LAST PURCHASES" },
  ];
  const values2 = [
    { id: 1, text: "ALL" },
    { id: 2, text: "FILTER" },
  ];

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: "ALL",
          key: "1",
          icon: <UserOutlined />,
        },
        {
          label: "FILTER",
          key: "2",
          icon: <UserOutlined />,
        },
        {
          label: "FILTER",
          key: "3",
          icon: <UserOutlined />,
        },
      ]}
    />
  );
  const [activeId, setActiveId] = useState(values[0].id);
  const [activeId2, setActiveId2] = useState(values[0].id);

  return (
    <div className={s.container}>
      <div className={`${s.nftTopSlider} nftTopSlider`}>
        <ul>
          {values.map((val: any, i) => (
            <li
              onClick={() => setActiveId(val.id)}
              key={i}
              className={`${activeId === val.id ? s.active : ""}`}
            >
              <div>{val.text}</div>
              {/* {val.text} { "Active" : "Inactive"} */}
            </li>
          ))}
        </ul>
        {/* <Tabs defaultActiveKey="1" onChange={onChange}>
          <TabPane tab="Recently Viewed" key="1"> */}
        <Swiper
          // onMouseEnter={onMouseEnterHandler}
          // onMouseLeave={onMouseLeaveHandler}
          // onInit={onInit}
          {...sliderOptions}
          className={`${s.slider} testimonial-slider`}
        >
          {NFTData.map((item, i) => (
            <SwiperSlide key={i}>
              <div className={`${s.singleItem}`}>
                <NFTItem img={item.img} name={item.name} amount={item.amount} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={s.navigation}>
          <div
            className={`${s.arrow} ${s.prev} theme-swiper-arrow`}
            ref={navigationPrevRef}
          ></div>
          <div
            className={`${s.arrow} ${s.next} theme-swiper-arrow`}
            ref={navigationNextRef}
          ></div>
        </div>
        {/* </TabPane>

          <TabPane tab="Last Purchases" key="2">
            <Swiper
              // onMouseEnter={onMouseEnterHandler}
              // onMouseLeave={onMouseLeaveHandler}
              // onInit={onInit}
              {...sliderOptions}
              className={`${s.slider} testimonial-slider`}
            >
              {NFTData.slice(1).map((item, i) => (
                <SwiperSlide key={i}>
                  <div className={`${s.singleItem}`}>
                    <NFTItem img={item.img} name={item.name} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={s.navigation}>
              <div
                className={`${s.arrow} ${s.prev} theme-swiper-arrow`}
                ref={navigationPrevRef}
              ></div>
              <div
                className={`${s.arrow} ${s.next} theme-swiper-arrow`}
                ref={navigationNextRef}
              ></div>
            </div>
          </TabPane>
        </Tabs> */}
      </div>
      <span className={s.heading}>All items</span>

      <div className={`${s.nftBottomSlider} nftBottomSlider`}>
        <div className={s.topBox}>
          <ul>
            {values2.map((val: any, i) => (
              <li
                onClick={() => setActiveId2(val.id)}
                key={i}
                className={`${activeId2 === val.id ? s.active : ""}`}
              >
                <div>{val.text}</div>
                {/* {val.text} { "Active" : "Inactive"} */}
              </li>
            ))}
          </ul>
          <div className={s.inputSearchWrapper}>
            {/* <input
            type="text"
            placeholder="seach..."
            onChange={(e) => setSearchTerm(e.target.value)}
          /> */}

            <Form
              className={`${s.form} newsletter theme-form`}
              // form={form}
              // onFinish={onFinish}
            >
              <Form.Item
                name="email"
                className={s.search}
                // rules={[
                //   {
                //     required: true,
                //     type: "email",
                //   },
                // ]}
              >
                <Input
                  // placeholder="Enter your email address"
                  placeholder="Search NFT..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`${s.typeSpace}`}
                />
              </Form.Item>
            </Form>
            <div className={s.searchWrapper}>
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>
          </div>
          <div
            className={`${s.inputSearchWrapperMobile}  inputSearchWrapperMobile `}
          >
            <Space wrap>
              <Dropdown overlay={menu}>
                <Button>
                  <Space>
                    ALL
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </Space>
          </div>
        </div>

        {/* <Tabs defaultActiveKey="1" onChange={onChange}> */}
        {/* <TabPane tab="ALL" key="1"> */}
        <div className={`row ${s.row}`}>
          {filtered.length > 0 ? (
            NFTData.filter((item) => {
              if (searchTerm == "") {
                return item;
              } else if (
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return item;
              }
            }).map((val, index) => {
              return (
                <div className={`col-6 col-md-4 col-lg-3 ${s.col}`} key={index}>
                  <NFTItem img={val.img} name={val.name} amount={val.amount} />
                </div>
              );
            })
          ) : (
            <h1>No search results</h1>
          )}
        </div>

        <div className={s.pagination}>
          <Pagination
            className="site-pagination"
            defaultCurrent={1}
            total={50}
          />
        </div>
        {/* </TabPane> */}
        {/* <TabPane tab="FILTER" key="2">
            <div className={`row ${s.row}`}>
              {NFTData.filter((item) => {
                if (searchTerm == "") {
                  return item;
                } else if (
                  item.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return item;
                }
              }).map((val, index) => {
                return (
                  <div
                    className={`col-6 col-md-4 col-lg-3 ${s.col}`}
                    key={index}
                  >
                    <NFTItem img={val.img} name={val.name} />
                  </div>
                );
              })}
            </div>
            <div className={s.pagination}>
              <Pagination
                className="site-pagination"
                defaultCurrent={1}
                total={50}
              />
            </div>
          </TabPane>
          <TabPane tab="FILTER" key="3">
            FILTER
          </TabPane> */}

        {/* <TabPane tab="Last Purchases" key="2">
            {NFTData.map((item, index) => (
              <div className={`col-6 col-md-4 col-lg-3 ${s.col}`} key={index}>
                <NFTItem img={item.img} name={item.name} />
              </div>
            ))}
          </TabPane> */}
        {/* </Tabs> */}
      </div>
    </div>
  );
};

export default NFTCollection;
