import { Brain } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="py-6 font-bold border-b-1 border-gray-600 flex items-center justify-around">
      <div className="logo-container flex gap-2">
        <Brain size={30} />
        <p className="text-2xl">DSA Visualized</p>
      </div>
      <nav>
        <ul className="flex gap-6 text-lg">
          <li>
            <Link
              className="hover:text-purple-600 ease-out duration-300 transition-all"
              href="/concepts"
            >
              Concepts
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-purple-600 ease-out duration-300 transition-all"
              href="/data-structures"
            >
              Data Structures
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-purple-600 ease-out duration-300 transition-all"
              href="/algorithms"
            >
              Algorithms
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-purple-600 ease-out duration-300 transition-all"
              href="/challenges"
            >
              Challenges
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-purple-600 ease-out duration-300 transition-all"
              href="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
