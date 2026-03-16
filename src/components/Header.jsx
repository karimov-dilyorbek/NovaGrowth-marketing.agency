import React, { useEffect, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "About Us", "Our Services", "Project"];

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header className="relative w-full bg-[#f5f5f3]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <div className="flex items-center gap-3 max-[630px]:w-48">
          <a href="././index.html">
            <img src="/logo.svg" alt="Logo" className="h-auto w-44 sm:w-48 md:w-64" />
          </a>
        </div>

        <div className="flex items-center gap-12">
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="text-[18px] font-medium text-[#4b4b4b] transition hover:text-black">
                {item}
              </a>
            ))}
          </nav>

          <button className="hidden rounded-md bg-[#5b6f7a] px-6 py-3 text-[16px] font-semibold text-white transition hover:opacity-90 lg:block">
            Contact Us
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-gray-300 lg:hidden">
          <svg
            className="h-6 w-6 text-[#2d3a4b]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/25 backdrop-blur-[2px] transition-all duration-300 lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        className={`fixed right-0 top-0 z-50 h-screen w-70 bg-white shadow-2xl transition-transform duration-300 ease-in-out sm:w-[320px] lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-5">
          <h3 className="text-lg font-bold text-[#2d3a4b]">Menu</h3>

          <button
            onClick={() => setMenuOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300">
            <svg
              className="h-5 w-5 text-[#2d3a4b]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-5 px-5 py-6">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-[#4b4b4b] transition duration-200 hover:translate-x-1 hover:text-black">
              {item}
            </a>
          ))}

          <button className="mt-4 rounded-md bg-[#5b6f7a] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
}
