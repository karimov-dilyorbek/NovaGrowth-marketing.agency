import React from "react";

export default function Footer() {
  const companyLinks = ["About Us", "Our Services", "Case Studies", "Partners"];
  const socialLinks = ["Facebook", "Twitter", "LinkedIn", "Instagram"];

  return (
    <footer className="bg-[#f3f2eb]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="flex flex-col gap-8 border-b border-transparent pb-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex justify-center sm:justify-start">
            <a href="/" className="inline-block">
              <img src="/logo.svg" alt="Sunstream Digital" className="h-auto w-44" />
            </a>
          </div>

          <div className="flex flex-col items-center gap-4 text-center sm:items-end sm:text-right">
            <a href="tel:+18001234567" className="text-[15px] text-[#2b3d50] underline underline-offset-4">
              +1-800-123-4567
            </a>

            <a
              href="mailto:info@novagrowth.com"
              className="text-[15px] text-[#2b3d50] underline underline-offset-4">
              info@novagrowth.com
            </a>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 text-center sm:grid-cols-2 lg:grid-cols-3 lg:text-left">
          <div>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[14px] font-medium text-[#2b3d50] transition hover:opacity-70">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ul className="space-y-4">
              {socialLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[14px] font-medium text-[#2b3d50] transition hover:opacity-70">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-end justify-center lg:justify-end">
            <p className="text-[13px] text-[#8a8f96]">© 2026 NovaGrowth. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
