const SiteMeta = {
  title: "We are Ukraine NFTs",
  description:
    "Donate your NFTs to Ukraine Crisis Relief Fund - Ukrainenfts Ukraine NFTs is an initiative to welcome the digital assets support for the Ukrainians during the war and crisis period. ",
  image: "https://ukraine-staging.vercel.app/images/layout/social-share.png",
  url: "https://weareukrainenft.org",
};

const SiteMenu = [
  {
    url: "",
    label: "about",
  },

  {
    url: "/",
    label: "whitepaper",
  },
  // {
  // 	url: '/',
  // 	label: 'Testimonial',
  // },
  {
    url: "/",
    label: "team,",
  },
];
const SiteMenuLeft = [
  {
    url: "/#about",
    label: "About",
  },

  {
    url: "/#collection",
    label: "Collection",
  },
  {
    url: "/#partners",
    label: "Partners",
  },
  // {
  //   url: "/sale",
  //   label: "Sale",
  // },
];

const LegalMenu = [
  {
    url: "/cookie-policy",
    label: "Cookie Policy",
  },

  {
    url: "/privacy-policy",
    label: "Privacy Policy",
  },
  {
    url: "/terms-of-use",
    label: "Terms of Use",
  },
  // {
  //   url: "#art",
  //   label: "Link",
  // },
];
const SiteMenuRight = [
  {
    url: "/#newsletter",
    label: "GET EARLY ACCESS",
  },
];

const SocialIcon = [
  {
    icon: "fab fa-facebook",
    label: "fb",
    url: "https://www.facebook.com/WeAreUkraineNFT/",
  },
  {
    icon: "fab fa-instagram",
    label: "insta",
    url: "https://www.instagram.com/weareukrainenft/",
  },
  {
    icon: "fab fa-twitter",
    label: "twitter",
    url: "https://twitter.com/WeAreUkraineNFT",
  },
];

const SliderCard = [
  {
    image: "/images/layout/slider-1.jpg",
    text: "Designed to raise awareness and charitable funding through the sale of 10,000 NFTs unique digital collectibles on OpenSea",
  },

  {
    image: "/images/layout/slide2.jpg",
    text: "Renderings of nationalistic monuments & cultural attributes of Ukraine, encompassing the vibrant colours of Ukraine’s flag",
  },

  {
    image: "/images/layout/slide-3.jpg",
    text: "All proceeds from the NFT sales will be donated to UNICEF’s Save the Children and Women for Women International",
  },
];
const PartnersCard = [
  {
    image: "/images/layout/logo5.png",
    text: "Designed to raise awareness & charitable funding through the sale of 10,000 unique collectible NFTs on OpenSea",
    link: "https://decentralisedinvestment.group/",
  },

  {
    image: "/images/layout/logo6.png",
    text: "Renderings of nationalistic monuments & cultural attributes of Ukraine, encompassing the vibrant colours of Ukraine’s flag",
    link: "https://www.xyzzy.ai/",
  },
  {
    image: "/images/layout/logo7.png",
    text: "Renderings of nationalistic monuments & cultural attributes of Ukraine, encompassing the vibrant colours of Ukraine’s flag",
    link: "https://instagram.com/bogdana.nazarova?igshid=YmMyMTA2M2Y=",
    name: "Bogdana Nazarova",
    designation: "Miss Ukraine",
  },

  // {
  //   image: "/images/layout/logo3.png",
  //   text: "All proceeds from the NFT sales will be donated to UNICEF’s Save the Children and Women for Women International",
  //   link: "#",
  // },
];

const Swiper = [
  {
    image: "/images/layout/s-1.jpg",
  },
  {
    image: "/images/layout/s-2.jpg",
  },
  {
    image: "/images/layout/s-1.jpg",
  },
  {
    image: "/images/layout/s-2.jpg",
  },
  {
    image: "/images/layout/s-1.jpg",
  },
];

export default {
  SiteMeta,
  SiteMenu,
  SiteMenuLeft,
  SiteMenuRight,
  SliderCard,
  PartnersCard,
  SocialIcon,
  Swiper,
  LegalMenu,
};
