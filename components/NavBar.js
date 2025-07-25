import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function NavBar() {
  const router = useRouter();

  const navItems = [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/about" },
    { label: "Services", url: "/services" },
    { label: "Portfolio", url: "/portfolio" },
    { label: "Contact Us", url: "/contact-us" },
  ];
  const [activeIdx, setActiveIdx] = useState(0);

  // Sync with current route
  useEffect(() => {
    const currentIdx = navItems.findIndex(
      (item) => item.url === router.pathname
    );
    if (currentIdx !== -1) {
      setActiveIdx(currentIdx);
    }
  }, [router.pathname]);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 shadow-glow rounded-full z-50 flex justify-between items-center w-6xl ring-cursor max-container-width overflow-hidden">
      <svg className="shadow-svg">
        <filter id="displacementFilter">
          <feImage href="/liquid.png" preserveAspectRatio="none" />

          <feDisplacementMap
            in="SourceGraphic"
            in2="turbulence"
            scale="200"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
      {/* <div className="hero-spotlight"> </div> */}

      <div className="font-semibold text-white text-lg tracking-wide">
        <img src="/logo.png" alt="Vibrant Media Logo" />
      </div>
      <ul className="md:flex gap-6 text-sm text-white font-medium poppins-font">
        {navItems.map((item, i) => (
          <li
            key={i}
            className={`relative group nav-items${
              activeIdx === i ? " active" : ""
            }`}
          >
            {item.label === "Portfolio" ? (
              <a
                href={router.pathname === "/" ? "#portfolio" : "/#portfolio"}
                className="hover:text-vibrant transition duration-300"
                onClick={(e) => {
                  e.preventDefault();

                  if (router.pathname === "/") {
                    const el = document.getElementById("portfolio");
                    el?.scrollIntoView({ behavior: "smooth" });
                  } else {
                    router.push("/#portfolio");
                  }

                  setActiveIdx(i);
                }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-vibrant group-hover:w-full transition-all duration-300"></span>
              </a>
            ) : (
              <Link
                href={item.url}
                className="hover:text-vibrant transition duration-300"
                onClick={() => setActiveIdx(i)}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-vibrant group-hover:w-full transition-all duration-300"></span>
              </Link>
            )}
          </li>
        ))}
      </ul>

      <div className="nav-btn example-2">
        <button
          onClick={() => router.push("/contact-us")}
          className="inner flex justify-center gap-2 poppins-font text-2xl items-center"
          style={{
            background:
              "linear-gradient(90deg,rgb(84, 47, 140),rgb(132, 72, 187))",
            boxShadow: `
      0 0 100px #9561c540,
      0 0 40px #9561c550,
      0 0 80px #9561c570,
      0 0 120px #9561c530
    `,
          }}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}
