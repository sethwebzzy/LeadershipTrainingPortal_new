import { useEffect } from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full flex flex-col items-center justify-center text-center py-20 bg-white"
    >
      {/* School Logo */}
      <img
        src="/logo.png"
        alt="Leadership JOYCEP Training College Logo"
        className="w-40 h-40 object-contain mb-6"
      />

      {/* Main Heading */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-college-dark leading-tight max-w-3xl">
        Empowering Communities Through Professional Health & Counselling Education
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-base md:text-lg text-college-gray max-w-2xl">
        Leadership JOYCEP Training College in Kitengela Kawa Centre provides high-quality 
        training in counselling, ECDE, Kenya Sign Language, VCT and Adherence counselling — 
        equipping learners with practical skills to create real community impact.
      </p>

      {/* Call to Action */}
      <button
        onClick={() =>
          document.getElementById("admissions")?.scrollIntoView({ behavior: "smooth" })
        }
        className="mt-8 px-8 py-3 bg-college-green text-white text-lg rounded-md shadow hover:bg-green-600 transition"
      >
        Register for Monthly Intake
      </button>
    </section>
  );
}
