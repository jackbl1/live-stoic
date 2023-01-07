import Link from "next/link";
import { Meta } from "../layout/Meta";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { AppConfig } from "../utils/AppConfig";
import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { Logo } from "./Logo";
import { VerticalFeatures } from "./VerticalFeatures";

const AboutContent = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li className=" hover:text-white hover:bg-gray-800">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
    <VerticalFeatures />
    <Banner />
    <Footer />
  </div>
);

export { AboutContent };
