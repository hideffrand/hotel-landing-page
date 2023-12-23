export default function Contact() {
  return (
    <section id="book" className="w-full h-auto flex flex-col items-center py-10 px-4 md:px-40">
      <h1 className="text-center py-10 text-4xl md:text-9xl font-dm uppercase">
        BOOK YOUR <u>ESCAPE.</u>
      </h1>
      <form action="" className="flex flex-col items-end w-full gap-10">
        <input required className="w-full focus:outline-none py-6 px-10" type="text" placeholder="Email"/>
        <input required className="w-full focus:outline-none py-6 px-10" type="text" placeholder="Name"/>
        <input required className="w-full focus:outline-none py-6 px-10" type="text" placeholder="Phone"/>
        <input required className="w-full focus:outline-none py-6 px-10" type="text" placeholder="Room type"/>
        <input required className="w-full focus:outline-none py-6 px-10" type="text" placeholder="Checkin"/>
        <input required className="w-full focus:outline-none py-6 px-10" type="text" placeholder="Additional message..." />
        <button type="submit" className="w-1/3 bg-black text-white font-dm p-4 hover:bg-white hover:text-black hover:border border-black">Send</button>
      </form>
      <div className="flex md:flex-row flex-col justify-between w-full py-20">
        <p className="uppercase italic font-dm text-2xl">contacts-------------</p>
        <p className="uppercase italic font-dm text-xl hover:underline cursor-pointer">Instagram</p>
        <p className="uppercase italic font-dm text-xl hover:underline cursor-pointer">Email</p>
        <p className="uppercase italic font-dm text-xl hover:underline cursor-pointer">+00 33 1 40 00 00 00</p>
        <p className="uppercase italic font-dm text-xl hover:underline cursor-pointer">12 rue de la Croissant</p>
      </div>
    </section>
  );
}
