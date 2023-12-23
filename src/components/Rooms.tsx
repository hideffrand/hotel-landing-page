export default function Rooms() {
  return (
    <section
      id="rooms"
      className="w-full h-auto flex flex-col items-center justify-start pt-60 pb-40 px-4"
    >
      <h1 className="text-center py-10 text-4xl md:text-9xl font-dm uppercase">
      __________Choose your comfort!__________
      </h1>
      <div className="flex md:flex-row flex-col justify-center gap-6 h-auto w-full">
        <div className="w-full p-10 md:p-20 h-1/2 bg-white border flex flex-col justify-between hover:shadow-md cursor-pointer">
          <h1 className="text-center font-dm text-2xl md:text-4xl my-4">
            Deluxe Suite
          </h1>
          <ul>
            <p>Facilities:</p>
            <li>- Spacious room with a king-sized bed</li>
            <li>- Private balcony overlooking French countryside</li>
            <li>- Luxurious en-suite bathroom with a Jacuzzi</li>
          </ul>
          <p className="text-end py-10 italic">
            only <span className="font-bold">€300</span> per night
          </p>
        </div>

        <div className="w-full p-10 md:p-20 h-1/2 bg-white border flex flex-col justify-between hover:shadow-md cursor-pointer">
          <h1 className="text-center font-dm text-2xl md:text-4xl my-4">
            Executive Room
          </h1>
          <ul>
            <p>Facilities:</p>
            <li>- Elegant room with a queen-sized bed</li>
            <li>- Panoramic views of the charming Château garden</li>
            <li>- Modern en-suite bathroom with a rainfall shower</li>
          </ul>
          <p className="text-end py-10 italic">
            only <span className="font-bold">€200</span> per night
          </p>
        </div>

        <div className="w-full p-10 md:p-20 h-1/2 bg-white border flex flex-col justify-between hover:shadow-md cursor-pointer">
          <h1 className="text-center font-dm text-2xl md:text-4xl my-4">
            Classic Studio
          </h1>
          <ul>
            <p>Facilities:</p>
            <li>- Cozy studio with a double bed</li>
            <li>- French-inspired decor and artwork</li>
            <li>- Compact kitchenette with a minibar</li>
          </ul>
          <p className="text-end py-10 italic">
            only <span className="font-bold">€100</span> per night
          </p>
        </div>
      </div>
    </section>
  );
}
