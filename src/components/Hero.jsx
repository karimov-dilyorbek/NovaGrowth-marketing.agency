export default function Hero() {
  return (
    <section className="bg-[#f5f5f3]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 pb-16 pt-8 sm:px-8 md:pt-12 lg:grid-cols-2 lg:px-10 lg:pb-24 lg:pt-16">
        <div className="max-w-2xl">
          <h1 className="text-2xl font-extrabold leading-[1.05] tracking-tight sm:text-[3.2rem] md:text-[4rem] lg:text-[4.7rem]">
            Brighten Your
            <span className="relative inline-block px-2">
              <span className="relative z-10">Brand</span>
              <span className="absolute left-0 top-1/2  z-0 h-[75%] w-full -translate-y-1/2 -rotate-2 bg-[#f5cd00]"></span>
            </span>
            <br />
            with NovaGrowth
            <span className="text-[#f5cd00]">.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-[#666666] sm:text-lg md:text-xl">
            We specialize in creating innovative marketing strategies that drive results. Let us help you shine
            brighter in the digital landscape.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-xl bg-[#24364a] px-8 py-4 text-base font-semibold text-[#f5cd00] transition hover:opacity-90 cursor-pointer">
              Get Started
            </button>

            <button className="rounded-xl border border-[#7b8791] px-8 py-4 text-base font-semibold text-[#24364a] transition hover:bg-white cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-140 items-center justify-center lg:justify-end">
          <div className="relative h-105 w-full sm:h-125 md:h-140">
            <img
              src="/hero-st-img.svg"
              alt="Team working"
              className="absolute right-0 top-0 h-55 w-[72%] object-cover shadow-lg sm:h-67.5 md:h-75"
            />

            <img
              src="/hero-nd-img.svg"
              alt="Creative team"
              className="absolute left-0 top-36.25 h-45 w-[45%] object-cover shadow-md sm:top-46.25 sm:h-55 md:top-52.5 md:h-60"
            />

            <img
              src="/hero-rd-img.svg"
              alt="Planning session"
              className="absolute right-4 top-53 z-50 h-55 w-[42%] object-cover shadow-md sm:top-62 sm:h-50 md:top-68"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
