"use client";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero-section mx-auto mt-12 md:mt-48 text-center text-white relative z-10 max-w-screen-xl px-4">
          <h1 className="text-5xl font-extrabold">
            Visualize. Understand.{" "}
            <span className="text-violet-600">Master</span> Data Structures
            &amp; Algorithms.
          </h1>
          <p className="text-xl text-gray-200 my-12  md:w-[60%] mx-auto">
            Learn complex DSA concepts through interactive visualizations,
            plain-language explanations, and practical code examples.
          </p>
          <Link
            className="text-white text-lg flex items-center gap-2 block mx-auto w-fit px-4 py-2 rounded-md bg-violet-600 hover:bg-violet-700"
            href="/concepts"
          >
            Start learning <MoveRight />
          </Link>
        </section>
      </main>
    </>
  );
}
