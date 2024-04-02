import Image from "next/image";
import Link from "next/link";
import React from "react";
import MainHeaderBackground from "./MainHeaderBackground";
import NavLink from "./NavLink";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className="flex justify-between py-8 px-4 md:px-[10%]">
        <Link
          href="/"
          className="flex gap-8 text-[#ddd6cb] font-bold items-center font-sans uppercase text-2xl"
        >
          <Image
            src="/logo.png"
            width={100}
            height={100}
            priority
            alt="Next Level Food Logo"
            className="object-contain"
          />
          NextLevel Food
        </Link>

        <ul className="flex gap-4 items-center text-lg">
          <li className="text-[#ddd6cb] font-bold py-2 px-4 rounded-lg hover:text-gradient hover:text-shadow">
            <NavLink href="/meals">Meals</NavLink>
          </li>

          <li className="text-[#ddd6cb] font-bold py-2 px-4 rounded-lg hover:text-gradient hover:text-shadow">
            <NavLink href={"/community"}>Foodies Community</NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default MainHeader;
