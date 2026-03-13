import React from "react";

export default function Products() {
  const products = [
    {
      id: 1,
      titleLines: ["High-Performance", "Sneaker Brand"],
      description:
        "A sneaker brand focused on high-performance shoes for athletes was struggling to differentiate its products in a saturated market and boost sales among competitive runners.",
      image: "/sneaker.svg",
    },
    {
      id: 2,
      titleLines: ["Luxury Perfume", "Brand"],
      description:
        "A luxury perfume brand wanted to increase its online presence and attract younger, affluent customers while maintaining its exclusivity and heritage appeal.",
      image: "/perfume.svg",
    },
    {
      id: 3,
      titleLines: ["Game Console", "Brand"],
      description:
        "A new game console brand wanted to generate buzz and excitement ahead of its product launch, targeting both casual gamers and hardcore gaming communities.",
      image: "/game-console.svg",
    },
    {
      id: 4,
      titleLines: ["Canned Tomato", "Soup Brand"],
      description:
        "A well-known canned soup brand wanted to revitalize its image and appeal to health-conscious millennials while staying true to its classic, comforting roots.",
      image: "/tomato-soup.svg",
    },
  ];

  return (
    <section className="bg-[#f5f5f3]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-2 xl:items-start xl:gap-16">
          <div>
            <span className="mb-3 inline-block text-[11px] font-extrabold uppercase tracking-wide text-[#223548]">
              Case Studies
            </span>

            <h2 className="text-[2.7rem] font-extrabold leading-[1.02] tracking-[-0.03em] text-black sm:text-[3.4rem] lg:text-[4.1rem]">
              Proven
              <span className="relative inline-block px-2">
                <span className="relative z-10 text-[#223548]">Expertise.</span>
                <span className="absolute left-0 top-1/2 z-0 h-[78%] w-full -translate-y-1/2 -rotate-2 bg-[#f5cd00]" />
              </span>
              <br />
              Proven Results
              <span className="text-[#f5cd00]">.</span>
            </h2>
          </div>

          <div className="max-w-140 xl:ml-auto">
            <p className="text-[18px] font-semibold leading-8 text-[#646464] sm:text-[20px] sm:leading-9">
              Our data-driven approach and innovative strategies have helped countless businesses achieve their
              goals. We&apos;re dedicated to delivering measurable results.
            </p>

            <button className="mt-8 rounded-md bg-[#24364a] px-6 py-3 text-sm font-semibold text-[#f5cd00] transition hover:opacity-90">
              Explore All Project
            </button>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 2xl:grid-cols-4">
          {products.map((item) => (
            <div key={item.id} className="flex flex-col">
              <img src={item.image} alt={item.titleLines.join(" ")} className="block h-auto w-full" />

              <div className="pt-5">
                <h3 className="text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#2b3d50]">
                  {item.titleLines.map((line, index) => (
                    <React.Fragment key={line}>
                      {line}
                      {index !== item.titleLines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                  <span className="text-[#f5cd00]">.</span>
                </h3>

                <p className="mt-5 text-[15px] leading-8 text-[#5f6670] sm:text-[16px] sm:leading-9">
                  {item.description}
                </p>

                <a
                  href="#"
                  className="mt-7 inline-flex items-center gap-3 text-[15px] font-extrabold text-[#223548] transition hover:gap-4">
                  Read More
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
