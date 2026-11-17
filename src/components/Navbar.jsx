import { useState } from "react";
import Name from "../assets/headerLogo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "UI/UX", href: "/websites" },

    { name: "Fashion", href: "/fashion" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="pl-20">
      {/* DESKTOP NAVBAR */}
      <div className="flex flex-row items-center gap-40 uppercase text-[10px] tracking-[5px]">
        {/* LOGO */}
        <a href="/" className="shrink-0">
          <img className="w-90" src={Name} alt="Luis Chevere Logo" />
        </a>

        {/* RIGHT LINKS */}
        <ul className="text-white flex flex-row gap-12">
          {navLinks.slice(0).map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="transition-colors duration-300 hover:text-[#C6A36A] hover:underline underline-offset-10 decoration-1 decoration-[#C6A36A]"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* RESERVATIONS */}
        <a
          className="text-[#C6A36A] bg-black border border-[#C6A36A] inline-flex items-center px-7 py-3 uppercase text-[10px] whitespace-nowrap transition-all duration-300 hover:text-[#C3A15B] hover:border-[#C3A15B] hover:bg-transparent"
          href="/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's Work
        </a>
      </div>
    </nav>
  );
}
