import header from "../assets/header.jpg";

export default function Main() {
  return (
    <main
      id="home"
      className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      <h1 className="text-7xl md:text-super uppercase font-dm">Château</h1>
      <p className="italic">-“Your Oasis in the Heart of France”</p>
      <img
        src={header}
        alt=""
        className="header-image absolute bottom-0 h-1/2 w-full object-cover -z-10"
      />
    </main>
  );
}
