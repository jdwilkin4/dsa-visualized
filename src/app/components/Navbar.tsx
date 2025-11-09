"use client";
import { useState } from "react";
import Link from "next/link";
import { Brain, Menu, X } from "lucide-react";
import { useMediaQuery } from "../hooks/useMediaQuery";

type NavLinksProps = {
  text: string;
  href: string;
};

export function Navbar() {
  const links: NavLinksProps[] = [
    { text: "Concepts", href: "/concepts" },
    { text: "Data Structures", href: "/data-structures" },
    { text: "Algorithms", href: "/algorithms" },
    { text: "Challenges", href: "/challenges" },
    { text: "About", href: "/about" },
  ];

  const isDesktop = useMediaQuery("(min-width: 768px)");

  const renderNavigation = () => {
    if (isDesktop === undefined) {
      // show placeholder
      return <div className="w-10 h-10"></div>;
    }

    if (isDesktop) {
      return <LinksList className="flex gap-4" linksArr={links} />;
    }

    return <MobileMenu linksArr={links} />;
  };

  return (
    <header className="py-6 font-bold border-b border-gray-600 flex items-center justify-around">
      <div className="logo-container flex gap-2">
        <Brain size={30} />
        <p className="text-2xl">DSA Visualized</p>
      </div>
      <nav className="relative">{renderNavigation()}</nav>
    </header>
  );
}

type LinksListProps = {
  className?: string;
  linksArr: NavLinksProps[];
};

function LinksList({ className = "", linksArr }: LinksListProps) {
  return (
    <ul className={className}>
      {linksArr.map(({ text, href }) => (
        <li key={text}>
          <Link
            className="hover:text-purple-600 ease-out duration-300 transition-all"
            href={href}
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function MobileMenu({ linksArr }: LinksListProps) {
  const [isMenuShowing, setIsMenuShowing] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsMenuShowing(true)}
        className="cursor-pointer p-2 rounded-sm hover:bg-gray-800"
      >
        <Menu />
      </button>
      {isMenuShowing && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsMenuShowing(false)}
          />
          {/* Side Panel */}
          <div className="fixed top-0 right-0 h-screen w-2/3 max-w-[80%] p-4 bg-zinc-950 border-l border-gray-700 shadow-xl z-50">
            <button
              className="absolute right-0 top-0 p-2 rounded-sm hover:bg-gray-800 cursor-pointer"
              aria-label="Close navigation menu"
              onClick={() => setIsMenuShowing(false)}
            >
              <X />
            </button>

            <LinksList
              linksArr={linksArr}
              className="flex flex-col gap-4 text-base"
            />
          </div>
        </>
      )}
    </>
  );
}
