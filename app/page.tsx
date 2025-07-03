import { Navbar, Hero, Cocktails, About } from "./ui";
import { SplitText, ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </main>
  );
}
