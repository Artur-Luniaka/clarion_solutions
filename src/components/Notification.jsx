"use client";

import React from "react";

const Notification = ({
  message = "Message sent successfully!",
  isVisible,
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[10000] animate-slide-down w-[90%] max-w-md">
      <div className="bg-title-green text-primary-black px-4 py-3 md:px-6 md:py-4 rounded-lg shadow-lg border-2 border-primary-white">
        <div className="flex items-center justify-center gap-2 md:gap-3">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary-black rounded-full animate-pulse flex-shrink-0"></div>
          <span className="font-urbanist font-semibold text-xs md:text-sm">
            {message}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Notification;
