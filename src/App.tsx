import { useEffect } from "react";
import header from "./assets/header.jpg";
import comfort1 from "./assets/comfort1.png";
import comfort2 from "./assets/comfort2.png";
import comfort3 from "./assets/comfort3.png";
import interior1 from "./assets/interior1.jpg";
import interior2 from "./assets/interior2.jpg";
import interior3 from "./assets/interior3.jpg";
import food1 from "./assets/food1.jpg";
import food2 from "./assets/food2.jpg";
import food3 from "./assets/food3.jpg";

function App() {
  useEffect(() => {
    const headerImg = document.querySelector(
      ".header-image"
    ) as HTMLImageElement;
    const imgComfort1 = document.querySelector(".comfort1") as HTMLImageElement;
    const imgComfort2 = document.querySelector(".comfort2") as HTMLImageElement;
    const imgComfort3 = document.querySelector(".comfort3") as HTMLImageElement;

    const inter1 = document.querySelector(".inter1") as HTMLImageElement;
    const inter2 = document.querySelector(".inter2") as HTMLImageElement;
    const inter3 = document.querySelector(".inter3") as HTMLImageElement;

    const food1 = document.querySelector(".food1") as HTMLImageElement;
    const food2 = document.querySelector(".food2") as HTMLImageElement;
    const food3 = document.querySelector(".food3") as HTMLImageElement;

    const interiorSection = document.querySelector(
      ".interior-section"
    ) as HTMLElement;

    const culinarySection = document.querySelector(
      ".culinary-section"
    ) as HTMLElement;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      headerImg.style.transform = `scale(${1 + scrollPosition * 0.001})`;

      imgComfort1.style.transform = `translateY(-${
        scrollPosition * 0.1
      }px) scale(${1 + scrollPosition * 0.0002})`;
      imgComfort2.style.transform = `translateY(-${
        scrollPosition * 0.2
      }px) scale(${1 + scrollPosition * 0.0003})`;
      imgComfort3.style.transform = `scale(${1 + scrollPosition * 0.0001})`;

      const interiorRect = interiorSection.getBoundingClientRect();
      const interiorScrollPosition = scrollPosition - interiorRect.top;

      inter1.style.transform = `scale(${1 + interiorScrollPosition * 0.00001})`;
      inter2.style.transform = `translateY(-${
        interiorScrollPosition * 0.1
      }px) scale(${1 + interiorScrollPosition * 0.0003})`;
      inter3.style.transform = `translateY(-${
        interiorScrollPosition * 0.2
      }px) scale(${1 + interiorScrollPosition * 0.00002})`;

      const culinaryRect = culinarySection.getBoundingClientRect();
      const culinaryScrollPosition = scrollPosition - culinaryRect.top;

      food1.style.transform = `scale(${1 + culinaryScrollPosition * 0.0001})`;
      food2.style.transform = `translateY(-${
        culinaryScrollPosition * 0.1
      }px) scale(${1 + scrollPosition * 0.00004})`;
      food3.style.transform = `translateY(-${
        culinaryScrollPosition * 0.2
      }px) scale(${1 + scrollPosition * 0.00001})`;
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav className="fixed font-dm z-30 w-full py-10 md:px-20 bg-white text-black flex justify-center md:justify-end items-center border-b">
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
        <h1 className="text-7xl md:text-super uppercase font-dm">Château</h1>
        <p className="italic">-“Your Oasis in the Heart of France”</p>
        <img
          src={header}
          alt=""
          className="header-image absolute bottom-0 h-1/2 w-full object-cover -z-10"
        />
      </main>
      <section className="w-full h-screen flex md:flex-row flex-col justify-center items-center md:items-end px-2 md:px-20 overflow-hidden">
        <div className="w-5/6 md:w-1/2 py-20 pl-10 border h-screen">
          <i className="px-4 py-2  rounded-full border mb-10">1</i>
          <h1 className="text-2xl md:text-4xl font-dm">Unparalleled Comfort</h1>
          <p className="text-sm md:text-md italic">
            Discover the allure of luxury living and the charm of French
            hospitality at Château. Nestled in the heart of the enchanting
            landscapes of France, our exceptional accommodation offers a blend
            of sophistication, comfort, and cultural richness.
          </p>
        </div>
        <div className="w-1/2 relative flex items-center justify-center">
          <img src={comfort3} alt="Overview Image" className="comfort3" />
          <img
            src={comfort2}
            alt="Overview Image"
            className="comfort2 absolute top-0 right-0 w-1/2 md:w-1/3 -mr-10 md:mr-20 mt-52 shadow-md"
          />
          <img
            src={comfort1}
            alt="Overview Image"
            className="comfort1 absolute bottom-0 left-0 w-1/2 md:w-1/3 -ml-10 md:ml-20 -mb-10 md:mb-10 shadow-md"
          />
        </div>
      </section>
      <section className="interior-section py-10 md:py-0 w-full h-auto flex md:flex-row flex-col-reverse justify-center items-center md:items-end px-2 md:px-20 overflow-hidden">
        <div className="w-1/2 relative flex items-center justify-center md:py-0">
          <img
            src={interior1}
            alt="Interior Image"
            className="inter1 w-full md:w-1/2"
          />
          <img
            src={interior2}
            alt="Interior Image"
            className="inter2 absolute bottom-0 left-0 w-1/2 md:w-1/3 -ml-10 md:ml-20  md:mb-10 shadow-md"
          />
          <img
            src={interior3}
            alt="Interior Image"
            className="inter3 absolute top-0 right-0 w-1/2 md:w-1/3 -mr-10 md:mr-20 md:mt-52 shadow-md"
          />
        </div>
        <div className="w-5/6 md:w-1/2 py-20 h-screen border pl-20">
          <i className="px-4 py-2 rounded-full border my-10">2</i>
          <h1 className="text-2xl md:text-4xl font-dm">French Elegance</h1>
          <p className="text-sm md:text-md italic">
            Our interiors are a testament to French sophistication. Immerse
            yourself in the ambiance of refined aesthetics, from carefully
            selected furnishings to tasteful decor. Every corner reflects the
            cultural richness and artistic heritage of France, creating an
            atmosphere that is both inviting and inspiring.
          </p>
        </div>
      </section>
      <section className="culinary-section w-full h-screen flex md:flex-row flex-col justify-center items-center md:items-center px-2 md:px-20 overflow-hidden">
        <div className="w-5/6 md:w-1/2 py-20 pl-10 border h-screen">
          <i className="px-4 py-2  rounded-full border mb-10">3</i>
          <h1 className="text-2xl md:text-4xl font-dm">Culinary Delights</h1>
          <p className="text-sm md:text-md italic">
            Embark on a gastronomic journey at our exquisite dining
            establishments. Our culinary team, inspired by the rich French
            culinary tradition, presents a menu that tantalizes the taste buds.
            Enjoy a fusion of flavors using locally sourced, fresh ingredients
            that capture the essence of French cuisine.
          </p>
        </div>
        <div className="w-1/2 relative flex items-center justify-center">
          <img src={food1} alt="Food Image" className="food1 w-full md:w-1/2" />
          <img
            src={food2}
            alt="Food Image"
            className="food2 absolute bottom-0 left-0 w-1/2 md:w-1/3 -ml-10 md:ml-20 -mb-32 shadow-md"
          />
        </div>
      </section>
      <section className="w-full h-auto flex flex-col items-center justify-center pt-60 pb-40 px-4">
        <h1 className="text-4xl md:text-9xl font-dm uppercase">
          Choose your comfort!
        </h1>
        <div className="flex md:flex-row flex-col gap-2">
          <div className="w-full md:w-1/3 border p-4">
            <h1 className="font-dm text-2xl md:text-4xl my-4">Deluxe Suite</h1>
            <p>Facilities:</p>
            <ul>
              <li>Spacious room with a king-sized bed</li>
              <li>Private balcony overlooking the scenic French countryside</li>
              <li>Luxurious en-suite bathroom with a Jacuzzi</li>
              <li>Complimentary French wine and cheese basket</li>
              <li>High-speed Wi-Fi and a flat-screen TV with international channels</li>
              <p>only €300 per night</p>
            </ul>
          </div>
          <div className="w-full md:w-1/3 border p-4">
            <h1 className="font-dm text-2xl md:text-4xl my-4">Deluxe Suite</h1>
            <p>Facilities:</p>
            <ul>
              <li>Spacious room with a king-sized bed</li>
              <li>Private balcony overlooking the scenic French countryside</li>
              <li>Luxurious en-suite bathroom with a Jacuzzi</li>
              <li>Complimentary French wine and cheese basket</li>
              <li>High-speed Wi-Fi and a flat-screen TV with international channels</li>
              <p>only €300 per night</p>
            </ul>
          </div>
          <div className="w-full md:w-1/3 border p-4">
            <h1 className="font-dm text-2xl md:text-4xl my-4">Deluxe Suite</h1>
            <p>Facilities:</p>
            <ul className="pl-10">
              <li>Spacious room with a king-sized bed</li>
              <li>Private balcony overlooking the scenic French countryside</li>
              <li>Luxurious en-suite bathroom with a Jacuzzi</li>
              <li>Complimentary French wine and cheese basket</li>
              <li>High-speed Wi-Fi and a flat-screen TV with international channels</li>
              <p>only €300 per night</p>
            </ul>
          </div>
        </div>
      </section>
      <section className="w-full h-screen">
        contact
      </section>
      <footer>

      </footer>
    </>
  );
}

export default App;
