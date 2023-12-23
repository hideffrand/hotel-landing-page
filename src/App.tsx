import { useEffect } from "react";
import header from "./assets/header.jpg";
import comfort1 from './assets/comfort1.png'
import comfort2 from './assets/comfort2.png'
import comfort3 from './assets/comfort3.png'

function App() {
  useEffect(() => {
    const headerImg = document.querySelector(
      ".header-image"
    ) as HTMLImageElement;
    const imgComfort1 = document.querySelector(".comfort1") as HTMLImageElement
    const imgComfort2 = document.querySelector(".comfort2") as HTMLImageElement
    const imgComfort3 = document.querySelector(".comfort3") as HTMLImageElement
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      headerImg.style.transform = `scale(${1 + scrollPosition * 0.001})`;
      imgComfort1.style.transform = `translateY(-${scrollPosition * 0.1}px) scale(${1 + scrollPosition * 0.0002})`;
      imgComfort2.style.transform = `translateY(-${scrollPosition * 0.2}px) scale(${1 + scrollPosition * 0.0003})`;
      imgComfort3.style.transform = `scale(${1 + scrollPosition * 0.0001})`;
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav className="fixed font-dm z-30 w-full py-10 md:px-20 bg-white text-black flex justify-center md:justify-end items-center">
        <div className="px-4 w-full flex items-center justify-between gap-4 text-xs md:text-md">
          <div className="hidden md:flex gap-5">
            <a className="smooth-transition hover:underline" href="">
              HOME
            </a>
            <a className="smooth-transition hover:underline" href="">
              ABOUT
            </a>
            <a className="smooth-transition hover:underline" href="">
              GALLERY
            </a>
            <a className="smooth-transition hover:underline" href="">
              CONTACTS
            </a>
          </div>
          <div className="text-4xl block md:hidden">
            <ion-icon name="menu-outline"></ion-icon>
          </div>
          <button className="smooth-transition font-dm px-6 py-2 rounded-full text-white bg-black hover:text-black hover:bg-orange-400">
            BOOK NOW
          </button>
        </div>
      </nav>
      <main className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <h1 className="text-8xl md:text-super uppercase font-dm">
          Château
        </h1>
        <p className="italic">-“Your Oasis in the Heart of France”</p>
        <img
          src={header}
          alt=""
          className="header-image absolute bottom-0 h-1/2 w-full object-cover -z-10"
        />
      </main>
      <section className="w-full h-screen flex md:flex-row flex-col justify-center items-center md:items-end px-2 md:px-20 overflow-hidden">
        <div className="w-5/6 md:w-1/2 py-20">
          <h1 className="text-2xl md:text-4xl font-dm">UNPARALLELED COMFORT</h1>
          <p className="text-sm md:text-md italic">
            Discover the allure of luxury living and the charm of French
            hospitality at Château. Nestled in the heart of the enchanting
            landscapes of France, our exceptional accommodation offers a blend of
            sophistication, comfort, and cultural richness.
          </p>
        </div>
        <div className="w-1/2 relative flex items-center justify-center">
          <img src={comfort3} alt="" className="comfort3"/>
          <img src={comfort2} alt="" className="comfort2 absolute top-0 right-0 w-1/2 md:w-1/3 -mr-10 md:mr-20 mt-52 shadow-md"/>
          <img src={comfort1} alt="" className="comfort1 absolute bottom-0 left-0 w-1/2 md:w-1/3 -ml-10 md:ml-20 -mb-10 md:mb-10 shadow-md"/>
        </div>
      </section>
      <section className="w-full h-screen flex md:flex-row flex-col justify-center items-center md:items-end px-2 md:px-20 overflow-hidden">
        <div className="w-1/2 relative flex items-center justify-center">
          <img src={comfort3} alt="" className="comfort3"/>
          <img src={comfort2} alt="" className="comfort2 absolute top-0 right-0 w-1/2 md:w-1/3 -mr-10 md:mr-20 mt-52 shadow-md"/>
          <img src={comfort1} alt="" className="comfort1 absolute bottom-0 left-0 w-1/2 md:w-1/3 -ml-10 md:ml-20 -mb-10 md:mb-10 shadow-md"/>
        </div>
        <div className="w-5/6 md:w-1/2 py-20">
          <h1 className="text-2xl md:text-4xl font-dm">UNPARALLELED COMFORT</h1>
          <p className="text-sm md:text-md italic">
            Discover the allure of luxury living and the charm of French
            hospitality at Château. Nestled in the heart of the enchanting
            landscapes of France, our exceptional accommodation offers a blend of
            sophistication, comfort, and cultural richness.
          </p>
        </div>
      </section>
      <section className="h-screen w-full">

      </section>
    </>
  );
}

export default App;
