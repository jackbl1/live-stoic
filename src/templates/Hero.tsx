import Link from "next/link";
import { Background } from "../background/Background";
import { HeroOneButton } from "../hero/HeroOneButton";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li className=" hover:text-white hover:bg-gray-800">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className=" hover:text-white hover:bg-gray-800">
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {"The "}
            <span className="text-gray-600 font-serif">Live Stoic</span>
            {" Project"}
          </>
        }
        description="'How long are you going to wait before you demand the best for yourself?' - Epictetus "
      />
    </Section>
  </Background>
);

export { Hero };
