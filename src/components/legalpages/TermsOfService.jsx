"use client";

import LegalBtn from "./LegalBtn";

const TermsOfService = () => {
  return (
    <div className="container py-[40px] lg:py-[70px] w-[360px] md:w-[768px] lg:w-[1280px]">
      <LegalBtn />
      <h1 className="text-title-green font-actay-wide font-bold text-2xl leading-8 tracking-[-0.02em] mb-6 lg:text-4xl">
        Terms of Service
      </h1>
      <p className="font-urbanist font-normal text-base text-primary-white mb-4 lg:text-xl lg:mb-6">
        By accessing and using this website, you agree to comply with and be
        bound by the following terms and conditions. If you do not agree with
        any part of these terms, you must refrain from using this website.
      </p>
      <h2 className="font-urbanist font-semibold text-xl text-title-green mb-4 lg:text-2xl lg:mb-6">
        1. Use of the Website
      </h2>
      <p className="font-urbanist font-normal text-base text-primary-white mb-4 lg:text-xl lg:mb-6">
        This website is intended for lawful and personal use only. You agree not
        to use the site for any unlawful purpose, or in any way that could
        damage, disable, or impair the website or interfere with any other
        user’s experience.
      </p>
      <h2 className="font-urbanist font-semibold text-xl text-title-green mb-4 lg:text-2xl lg:mb-6">
        2. Intellectual Property
      </h2>
      <p className="font-urbanist font-normal text-base text-primary-white mb-4 lg:text-xl lg:mb-6">
        All content, including but not limited to text, graphics, logos, icons,
        and code, is the property of the website owner or licensed sources, and
        is protected by intellectual property laws. You may not reproduce,
        modify, or distribute any content without explicit permission.
      </p>
      <h2 className="font-urbanist font-semibold text-xl text-title-green mb-4 lg:text-2xl lg:mb-6">
        3. Limitation of Liability
      </h2>
      <p className="font-urbanist font-normal text-base text-primary-white mb-4 lg:text-xl lg:mb-6">
        The website and its content are provided "as is" without any warranties,
        either express or implied. The website owner shall not be held liable
        for any direct, indirect, incidental, or consequential damages arising
        out of your use or inability to use the website.
      </p>
      <h2 className="font-urbanist font-semibold text-xl text-title-green mb-4 lg:text-2xl lg:mb-6">
        4. Modifications
      </h2>
      <p className="font-urbanist font-normal text-base text-primary-white mb-4 lg:text-xl lg:mb-6">
        The website owner reserves the right to modify or replace these Terms of
        Service at any time. Continued use of the site after changes are
        published constitutes acceptance of those changes. It is your
        responsibility to review this page periodically.
      </p>
      <h2 className="font-urbanist font-semibold text-xl text-title-green mb-4 lg:text-2xl lg:mb-6">
        5. Third-Party Links
      </h2>
      <p className="font-urbanist font-normal text-base text-primary-white mb-4 lg:text-xl lg:mb-6">
        This website may contain links to third-party websites or services.
        These are provided for convenience only, and the website owner does not
        accept responsibility for the content or functionality of external
        sites.
      </p>
      <h2 className="font-urbanist font-semibold text-xl text-title-green mb-4 lg:text-2xl lg:mb-6">
        6. Termination
      </h2>
      <p className="font-urbanist font-normal text-base text-primary-white mb-4 lg:text-xl lg:mb-6">
        The website owner reserves the right to suspend or terminate your access
        to the website at any time, without notice, for conduct that violates
        these terms or is deemed harmful to the website or other users.
      </p>
      <h2 className="font-urbanist font-semibold text-xl text-title-green mb-4 lg:text-2xl lg:mb-6">
        7. Governing Law
      </h2>
      <p className="font-urbanist font-normal text-base text-primary-white mb-4 lg:text-xl lg:mb-6">
        These Terms of Service shall be governed and interpreted in accordance
        with the applicable laws of the jurisdiction in which the website owner
        is established.
      </p>
    </div>
  );
};

export default TermsOfService;
