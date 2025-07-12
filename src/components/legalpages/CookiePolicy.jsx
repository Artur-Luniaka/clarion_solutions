"use client";

import LegalBtn from "./LegalBtn";

const CookiePolicy = () => {
  return (
    <div className="container py-[40px] lg:py-[70px] w-[360px] md:w-[768px] lg:w-[1280px]">
      <LegalBtn />
      <h1 className="text-title-green font-actay-wide font-bold text-2xl leading-8 tracking-[-0.02em] mb-6 lg:text-4xl">
        Cookie Policy
      </h1>
      <p className="font-urbanist font-normal text-base text-primary-white mb-4 lg:text-xl lg:mb-6">
        This Cookie Policy describes how this website uses cookies and similar
        technologies during user interactions.
      </p>
      <h2 className="font-urbanist font-semibold text-xl text-title-green mb-4 lg:text-2xl lg:mb-6">
        Purpose of Cookies
      </h2>
      <p className="font-urbanist font-normal text-base text-primary-white mb-4 lg:text-xl lg:mb-6">
        Cookies are small text files that are stored on your device when you
        visit a website. They serve various purposes, including enabling core
        functionality, remembering user preferences, enhancing performance, and
        collecting analytical data to improve the overall user experience.
      </p>
      <h2 className="font-urbanist font-semibold text-xl text-title-green mb-4 lg:text-2xl lg:mb-6">
        Types of Cookies Used
      </h2>
      <p className="font-urbanist font-normal text-base text-primary-white mb-4 lg:text-xl lg:mb-6">
        This website may use different types of cookies depending on the
        functionality required. These may include cookies that are essential for
        the website to operate, as well as cookies used for performance
        monitoring, statistical analysis, and functionality enhancements. In
        some cases, third-party services integrated into the website may also
        place cookies through your browser.
      </p>
      <h2 className="font-urbanist font-semibold text-xl text-title-green mb-4 lg:text-2xl lg:mb-6">
        User Consent
      </h2>
      <p className="font-urbanist font-normal text-base text-primary-white mb-4 lg:text-xl lg:mb-6">
        Where required by applicable law, cookies that are not strictly
        necessary are only placed with the user’s informed consent. Upon your
        first visit to the website, you may be presented with a notice regarding
        the use of cookies. By continuing to browse the site after seeing this
        notice, you consent to the use of cookies as described in this policy
        unless you choose to disable them through your browser settings.
      </p>
      <h2 className="font-urbanist font-semibold text-xl text-title-green mb-4 lg:text-2xl lg:mb-6">
        Managing Cookies
      </h2>
      <p className="font-urbanist font-normal text-base text-primary-white mb-4 lg:text-xl lg:mb-6">
        Most modern browsers allow users to control cookies through their
        settings, including the ability to disable or delete cookies already
        placed. Please note that restricting cookies may affect the
        functionality of the website and reduce the quality of your browsing
        experience.
      </p>
      <h2 className="font-urbanist font-semibold text-xl text-title-green mb-4 lg:text-2xl lg:mb-6">
        Third-Party Cookies
      </h2>
      <p className="font-urbanist font-normal text-base text-primary-white mb-4 lg:text-xl lg:mb-6">
        Some cookies may be placed by third-party services used on this website.
        These third parties may collect information about your activity across
        this and other websites. The website owner is not responsible for the
        data practices of such third parties and encourages users to consult
        their respective cookie or privacy policies.
      </p>
      <h2 className="font-urbanist font-semibold text-xl text-title-green mb-4 lg:text-2xl lg:mb-6">
        Changes to This Policy
      </h2>
      <p className="font-urbanist font-normal text-base text-primary-white mb-4 lg:text-xl lg:mb-6">
        This Cookie Policy may be updated periodically to reflect changes in
        technology, legal requirements, or the website’s use of cookies. Users
        are encouraged to review this page regularly to stay informed about how
        cookies are used and how their data is managed.
      </p>
    </div>
  );
};

export default CookiePolicy;
