import { Meta } from "../layout/Meta";
import { Navbar } from "../components/Navbar";
import { AppConfig } from "../utils/AppConfig";
import { Footer } from "../components/Footer";
import { AboutParagraphs } from "../components/AboutParagraphs";

const AboutContent = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <AboutParagraphs />
    {/* <Banner /> */}
    <Footer />
  </div>
);

export { AboutContent };
