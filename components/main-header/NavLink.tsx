"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavLinkProps = {
  href: string;
  children: string;
  className?: string;
};

const NavLink = ({ href, children, className }: NavLinkProps) => {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={`${
        pathName.startsWith(href) ? "text-gradient" : ""
      }  ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
