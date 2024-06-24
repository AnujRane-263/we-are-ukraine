import { FC } from "react";
import s from "./Layout.module.scss";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";

interface Props {
  className?: string;
}
export const Layout: FC<Props> = ({ className, children }) => {
  return (
    <div className={`${s.container} ${className}`}>
      <main className={s.content}>{children}</main>

      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="GDPRPopup"
        containerClasses="cookiePopup"
        buttonClasses="GDPRButton"
        expires={150}
      >
        We use cookies to improve user experience and analyse website traffic.
        By clicking “Accept“, you agree to our {` website's`} cookie use as
        described in our{" "}
        <Link href="/cookie-policy">
          <a>Cookie Policy</a>
        </Link>
      </CookieConsent>
    </div>
  );
};

export default Layout;
