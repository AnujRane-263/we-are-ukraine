import { BrandLogo } from "@components/ui";
import AppConstant from "constant/AppConstant";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./CookiePolicy.module.scss";

const CookiePolicy: FC = () => {
  const handleClick = () => {
    window.open("https://weareukrainenft.org/");
  };
  return (
    <div className={s.container}>
      <div className={s.pageTitle}>Cookie POLICY</div>
      <h2>
        <em>Last updated: 24 May 2022</em>
      </h2>
      <p>
        This Cookie Policy explains how We are Ukraine website (
        <Link href="#">
          <a onClick={handleClick}>https://weareukrainenft.org/</a>
        </Link>
        ) uses cookies and similar technologies to recognize you when you visit
        our website. This policy explains what these technologies are, why we
        use them as well as your rights to control our use of them.
      </p>
      <h4 className={s.f16}>
        <strong>
          <u>What are Cookies?</u>
        </strong>
      </h4>
      <p>
        Cookies are small data files that are placed on your computer or mobile
        device when you visit a website. Cookies are widely used by website
        owners in order to make their websites work more efficiently, as well as
        to provide reporting information to the company.
      </p>
      <p>
        Cookies set by <strong>US</strong>, referred to as the owner, are called
        first party cookies. Cookies set by parties other than the website owner
        are called third party cookies. Third party cookies enable third party
        features or functionality to be provided on or through the website such
        as advertising, interactive content and analytics. The parties that set
        these third party cookies can recognize your computer both when it
        visits the website in question and also when it visits certain other
        websites.
      </p>
      <h4 className={s.f16}>
        <strong>
          <u>Why do we use Cookies?</u>
        </strong>
      </h4>
      <p>
        Some cookies are required for technical reasons in order for our
        websites to operate, we refer to these as essential cookies. Other
        cookies also enable us to track and target the interests of our users to
        enhance the experience on our online platforms. For this website we will
        not be making the use of third party information storage, therefore
        third party cookies do not apply in this instance.
      </p>
      <p>
        The purposes of the cookies used on this website are described below.
      </p>
      <h3>
        <strong>
          <u>Session cookies:</u>
        </strong>
      </h3>
      <h4 className={s.f16}>
        {` Session cookies (temporary cookies), help websites recognise users and
        the information provided when they navigate through a website. Session
        cookies only remember information about a user's activities for as long
        as they are on the website. Once the web browser is closed, the
        necessary cookies are deleted.`}
      </h4>
      <h3>
        <strong>
          <u>Permanent cookies:</u>
        </strong>
      </h3>
      <h4 className={s.f16}>
        {`Permanent cookies (persistent cookies), remain in operation even after
        the web browser has closed. For example, they can remember login details
        and passwords so web users don't need to re-enter them every time they
        use a site. These cookies must be deleted after 12 months.`}
      </h4>
      <h3>
        <strong>
          <u>First-party cookies:</u>
        </strong>
      </h3>
      <h4 className={s.f16}>
        First-party cookies are installed directly by the website (domain) the
        user is visiting (the URL in the address bar). These cookies enable
        website owners to collect analytics data, remember language settings,
        and perform other useful functions that provide a good user experience.
      </h4>
      <p>These cookies are:</p>
      <h4 className={s.f16}>
        <strong>
          <u>Performance and functionality cookies:</u>
        </strong>
      </h4>
      <p>
        These cookies are used to enhance the performance and functionality of
        our websites but are non-essential to their use. However, without these
        cookies, certain functionality may become unavailable.
      </p>
      <p>
        <strong>
          <u>Analytics and customization cookies:</u>
        </strong>
      </p>
      <p>
        These cookies collect information that is used either in aggregate form
        to help us understand how our website is being utilised or how effective
        our marketing campaigns are, or to help us customise our website to your
        set preference.
      </p>
      <h4 className={s.f16}>
        <strong>
          <u>Essential website cookies:</u>
        </strong>
      </h4>
      <p>
        These cookies are strictly necessary to provide you with services
        available through our website and to use some of its features, such as
        access to secured areas.
      </p>
      <h3>
        <strong>
          <u>Third-party cookies:</u>
        </strong>
      </h3>
      <h4 className={s.f16}>
        Third-party cookies are installed by third parties with the aim of
        collecting certain information from web users to carry out research
        into, for example, behaviour, demographics or spending habits. They are
        commonly used by advertisers who want to ensure that products and
        services are marketed towards the right target audience.
      </h4>
      <h3>
        <strong>
          <u>Flash cookies:</u>
        </strong>
      </h3>
      <h4 className={s.f16}>
        {`Flash cookies, also known as 'super cookies', are independent of the web
        browser. They are designed to be permanently stored on a user's
        computer. These types of cookies remain on a user's device even after
        all cookies have been deleted from their web browser.`}
      </h4>
      <h3>
        <strong>
          <u>Zombie cookies:</u>
        </strong>
      </h3>
      <h4 className={s.f16}>
        {`Zombie cookies are a type of flash cookie that is automatically
        re-created after a user has deleted them. This means they are difficult
        to detect or manage. They are often used in online games to prevent
        users from cheating but have also been used to install malicious
        software onto a user's device.`}
      </h4>
      <h4 className={s.f16}>&nbsp;</h4>
      <h4 className={s.f16}>
        <strong>
          <u>How often will this Cookie Policy be updated?</u>
        </strong>
      </h4>
      <p>
        We may update this Cookie Policy from time to time in order to reflect
        on any changes to the cookies we use or for other operational, legal or
        regulatory reasons. Please revisit this Cookie Policy regularly to stay
        informed about our use of cookies and related technologies
      </p>
      <p>
        <strong>
          <u>Where can I get further information?</u>
        </strong>
      </p>
      <p>
        If you have any questions about our use of cookies or other
        technologies, please email us at{" "}
        <a href="mailto:legal@decentralisedinvetsment.group">
          <strong>legal@decentralisedinvetsment.group</strong>
        </a>{" "}
        or in writing to:
      </p>
      <p>
        <strong>
          <em>POSTAL: 303 Shirley Street, Nassau, Bahamas.</em>
        </strong>
      </p>
    </div>
  );
};

export default CookiePolicy;
