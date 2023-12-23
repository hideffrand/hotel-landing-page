import comfort1 from "../assets/comfort1.png";
import comfort2 from "../assets/comfort2.png";
import comfort3 from "../assets/comfort3.png";
import interior1 from "../assets/interior1.jpg";
import interior2 from "../assets/interior2.jpg";
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="w-full h-screen flex md:flex-row flex-col justify-center items-center md:items-end px-2 md:px-20 overflow-hidden"
      >
        <div className="w-5/6 md:w-1/2 border h-screen p-6 md:p-20 flex flex-col justify-start md:justify-between">
          <div className="flex items-center gap-4 py-10">
            <i className="px-4 py-2 border rounded-full">1</i>
            <h1 className="text-2xl md:text-4xl font-dm uppercase">
              Unparalleled Comfort
            </h1>
          </div>
          <p className="text-sm md:text-md italic text-justify">
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
      <section className="interior-section py-10 md:py-0 w-full h-auto flex md:flex-row flex-col-reverse justify-center items-center overflow-hidden">
        <div className="w-1/2 relative flex items-center justify-center md:translate-y-0 -translate-y-6">
          <img
            src={interior1}
            alt="Interior Image"
            className="inter1 w-full md:w-1/2"
          />
          <img
            src={interior2}
            alt="Interior Image"
            className="inter2 absolute bottom-0 left-0 w-5/6 md:w-1/3 -ml-20 md:ml-20 -mb-32 md:mb-10 shadow-md"
          />
        </div>
        <div className="w-5/6 md:w-1/2 border h-auto py-20 md:h-screen p-6 md:p-20 flex flex-col justify-start md:justify-between">
          <div className="flex items-center gap-4 py-10">
            <i className="px-4 py-2 border rounded-full">2.</i>
            <h1 className="text-2xl md:text-4xl font-dm">French Elegance</h1>
          </div>
          <p className="text-sm md:text-md italic text-justify">
            Our interiors are a testament to French sophistication. Immerse
            yourself in the ambiance of refined aesthetics, from carefully
            selected furnishings to tasteful decor. Every corner reflects the
            cultural richness and artistic heritage of France, creating an
            atmosphere that is both inviting and inspiring.
          </p>
        </div>
      </section>
      <section className="culinary-section w-full h-screen flex md:flex-row flex-col justify-center items-center md:items-center px-2 md:px-20 overflow-hidden">
        <div className="w-5/6 md:w-1/2 border h-screen p-6 md:p-20 flex flex-col justify-start md:justify-between">
          <div className="flex items-center gap-4 py-10">
            <i className="px-4 py-2 border rounded-full">3.</i>
            <h1 className="text-2xl md:text-4xl font-dm">Culinary Delights</h1>
          </div>
          <p className="text-sm md:text-md italic text-justify">
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
            className="food2 absolute bottom-0 right-0 w-5/6 md:w-1/3 -mr-20 md:mr-20 -mb-32 shadow-md"
          />
        </div>
      </section>
    </>
  );
}
