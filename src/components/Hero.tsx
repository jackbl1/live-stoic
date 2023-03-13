import { Background } from "../background/Background";
import { Section } from "../layout/Section";
import { Navbar } from "./Navbar";
import Link from "next/link";

const Hero = () => (
  <Background color="bg-gray-100 h-screen">
    <Navbar />

    <Section yPadding="pt-20 pb-32">
      <header className="text-center">
        <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
          {"The "}
          <span className="text-gray-600 font-serif">Live Stoic</span>
          {" Project"}
        </h1>
        <div className="text-2xl mt-4 mb-16">
          {
            "'How long are you going to wait before you demand the best for yourself?' - Epictetus "
          }
        </div>

        <Link
          href="/daily-creation"
          className="px-4 py-2 rounded-lg bg-gray-500 text-black font-bold hover:bg-gray-400 mx-2"
        >
          Daily Creation
        </Link>
        <Link
          href="/momento"
          className="px-4 py-2 rounded-lg bg-gray-500 text-black font-bold hover:bg-gray-400 mx-2"
        >
          Momento
        </Link>
      </header>
    </Section>
  </Background>
);

export { Hero };
