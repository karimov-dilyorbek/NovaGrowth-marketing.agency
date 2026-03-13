export default function Cta() {
  return (
    <section className="bg-[#f5f5f3]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
        <div className="max-w-2xl">
          <span className="mb-3 inline-block text-[11px] font-extrabold uppercase tracking-wide text-[#223548]">
            Nova
          </span>

          <h2 className="text-[2.5rem] font-extrabold leading-[1.02] tracking-[-0.03em] text-black sm:text-[3.3rem] lg:text-[4.2rem]">
            Ready to Light Up
            <br />
            Your Marketing
            <span className="text-[#f5cd00]">?</span>
          </h2>

          <p className="mt-8 max-w-140 text-[17px] font-semibold leading-8 text-[#646464] sm:text-[18px]">
            We're here to help you take your brand to the next level. Let&apos;s craft a strategy that&apos;s as
            bright as your future.
          </p>

          <button className="mt-10 rounded-md bg-[#24364a] px-8 py-4 text-sm font-semibold text-[#f5cd00] transition hover:opacity-90">
            Book a Free Consultation
          </button>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-105 overflow-hidden">
            <img src="/cta-img.svg" alt="Marketing consultation" className="block h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
