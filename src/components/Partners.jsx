export default function Partners() {
  const partners = [
    { id: 1, name: "Skoda", logo: "/partners/skoda.svg" },
    { id: 2, name: "Shield", logo: "/partners/swiggy.svg" },
    { id: 3, name: "Kia", logo: "/partners/kia.svg" },
    { id: 4, name: "Nokia", logo: "/partners/nokia.svg" },
    { id: 5, name: "Intel", logo: "/partners/intel.svg" },
    { id: 6, name: "Mahindra", logo: "/partners/mahindra.svg" },
    { id: 7, name: "Oppo", logo: "/partners/oppo.svg" },
    { id: 8, name: "Fila", logo: "/partners/fila.svg" },
  ];

  return (
    <section className="bg-[#f5f5f3]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mb-6 flex justify-center">
          <span className="h-0.5 w-4 bg-[#3b82f6]"></span>
        </div>

        <div className="text-center">
          <span className="mb-2 inline-block text-[11px] font-extrabold uppercase tracking-wide text-[#223548]">
            Client
          </span>

          <h2 className="text-[2.4rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-black sm:text-[3rem] lg:text-[4rem]">
            Official Partners
            <span className="text-[#f5cd00]">.</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center opacity-80 transition duration-300 hover:opacity-100">
              <img src={partner.logo} alt={partner.name} className="max-h-12 w-auto object-contain sm:max-h-14" />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <span className="h-0.5 w-4 bg-pink-500"></span>
        </div>
      </div>
    </section>
  );
}
