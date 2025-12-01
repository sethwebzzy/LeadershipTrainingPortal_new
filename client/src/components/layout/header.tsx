import { useState } from "react";
import { Link } from "wouter";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        
        {/* LOGO + SCHOOL NAME */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Leadership JOYCEP Logo"
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-xl font-bold text-college-dark tracking-wide">
            Leadership <span className="text-college-green">JOYCEP</span>
          </h1>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-college-dark font-medium">
          <a href="#hero" className="hover:text-college-green transition">Home</a>
          <a href="#courses" className="hover:text-college-green transition">Courses</a>
          <a href="#services" className="hover:text-college-green transition">Services</a>
          <a href="#admissions" className="hover:text-college-green transition">Admissions</a>
          <a href="#about" className="hover:text-college-green transition">About</a>
          <a href="#contact" className="hover:text-college-green transition">Contact</a>

          <a
            href="#admissions"
            className="bg-college-green text-white px-4 py-2 rounded-md shadow hover:bg-green-600 transition"
          >
            Register Now
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-3xl text-college-dark"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <nav className="md:hidden bg-white shadow-md py-4 px-6 flex flex-col gap-4 text-college-dark font-medium">
          <a onClick={() => setOpen(false)} href="#hero">Home</a>
          <a onClick={() => setOpen(false)} href="#courses">Courses</a>
          <a onClick={() => setOpen(false)} href="#services">Services</a>
          <a onClick={() => setOpen(false)} href="#admissions">Admissions</a>
          <a onClick={() => setOpen(false)} href="#about">About</a>
          <a onClick={() => setOpen(false)} href="#contact">Contact</a>

          <a
            href="#admissions"
            className="bg-college-green text-white px-4 py-2 text-center rounded-md shadow hover:bg-green-600 transition"
            onClick={() => setOpen(false)}
          >
            Register Now
          </a>
        </nav>
      )}
    </header>
  );
}
