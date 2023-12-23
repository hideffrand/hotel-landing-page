import header from "../assets/header.jpg";

export default function Footer() {
  return (
    <footer
      className="bg-cover bg-bottom w-full h-20"
      style={{ backgroundImage: `url(${header})` }}
    ></footer>
  );
}
