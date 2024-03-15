import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 py-16">
      <header className="relative">
        <Image
          src={'/logo.png'}
          alt="logo"
          width={120}
          height={120}
        />
      </header>
      <section>
        <h1 className="text-4xl font-sans font-bold text-center">Nos estamos renovando</h1>
      </section>
      <footer className="flex flex-col items-center justify-evenly">
        <span className="flex items-center justify-center gap-2">
          <FaLocationArrow color="white" size={12} />
          San Martin 1641, Pueblo Esther
        </span>
        <span className="flex items-center justify-center gap-2">
          <FaPhone color="white" size={12} />
          +54 9 3415 00-5025
        </span>
      </footer>
    </main>
  );
}
