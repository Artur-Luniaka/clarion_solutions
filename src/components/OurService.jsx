"use client";

import Image from "next/image";
import arrow from "../../public/SVG/diagonal-arrow.svg";

const OurService = () => {
  const ourMob1 = "/IMG/our-one-mob.webp";
  const ourMob2 = "/IMG/our-two-mob.webp";
  const ourMob3 = "/IMG/our-three-mob.webp";
  const ourMob4 = "/IMG/our-four-mob.webp";
  const ourDesk1 = "/IMG/our-one-desk.webp";
  const ourDesk2 = "/IMG/our-two-desk.webp";
  const ourDesk3 = "/IMG/our-three-desk.webp";
  const ourDesk4 = "/IMG/our-four-desk.webp";
  const ourDesk5 = "/IMG/our-five-desk.webp";

  return (
    <section className="py-[45px] lg:py-[140px]">
      <div className="flex flex-wrap gap-4 lg:hidden">
        <div className="w-[152px]">
          <h2 className="font-actay-wide text-[24px] font-bold text-title-green leading-[29px] uppercase mb-5">
            Our services
          </h2>
          <p className="font-urbanist text-sm font-light text-primary-white">
            We help businesses grow through
          </p>
        </div>
        <button
          style={{
            backgroundImage: `url(${ourMob1})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
          className="w-[152px] h-[159px] py-5 px-4"
        >
          <div className="flex flex-col h-full">
            <h3 className="font-actay-wide text-sm font-bold text-primary-dark leading-[17px] tracking-[0.01em] uppercase text-left">
              Local SEO audit and strategy
            </h3>
            <div className="flex items-center justify-between mt-auto">
              <p className="font-urbanist text-xs font-semibold leading-5 text-primary-black">
                Learn more
              </p>
              <Image src={arrow} alt="arrow" width={12} height={12} />
            </div>
            <div className="border-b border-primary-black mt-[2px]" />
          </div>
        </button>
        <button
          style={{
            backgroundImage: `url(${ourMob2})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
          className="w-[152px] h-[159px] py-5 px-4"
        >
          <div className="flex flex-col h-full">
            <h3 className="font-actay-wide text-sm font-bold text-primary-dark leading-[17px] tracking-[0.01em] uppercase text-left">
              Google Business optimization
            </h3>
            <div className="flex items-center justify-between mt-auto">
              <p className="font-urbanist text-xs font-semibold leading-5 text-primary-black">
                Learn more
              </p>
              <Image src={arrow} alt="arrow" width={12} height={12} />
            </div>
            <div className="border-b border-primary-black mt-[2px]" />
          </div>
        </button>
        <button
          style={{
            backgroundImage: `url(${ourMob3})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
          className="w-[152px] h-[159px] py-5 px-4"
        >
          <div className="flex flex-col h-full">
            <h3 className="font-actay-wide text-sm font-bold text-primary-dark leading-[17px] tracking-[0.01em] uppercase text-left">
              Technical SEO setup
            </h3>
            <div className="flex items-center justify-between mt-auto">
              <p className="font-urbanist text-xs font-semibold leading-5 text-primary-black">
                Learn more
              </p>
              <Image src={arrow} alt="arrow" width={12} height={12} />
            </div>
            <div className="border-b border-primary-black mt-[2px]" />
          </div>
        </button>
        <button
          style={{
            backgroundImage: `url(${ourMob4})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
          className="w-[320px] h-[159px] py-5 px-4"
        >
          <div className="flex flex-col h-full">
            <h3 className="font-actay-wide text-sm font-bold text-primary-dark leading-[17px] tracking-[0.01em] uppercase text-left w-[125px]">
              On-page SEO improvements
            </h3>
            <div className="flex items-center justify-between mt-auto">
              <p className="font-urbanist text-xs font-semibold leading-5 text-primary-black">
                Learn more
              </p>
              <Image src={arrow} alt="arrow" width={12} height={12} />
            </div>
            <div className="border-b border-primary-black mt-[2px]" />
          </div>
        </button>
        <button
          style={{
            backgroundImage: `url(${ourMob2})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
          className="w-[152px] h-[159px] py-5 px-4"
        >
          <div className="flex flex-col h-full">
            <h3 className="font-actay-wide text-sm font-bold text-primary-dark leading-[17px] tracking-[0.01em] uppercase text-left">
              Link <br /> building and outreach
            </h3>
            <div className="flex items-center justify-between mt-auto">
              <p className="font-urbanist text-xs font-semibold leading-5 text-primary-black">
                Learn more
              </p>
              <Image src={arrow} alt="arrow" width={12} height={12} />
            </div>
            <div className="border-b border-primary-black mt-[2px]" />
          </div>
        </button>
        <div className="w-[152px]">
          <h2 className="font-actay-wide text-[24px] font-bold text-title-green leading-[29px] uppercase mb-5">
            Ready <br /> to start{" "}
            <span className="text-primary-white">SEO?</span>
          </h2>
          <p className="font-urbanist text-sm font-light text-primary-white">
            We provide easy-to-understand updates on your progress.
          </p>
        </div>
        <button className="w-[320px] h-[40px] flex items-center justify-center bg-btn-green text-primary-dark font-urbanist text-base font-semibold rounded-[28px] md:mx-auto">
          Get in touch
        </button>
      </div>
      <div className="hidden lg:flex flex-wrap gap-6">
        <div className="w-[370px]">
          <h2 className="font-actay-wide text-[48px] font-bold text-title-green leading-[58px] uppercase mb-5">
            Our services
          </h2>
          <p className="font-urbanist text-base font-light text-primary-white">
            We help businesses grow through
          </p>
        </div>
        <button
          style={{
            backgroundImage: `url(${ourDesk1})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
          className="w-[370px] h-[225px] py-5 px-4"
        >
          <div className="flex flex-col h-full">
            <h3 className="font-actay-wide text-[28px] font-bold text-primary-dark leading-[34px] tracking-[0.01em] uppercase text-left">
              Local SEO audit and strategy
            </h3>
            <div className="flex items-center justify-between mt-auto">
              <p className="font-urbanist text-base font-semibold leading-5 text-primary-black">
                Learn more
              </p>
              <Image src={arrow} alt="arrow" width={15} height={14} />
            </div>
            <div className="border-b border-primary-black mt-[2px]" />
          </div>
        </button>
        <button
          style={{
            backgroundImage: `url(${ourDesk2})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
          className="w-[370px] h-[225px] py-5 px-4"
        >
          <div className="flex flex-col h-full">
            <h3 className="font-actay-wide text-[28px] font-bold text-primary-dark leading-[34px] tracking-[0.01em] uppercase text-left">
              Google Business optimization
            </h3>
            <div className="flex items-center justify-between mt-auto">
              <p className="font-urbanist text-base font-semibold leading-5 text-primary-black">
                Learn more
              </p>
              <Image src={arrow} alt="arrow" width={15} height={14} />
            </div>
            <div className="border-b border-primary-black mt-[2px]" />
          </div>
        </button>
        <button
          style={{
            backgroundImage: `url(${ourDesk3})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
          className="w-[765px] h-[226px] py-5 px-4"
        >
          <div className="flex flex-col h-full">
            <h3 className="font-actay-wide text-[28px] font-bold text-primary-dark leading-[34px] tracking-[0.01em] uppercase text-left w-[264px]">
              On-page SEO improvements
            </h3>
            <div className="flex items-center justify-between mt-auto">
              <p className="font-urbanist text-base font-semibold leading-5 text-primary-black">
                Learn more
              </p>
              <Image src={arrow} alt="arrow" width={15} height={14} />
            </div>
            <div className="border-b border-primary-black mt-[2px]" />
          </div>
        </button>
        <button
          style={{
            backgroundImage: `url(${ourDesk4})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
          className="w-[370px] h-[226px] py-5 px-4"
        >
          <div className="flex flex-col h-full">
            <h3 className="font-actay-wide text-[28px] font-bold text-primary-dark leading-[34px] tracking-[0.01em] uppercase text-left">
              Technical SEO setup
            </h3>
            <div className="flex items-center justify-between mt-auto">
              <p className="font-urbanist text-base font-semibold leading-5 text-primary-black">
                Learn more
              </p>
              <Image src={arrow} alt="arrow" width={15} height={14} />
            </div>
            <div className="border-b border-primary-black mt-[2px]" />
          </div>
        </button>
        <button
          style={{
            backgroundImage: `url(${ourDesk5})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
          className="w-[370px] h-[226px] py-5 px-4"
        >
          <div className="flex flex-col h-full">
            <h3 className="font-actay-wide text-[28px] font-bold text-primary-dark leading-[34px] tracking-[0.01em] uppercase text-left">
              Link building and outreach
            </h3>
            <div className="flex items-center justify-between mt-auto">
              <p className="font-urbanist text-base font-semibold leading-5 text-primary-black">
                Learn more
              </p>
              <Image src={arrow} alt="arrow" width={15} height={14} />
            </div>
            <div className="border-b border-primary-black mt-[2px]" />
          </div>
        </button>
        <div className="w-[765px]">
          <h2 className="font-actay-wide text-[48px] font-bold text-title-green leading-[58px] uppercase mb-[57px] w-[568px]">
            Ready to start{" "}
            <span className="text-primary-white">your SEO journey? </span>
          </h2>
          <div className="flex justify-between">
            <p className="font-urbanist text-base font-light text-primary-white w-[307px]">
              We provide easy-to-understand updates on your progress.
            </p>
            <button className="w-[307px] h-[52px] flex items-center justify-center bg-btn-green text-primary-dark font-urbanist text-base font-semibold rounded-[28px]">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
