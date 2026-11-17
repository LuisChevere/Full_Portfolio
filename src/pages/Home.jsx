import Nav from "../components/Navbar";
import heroImage from "../assets/heroBanner.png";
import logo from "../assets/newLogo.png";

export default function Home() {
  const Background = {
    minHeight: "60vh",
    width: "100%",
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0) 100%), url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "0% 65%",
    backgroundRepeat: "no-repeat",
  };
  return (
    <section style={Background}>
      <Nav />
      <div>
        <img src={logo} alt="Luis Chevere Logo" className="w-120" />
        <p className="pl-15 leading-6 tracking-[1px]">
          Creating digital experiences and fashion concepts
          <br />
          with a refined, editorial approach. Where design,
          <br />
          function and personal style meet.
        </p>
        <button class="text-[#C6A36A] tracking-[2px] text-[12px] hover:bg-black hover:text-[#C6A36A] py-3 px-6 ml-15 mt-8 border border-[#C6A36A] uppercase">
          <a href="#projects" className="inline-flex items-center gap-5">
            view my work
            <svg
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#C6A36A"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </button>
      </div>
    </section>
  );
}
