"use client";

import Link from "next/link";

const LegalBtn = () => {
  return (
    <Link
      href="/"
      className="flex items-center justify-center w-[170px] h-10 bg-primary-white rounded-[28px] text-primary-dark font-urbanist font-semibold text-sm leading-5 hover:bg-btn-green transition-colors duration-300 mb-10"
    >
      Back to Home
    </Link>
  );
};

export default LegalBtn;
