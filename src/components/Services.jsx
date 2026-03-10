import React from "react";

export default function Services() {
  const services = [
    {
      title: "Data-Driven Digital Marketing",
      description:
        "Using the power of analytics and AI, we tailor campaigns that deliver measurable results and reach your target audience effectively.",
      icon: "/services-section/data-driven-icon.svg",
    },
    {
      title: "Creative Content Creation",
      description:
        "From video production to compelling copy, our creative team ensures that your brand message resonates across all platforms.",
      icon: "/services-section/creative-icon.svg",
    },
    {
      title: "SEO & SEM Optimization",
      description:
        "Boost your visibility with search engine strategies that put your business in front of the right people, at the right time.",
      icon: "/services-section/seo-icon.svg",
    },
    {
      title: "Social Media Management",
      description:
        "Engage your audience with targeted social media campaigns designed to grow your brand's community and influence.",
      icon: "/services-section/social-media-icon.svg",
    },
  ];

  return (
    <section className="bg-[#f3f2eb]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          {/* LEFT SIDE */}
          <div>
            <span className="mb-3 inline-block text-[11px] font-extrabold uppercase tracking-wide text-[#223548]">
              Illuminate
            </span>

            <h2 className="text-[2.4rem] font-extrabold leading-[1.05] tracking-tight text-black sm:text-[3.2rem] lg:text-[4rem]">
              Our Services
              <span className="text-[#f5cd00]">.</span>
            </h2>

            <p className="mt-8 max-w-155 text-[17px] font-semibold leading-9 text-[#5c5c5c] sm:text-[18px]">
              At Nova Growth, we harness innovative strategies tailored to your unique needs. Our targeted
              marketing solutions ensure that your message reaches the right audience effectively.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-[0.9fr_1.15fr_0.95fr] sm:items-end">
              <div className="overflow-hidden">
                <img
                  src="/services-section/first-img.svg"
                  alt="Service image 1"
                  className="h-65 w-full object-cover sm:h-61.25 lg:h-61.25"
                />
              </div>

              {/* Middle Two Images */}
              <div className="grid gap-4">
                <div className="overflow-hidden">
                  <img
                    src="/services-section/second-img.svg"
                    alt="Service image 2"
                    className="h-30.5 w-full object-cover sm:h-28.25 lg:h-28.25"
                  />
                </div>

                <div className="overflow-hidden">
                  <img
                    src="/services-section/third-img.svg"
                    alt="Service image 3"
                    className="h-30.5 w-full object-cover sm:h-29.5 lg:h-29.5"
                  />
                </div>
              </div>

              {/* Right Image with Yellow Background */}
              <div className="relative">
                <div className="absolute inset-0 translate-x-4 translate-y-3 rotate-6 bg-[#f5cd00]" />
                <div className="relative overflow-hidden">
                  <img
                    src="/services-section/fourth-img.svg"
                    alt="Service image 4"
                    className="h-65 w-full object-cover sm:h-61.25 lg:h-61.25"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-center gap-8 lg:pl-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-4">
                {/* Icon */}
                <img src={service.icon} alt={service.title} className="mt-1 h-11 w-11 shrink-0 object-contain" />

                {/* Text */}
                <div>
                  <h3 className="text-[1.45rem] font-medium leading-snug text-black sm:text-[1.7rem]">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-140 text-[15px] leading-7 text-[#666666] sm:text-[16px]">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
