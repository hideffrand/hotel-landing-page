export default function Navbar() {
  return (
    <nav className="fixed font-dm z-30 w-full py-10 md:px-20 bg-white text-black flex justify-center md:justify-end items-center border-b">
      <div className="px-4 w-full flex items-center justify-between gap-4 text-xs md:text-md">
        <div className="flex gap-5">
          <a className="smooth-transition hover:underline" href="#home">
            HOME
          </a>
          <a className="smooth-transition hover:underline" href="#about">
            ABOUT
          </a>
          <a className="smooth-transition hover:underline" href="#rooms">
            ROOMS
          </a>
        </div>
        <a
          href="#book"
          className="smooth-transition font-dm px-6 py-2 rounded-full text-white bg-black hover:text-black hover:bg-orange-400"
        >
          BOOK NOW
        </a>
      </div>
    </nav>
  );
}
