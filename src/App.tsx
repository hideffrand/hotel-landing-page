import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    const headerImg = document.querySelector(".header-image") as HTMLImageElement;
    const imgComfort1 = document.querySelector(".comfort1") as HTMLImageElement;
    const imgComfort2 = document.querySelector(".comfort2") as HTMLImageElement;
    const imgComfort3 = document.querySelector(".comfort3") as HTMLImageElement;

    const inter1 = document.querySelector(".inter1") as HTMLImageElement;
    const inter2 = document.querySelector(".inter2") as HTMLImageElement;

    const food1 = document.querySelector(".food1") as HTMLImageElement;
    const food2 = document.querySelector(".food2") as HTMLImageElement;

    const interiorSection = document.querySelector(".interior-section") as HTMLElement;

    const culinarySection = document.querySelector(".culinary-section") as HTMLElement;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      headerImg.style.transform = `scale(${1 + scrollPosition * 0.0001})`;

      imgComfort1.style.transform = `translateY(-${scrollPosition * 0.1}px) scale(${1 + scrollPosition * 0.0002})`;
      imgComfort2.style.transform = `translateY(-${scrollPosition * 0.2}px) scale(${1 + scrollPosition * 0.0003})`;
      imgComfort3.style.transform = `scale(${1 + scrollPosition * 0.0001})`;

      const interiorRect = interiorSection.getBoundingClientRect();
      const interiorScrollPosition = scrollPosition - interiorRect.top;

      inter1.style.transform = `scale(${1 + interiorScrollPosition * 0.00001})`;
      inter2.style.transform = `translateY(-${interiorScrollPosition * 0.1}px) scale(${1 + interiorScrollPosition * 0.0001})`;

      const culinaryRect = culinarySection.getBoundingClientRect();
      const culinaryScrollPosition = scrollPosition - culinaryRect.top;

      food1.style.transform = `scale(${1 + culinaryScrollPosition * 0.0001})`;
      food2.style.transform = `translateY(-${culinaryScrollPosition * 0.1}px) scale(${1 + scrollPosition * 0.0001})`;
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Rooms />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
