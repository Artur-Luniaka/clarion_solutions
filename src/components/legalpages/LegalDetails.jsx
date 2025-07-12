"use client";

import LegalBtn from "./LegalBtn";

const LegalDetails = () => {
  return (
    <div className="container py-[40px] lg:py-[70px] w-[360px] md:w-[768px] lg:w-[1280px]">
      <LegalBtn />
      <h1 className="text-title-green font-actay-wide font-bold text-2xl leading-8 tracking-[-0.02em] mb-6 lg:text-4xl">
        Legal Details
      </h1>
      <p className="font-urbanist font-normal text-base text-primary-white mb-4 lg:text-xl lg:mb-6">
        This website operates in accordance with applicable laws and regulations
        concerning digital services, copyright, and data protection.
      </p>
      <p className="font-urbanist font-normal text-base text-primary-white mb-4 lg:text-xl lg:mb-6">
        All materials published on this site, including but not limited to
        texts, images, graphics, and code, are protected by intellectual
        property laws. Unauthorized copying, distribution, or use of the content
        without prior written permission is strictly prohibited.
      </p>
      <p className="font-urbanist font-normal text-base text-primary-white mb-4 lg:text-xl lg:mb-6">
        The information presented on this website is provided for general
        informational purposes only and does not constitute legal, financial, or
        professional advice. While efforts are made to keep the content accurate
        and up to date, no guarantees are given regarding its completeness,
        accuracy, or relevance at any given time.
      </p>
      <p className="font-urbanist font-normal text-base text-primary-white mb-4 lg:text-xl lg:mb-6">
        Use of this website implies acceptance of the terms of use and legal
        disclaimers outlined herein. Any misuse, unauthorized access, or
        malicious activity may be subject to legal action under applicable
        legislation.
      </p>
      <p className="font-urbanist font-normal text-base text-primary-white mb-4 lg:text-xl lg:mb-6">
        The owner of this website reserves the right to update or modify legal
        notices, terms of service, and policy statements at any time without
        prior notice. Users are encouraged to review this page periodically to
        stay informed of any changes.
      </p>
      <p className="font-urbanist font-normal text-base text-primary-white mb-4 lg:text-xl lg:mb-6">
        This website may include references or links to third-party services or
        content. The presence of such references does not imply endorsement or
        legal responsibility for those external sources.
      </p>
      <p className="font-urbanist font-normal text-base text-primary-white mb-4 lg:text-xl lg:mb-6">
        All data processing activities carried out through this website,
        including collection and storage of any personal data (if applicable),
        are conducted in compliance with relevant data protection legislation.
        For more information, please refer to the privacy policy.
      </p>
      <p className="font-urbanist font-normal text-base text-primary-white mb-4 lg:text-xl lg:mb-6">
        The applicable jurisdiction and governing law shall be determined based
        on the website owner's place of business, unless otherwise required by
        mandatory provisions of law.
      </p>
    </div>
  );
};

export default LegalDetails;
