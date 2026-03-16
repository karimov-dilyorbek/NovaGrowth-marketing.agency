export default function About() {
  const stats = [
    {
      value: "$2M+",
      label: "Ad Revenue Generated",
    },
    {
      value: "300+",
      label: "Successful Campaigns",
    },
    {
      value: "500%",
      label: "Increase in Organic Traffic",
    },
  ];

  return (
    <section className="w-full">
      {/* Top About Section */}
      <div className="bg-[#f3f2eb]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
          {/* Left Content */}
          <div className="max-w-2xl">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-wider text-[#25364a]">
              About Us
            </span>

            <h2 className="text-4xl font-extrabold leading-tight text-black sm:text-5xl lg:text-6xl">
              Who We Are
              <span className="text-[#f5cd00]">.</span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-[#5f5f5f] sm:text-lg">
              At Nova Growth, we're all about illuminating your brand with bold, innovative marketing strategies.
              Our team combines creativity with cutting-edge technology to craft digital campaigns that captivate
              and convert. Whether you're looking to grow your online presence or launch a new product, we're here
              to help you shine.
            </p>

            <p className="mt-8 max-w-xl text-base leading-8 text-[#5f5f5f] sm:text-lg">
              At Nova Growth, our success is defined by the results we deliver. From innovative campaigns to
              record-breaking growth, we've partnered with brands to help them reach new height.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-140">
              <img src="/aboutUs.svg" alt="About Nova Growth" className="h-auto w-full object-contain" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 md:py-12 lg:px-10 lg:py-14">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {stats.map((item, index) => {
              const isPercent = item.value.includes("%");
              const [mainValue] = isPercent ? item.value.split("%") : item.value.split("+");

              return (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-2xl p-4 transition duration-300 hover:bg-white hover:shadow-sm">
                  <h3 className="text-4xl font-extrabold leading-none text-[#25364a] sm:text-5xl">
                    {mainValue}
                    <span className="text-[#f5cd00]">{isPercent ? "%" : "+"}</span>
                  </h3>

                  <p className="max-w-45 text-lg leading-8 text-[#666666] sm:text-[1.7rem] sm:leading-[2.2rem] lg:text-[1.1rem] lg:leading-8">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
