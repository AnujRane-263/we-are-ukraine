import { BrandLogo } from "@components/ui";
import AppConstant from "constant/AppConstant";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./PrivacyPolicy.module.scss";

const PrivacyPolicy: FC = () => {
  return (
    <div className={s.container}>
      <div className={s.pageTitle}>PRIVACY POLICY</div>
      <p>
        <em>Last updated: 24 May 2022</em>
      </p>
      <p>
        <strong>INTRODUCTION</strong>
      </p>
      <p>
        Thank you for choosing to be part of the community
        (&ldquo;company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
        &ldquo;our&rdquo;). We are committed to protecting your personal
        information and your (&ldquo;the user&rsquo;&rsquo;) right to privacy.
        If you have any questions or concerns about our policy, or our practices
        with regards to your personal information, please contact us at{" "}
        <Link href="mailto:legal@decentralisedinvetsment.group">
          <a>legal@decentralisedinvetsment.group</a>
        </Link>
        .
      </p>
      <p>
        We understand that when you visit our website (&ldquo;Site&rdquo;) you
        trust us with your personal information.
      </p>
      <p>
        We take your privacy very seriously. In this privacy notice, we describe
        our privacy policy. We seek to explain to you in the clearest way
        possible what information we collect, how we use it and what rights you
        have in relation to it. We hope you take some time to read through it
        carefully, as it is important. If there are any terms in this privacy
        policy that you do not agree with, please discontinue use of our site
        and our services.
      </p>
      <p>
        {`This privacy policy applies to all information collected through our
        websites (such as) ("Apps"), and/or any related services, sales,
        marketing or events (we refer to them collectively in this privacy
        policy as the "Sites").`}
      </p>
      <p>
        <strong>
          Please read this privacy policy carefully as it will help you make
          informed decisions about sharing your personal information with us.{" "}
        </strong>
      </p>
      <p>
        <strong>TABLE OF CONTENTS</strong>
      </p>
      <ol>
        <li>WHAT INFORMATION DO WE COLLECT?</li>
        <li>HOW DO WE COLLECT AND STORE DATA AND TRANSMIT YOUR INFORMATION?</li>
        <li>HOW WE PROTECT YOUR INFORMATION?</li>
        <li>HOW DO WE USE YOUR INFORMATION?</li>
        <li>WILL YOUR INFORMATION BE SHARED WITH ANYONE?</li>
        <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
        <li>IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</li>
        <li>WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</li>
        <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
        <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
        <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
        <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
        <li>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
        <li>DO WE MAKE UPDATES TO THIS POLICY?</li>
        <li>HOW CAN YOU CONTACT US?</li>
      </ol>
      <p>
        <strong>
          <br />{" "}
        </strong>
      </p>
      <h1>WHAT INFORMATION DO WE COLLECT?</h1>
      <p>
        <strong>Personal information you disclose to us</strong>
      </p>
      <p>
        We collect personal information that you voluntarily provide to us when
        expressing an interest in obtaining information about us or our products
        and services, when participating in activities on the Sites or otherwise
        contacting us.
      </p>
      <p>
        {`The personal information that we collect depends on the context of the
        user's interactions with us and the Sites, the choices you make and the
        products and features you use. The personal information we COLLECT can
        include the following:`}
      </p>
      <p>
        <u>Name and Contact Data</u>: We collect your first and last name, email
        address, postal address, phone number, and other similar contact data.
      </p>
      <p>
        <u>Credentials</u>: We collect passwords, password hints, and similar
        security information used for authentication and account access.
      </p>
      <p>
        <u>Payment Data</u>: We collect data necessary to process your payment
        if you make purchases, such as your payment instrument number (such as a
        credit card number), and the security code associated with your payment
        instrument. All payment data is stored by our payment processor, and you
        should review its privacy policies and contact the payment processor
        directly to respond to your questions.
      </p>
      <p>
        All personal information provided to us via the user must be true,
        complete and accurate, and the user is required to notify us of any
        changes to such personal information.
      </p>
      <h3>
        <strong>Information automatically collected</strong>
      </h3>
      <p>
        We automatically collect certain information when you visit, use or
        navigate the Sites. This information does not reveal your specific
        identity (like your name or contact information) but may include device
        and usage information, such as your IP address, browser and device
        characteristics, operating system, language preferences, referring URLs,
        device name, country, location, information about how and when you use
        our Site and other technical information. This information is primarily
        needed to maintain the security and operation of our Sites, and for our
        internal analytics and reporting purposes.
      </p>
      <p>
        Like many businesses, we also collect information through cookies and
        similar technologies. You can find out more about this in our Cookie
        Policy.
      </p>
      <p>
        <strong>Information collected from other Sources</strong>
      </p>
      <p>
        We may obtain information about you from other sources, such as public
        databases, joint marketing partners, social media platforms (such as
        Facebook), as well as from other third parties. Examples of the
        information we receive from other sources include: social media profile
        information (your full name, gender, date of birth, email address,
        current city, state and country, user identification numbers for your
        contacts, profile picture URL and any other information that you choose
        to make public); marketing leads and search results and links, including
        paid listings (such as sponsored links).
      </p>
      <p>
        <strong>
          HOW DO WE COLLECT AND STORE DATA AND TRANSMIT YOUR INFORMATION?
        </strong>
      </p>
      <p>
        We usually collect and store information including in paper, physical
        and electronic form provided by you when you communicate with us by
        telephone, email, web-based form, letter, facsimile or other means,
        including when:
      </p>
      <ul>
        <li>you contact us over the phone;</li>
        <li>
          we provide you with our services via telephone, email or our Sites;
        </li>
        <li>
          we provide you with assistance or support for our products or
          services;
        </li>
        <li>
          you participate in our functions, events or activities or on our
          social media pages;
        </li>
        <li>
          you request that we provide you with information concerning our
          products or services;
        </li>
        <li>you upload or submit information to us or our Sites; or</li>
        <li>
          you complete any forms requesting information from you, including on
          registration with us, complete any survey or provide feedback to us
          concerning our products or services.
        </li>
      </ul>
      <p>
        Where practicable we will only collect information from you personally.
        However, we will also collect your information through our partners and
        third parties who supply services to us.
      </p>
      <p>
        Please note that we use our own and third party computer servers
        including our Site hosts, data backups and payment gateway(s), which may
        be located Overseas and your information will likely be stored and
        transmitted Overseas as part of the normal operation of our business.
      </p>
      <p>
        We also collect information from your computer or mobile device
        automatically when you browse our Sites. This information may include:
      </p>
      <ul>
        <li>the date and time of your visit;</li>
        <li>your domain;</li>
        <li>locality;</li>
        <li>operating system;</li>
        <li>
          the server your computer or mobile is using to access our Sites;
        </li>
        <li>your browser and version number;</li>
        <li>
          search terms you have entered to find our Sites or access our Sites;
        </li>
        <li>
          pages and links you have accessed both on our Sites and on other
          websites;
        </li>
        <li>the last website you visited;</li>
        <li>the pages of our Sites that you access;</li>
        <li>the device you use to access our Sites; and</li>
        <li>your IP Address.</li>
      </ul>
      <p>
        While we do not use some of this information to identify personally, we
        may record certain information about your use of our Sites such as which
        pages you visit and the time and date of your visit and that information
        could potentially be used to identify you.
      </p>
      <p>
        It may be possible for us to identify you from information collected
        automatically from your visit(s) to our Sites. If you have registered an
        account with us, we will able to identify you through your user name and
        password when you log into our Sites. Further, if you access our Sites
        via links in an email we have sent you, we will be able to identify you.
      </p>
      <p>
        The device you use to access our Sites may collect information about you
        including your location using longitude and latitude co-ordinates
        obtained through GPS, Wi-Fi or cell site tri-angulation.
      </p>
      <p>
        For information about your ability to restrict the collection and use of
        such information, please use the settings available on your device.
      </p>
      <p>
        We may use statistical analytics software tools and software known as
        cookies which transmit data to third party servers located Overseas. To
        our knowledge, our analytic providers do not identify individual users
        or associate your IP Address with any other data held by them.
      </p>
      <p>
        <strong>HOW WE PROTECT YOUR INFORMATION? </strong>
      </p>
      <p>
        We will endeavour to take all reasonable steps to keep secure and
        protect any information which we hold about you, including:
      </p>
      <ul>
        <li>securing our physical premises and digital storage media;</li>
        <li>
          using technologies to ensure that your information is encrypted and
          sent across the Internet securely;
        </li>
        <li>
          placing password protection and access control over our information
          technology systems and databases to limit access and protect
          electronic information from unauthorised interference, access,
          modification and disclosure; and
        </li>
        <li>taking regular back-ups of our electronic systems.</li>
      </ul>
      <p>
        Notwithstanding that we will take all reasonable steps to keep your
        information secure, data transmission over the internet is never
        guaranteed to be completely secure. We do not and cannot warrant the
        security of any information you transmit to us or from any online
        services.
      </p>
      <p>
        <strong>HOW DO WE USE YOUR INFORMATION?</strong>
      </p>
      <p>
        We use personal information collected via our Sites for a variety of
        business purposes described below.
      </p>
      <p>
        {`We process your personal information for these purposes in reliance on
        our legitimate business interests ("Business Purposes"), in order to
        enter into or perform a contract with you ("Contractual"), with your
        consent ("Consent"), and/or for compliance with our legal obligations
        ("Legal Reasons"). We indicate the specific processing grounds we rely
        on next to each purpose listed below. We use the information we collect
        or receive:`}
      </p>
      <ul>
        <li>
          <u>To facilitate account creation and logon process</u>: If you choose
          to link your account with us to a third party account (such as your
          Google or Facebook account), we use the information you allowed us to
          collect from those third parties to facilitate account creation and
          logon process.
        </li>
        <li>
          <u>To send you marketing and promotional communications</u>:{" "}
          {`We and/or
          our third party marketing partners may use the personal information
          you send to us for our marketing purposes, if this is in accordance
          with your marketing preferences. You can opt-out of our marketing
          emails at any time (see the "Your Privacy Rights" below).`}
        </li>
        <li>
          <u>To protect our Sites</u>: We may use your information as part of
          our efforts to keep our Sites safe and secure (for example, for fraud
          monitoring and prevention).
        </li>
        <li>
          <u>To enforce our terms, conditions and policies</u>: for Business
          Purposes, Legal Reasons and/or possibly Contractual.
        </li>
        <li>
          <u>To respond to legal requests and prevent harm</u>: If we receive a
          subpoena or other legal request, we may need to inspect the data we
          hold to determine how to respond.
        </li>
        <li>
          <u>For other Business Purposes</u>: We may use your information for
          other Business Purposes, such as data analysis, identifying usage
          trends, determining the effectiveness of our promotional campaigns and
          to evaluate and improve our Sites, products, services, marketing and
          your experience.
        </li>
      </ul>
      <h3>WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h3>
      <p>
        We only share and disclose your information in the following situations:
      </p>
      <ul>
        <li>
          <u>Compliance with Laws</u>. We may disclose your information where we
          are legally required to do so in order to comply with applicable law,
          governmental requests, a judicial proceeding, court order, or legal
          process, such as in response to a court order or a subpoena (including
          in response to public authorities to meet national security or law
          enforcement requirements).
        </li>
        <li>
          <u>Vital Interests and Legal Rights</u>. We may disclose your
          information where we believe it is necessary to investigate, prevent,
          or take action regarding potential violations of our policies,
          suspected fraud, situations involving potential threats to the safety
          of any person and illegal activities, or as evidence in litigation in
          which we are involved.
        </li>
        <li>
          <u>Vendors, Consultants and Other Third-Party Service Providers</u>.
          We may share your data with:
          <ul>
            <li>
              our related entities, employees, officers, agents, contractors,
              other companies that provide services to us, sponsors, government
              agencies or other third parties to satisfy the purposes for which
              the information was collected (as outlined above) or for another
              purpose if that other purpose is closely related to the primary
              purpose of collection and an individual would reasonably expect us
              to disclose the information for that secondary purpose;
            </li>
            <li>
              third parties who help us to verify the identity of our clients
              and customers, and other software service providers who assist us
              to provide the services we provide to you;
            </li>
            <li>
              third parties who help us analyse the information we collect so
              that we can administer, support, improve or develop our business
              and the services we provide to you;
            </li>
            <li>
              merchants and the recipients of funds to identify you as the
              sender of the funds and to a party whom sends you funds in
              connection with a transfer to you of funds;
            </li>
            <li>
              third parties, including those in the blockchain and fintech
              industry, marketing and advertising sectors, to use your
              information in order to let you know about goods and services
              which may be of interest to you;
            </li>
            <li>
              our professional advisers such as consultants, bankers,
              professional indemnity insurers, brokers and auditors so that we
              can meet our regulatory obligations, and administer, support,
              improve or develop our business;
            </li>
            <li>
              to debt recovery agencies who assist us with the recovery of debts
              owed to us.
            </li>
          </ul>
        </li>
        <li>
          <u>Restructure, Merger, Acquisition</u>. We may disclose personal
          information collected from you to facilitate the sale of all or a
          substantial part of our assets or business or to companies with which
          we propose to merge or who propose to acquire us and their advisers.
          In the event of a proposed restructure or sale of our business (or
          part of our business) or where a company proposes to acquire or merge
          with us, we may disclose personal information to the buyer and their
          advisers without your consent subject to compliance with the law If we
          sell the business and the sale is structured as a share sale, you
          acknowledge that this transaction will not constitute the
          &lsquo;transfer&rsquo; of personal information.
        </li>
        <li>
          <u>With your Consent</u>. We may disclose your personal information
          for any other purpose with your consent.
        </li>
      </ul>
      <h2>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
      <p>
        We may use cookies and similar tracking technologies (like web beacons
        and pixels) to access or store information. Specific information about
        how we use such technologies and how you can refuse certain cookies is
        set out in our <Link href="/cookie-policy">
          <a>Cookie Policy</a>
        </Link>.

      </p>
      <h3>IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h3>
      <p>
        Our servers are located in India. If you are accessing our Sites from
        outside India, please be aware that your information may be transferred
        to, stored, and processed by us in our facilities and by those third
        parties with whom we may share your personal information (see &ldquo;
        <em>WILL YOUR INFORMATION BE SHARED WITH ANYONE?</em>&rdquo; Section
        above), in India and other countries.
      </p>
      <p>
        If you are a resident in the European Economic Area, then these
        countries may not have data protection or other laws as comprehensive as
        those in your country. We will however take all necessary measures to
        protect your personal information in accordance with this privacy policy
        and applicable law.
      </p>
      <h3>WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</h3>
      <p>
        The Sites may contain advertisements from third parties that are not
        affiliated with us and which may link to other websites, online services
        or mobile applications. We cannot guarantee the safety and privacy of
        data you provide to any third parties. Any data collected by third
        parties is not covered by this privacy policy. We are not responsible
        for the content or privacy and security practices and policies of any
        third parties, including other websites, services or applications that
        may be linked to or from the Sites. You should review the policies of
        such third parties and contact them directly to respond to your
        questions.
      </p>
      <h3>HOW LONG DO WE KEEP YOUR INFORMATION?</h3>
      <p>
        We will only keep your personal information for as long as it is
        necessary for the purposes set out in this privacy policy, unless a
        longer retention period is required or permitted by law (such as tax,
        accounting or other legal requirements). No purpose in this policy will
        require us keeping your personal information for longer than 1 year.
      </p>
      <p>
        When we have no ongoing legitimate business need to process your
        personal information, we will either delete or anonymize it, or, if this
        is not possible (for example, because your personal information has been
        stored in backup archives), then we will securely store your personal
        information and isolate it from any further processing until deletion is
        possible.
      </p>
      <h3>HOW DO WE KEEP YOUR INFORMATION SAFE?</h3>
      <p>
        We have implemented appropriate technical and organizational security
        measures designed to protect the security of any personal information we
        process. However, please note that we cannot guarantee that the internet
        in itself is 100% secure. Although we will do our best to protect your
        personal information, transmission of personal information to and from
        our Sites is at your own risk. We would like to advise our users to only
        access the services within a secure environment.
      </p>
      <h3>DO WE COLLECT INFORMATION FROM MINORS?</h3>
      <p>
        We do not knowingly solicit data from or market to children under 18
        years of age. By using the Sites, you represent that you are at least 18
        years of age or that you are the parent or guardian of such a minor and
        consent to such minor dependent&rsquo;s use of the Site and Apps. If we
        learn that personal information from users less than 18 years of age has
        been collected, we will deactivate the account and take reasonable
        measures to promptly delete such data from our records. If you become
        aware of any data we have collected from children under age 18, please
        contact us at{" "}
        <Link href="mailto:legal@decentralisedinvetsment.group">
          <a>legal@decentralisedinvetsment.group</a>
        </Link>
        .
      </p>
      <h3>WHAT ARE YOUR PRIVACY RIGHTS?</h3>
      <p>
        In some regions (like the European Economic Area), you have certain
        rights under applicable data protection laws. &nbsp;These may include
        the right (i) to request access and obtain a copy of your personal
        information, (ii) to request rectification or erasure; (iii) to restrict
        the processing of your personal information; and (iv) if applicable, to
        data portability. In certain circumstances, you may also have the right
        to object to the processing of your personal information. To make such a
        request, please email us at{" "}
        <strong>
          <Link href="mailto:legal@decentralisedinvetsment.group">
            <a>legal@decentralisedinvetsment.group</a>
          </Link>
        </strong>
        . We will consider and act upon any request in accordance with
        applicable data protection laws. &nbsp;
      </p>
      <p>
        If we are relying on your consent to process your personal information,
        you have the right to withdraw your consent at any time. Please note
        however that this will not affect the lawfulness of the processing
        completed before its withdrawal.
      </p>
      <p>
        If you are resident in the European Economic Area and you believe we are
        unlawfully processing your personal information, you also have the right
        to lodge a complaint to your local data protection supervisory
        authority.
      </p>
      <p>
        <u>Cookies and similar technologies</u>: Most Web browsers are set to
        accept cookies by default. If you prefer, you can usually choose to set
        your browser to remove cookies and to reject cookies. If you choose to
        remove cookies or reject cookies, this could affect certain features or
        services of our Sites. For further information, please see our Cookie
        Policy.
      </p>
      <p>
        <u>Opting out of email marketing</u>: You can unsubscribe from our
        marketing email list at any time by clicking on the unsubscribe link in
        the emails that we send or by contacting us using the details provided
        below. You will then be removed from the marketing email list &ndash;
        however, we will still need to send you service-related emails that are
        necessary for the administration and use of your account. You can also
        opt-out by:
      </p>
      <ul>
        <li>
          Noting your preferences at the time you register your account with the
          Sites;
        </li>
        <li>
          Logging into your account settings and updating your preferences;
        </li>
        <li>Contacting us using the contact information provided below.</li>
      </ul>
      <h3>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h3>
      <p>
        California Civil Code Section 1798.83, also known as the &ldquo;Shine
        The Light&rdquo; law, permits our users who are California residents to
        request and obtain from us, once a year and free of charge, information
        about categories of personal information (if any) we disclosed to third
        parties for direct marketing purposes and the names and addresses of all
        third parties with which we shared personal information in the
        immediately preceding calendar year. If you are a California resident
        and would like to make such a request, please submit your request in
        writing to us using the contact information provided below.
      </p>
      <h3>DO WE MAKE UPDATES TO THIS POLICY?</h3>
      <p>
        We may update this privacy policy from time to time. The updated version
        will be indicated by an updated &ldquo;Revised&rdquo; date and the
        updated version will be effective as soon as it is accessible. If we
        make material changes to this privacy policy, we may notify you either
        by prominently posting a notice of such changes or by directly sending
        you a notification. We encourage you to review this privacy policy
        frequently to be informed of how we are protecting your information.
      </p>
      <h3>HOW CAN YOU CONTACT US?</h3>
      <p>
        If you have any queries in relation to this policy, you wish to access
        or correct the information we hold about you, or make a complaint,
        please contact us in writing at:
      </p>
      <p>
        <strong>
          <Link href="mailto:legal@decentralisedinvetsment.group">
            <a>legal@decentralisedinvetsment.group</a>
          </Link>
        </strong>
        ; or
      </p>
      <p>
        <strong>303 Shirley, Street, Nassau, Bahamas.</strong>
      </p>
      <p>
        We aim to acknowledge receipt of all privacy complaints from you within
        15 working days and resolve all complaints within 60 business days.
        Where we cannot resolve a complaint within that period, we will notify
        you of the reason for the delay as well as advising the time by which we
        expect to resolve the complaint.
      </p>
      <p>
        In order to disclose information to you in response to a request for
        access we may require you to provide us with certain information to
        verify your identity. Local laws may contain exceptions which may affect
        your right to access your information.
      </p>
      <p>
        We may (depending on the request) charge you a fee to access the
        information. We will inform you of any fees payable in respect of
        accessing your information prior to actioning your request. All requests
        for information will be handled in a reasonable period of time (within
        15 calendar days after the request is made).
      </p>
      <p>
        If you wish to have your information deleted, please contact us using
        the details above and we will take reasonable steps to delete the
        information (unless we are obliged to keep it for legal or auditing
        purposes). To the extent that any information is stored on a blockchain
        it may be impracticable, unfeasible or impossible to delete.
      </p>
      <p>
        In the event that you believe that there has been a breach of law, we
        invite you to contact us as soon as possible.
      </p>
      <p>
        If you are not satisfied with our handling of a complaint or the outcome
        of a complaint you may make an application to:{" "}
        <strong>
          <Link href="mailto:legal@decentralisedinvetsment.group">
            <a>legal@decentralisedinvetsment.group</a>
          </Link>
        </strong>
        ; or <strong>303 Shirley, Street, Nassau, Bahamas.</strong>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
