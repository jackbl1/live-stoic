import { Meta } from "../layout/Meta";
import { AppConfig } from "../utils/AppConfig";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    {/* <VerticalFeatures /> */}
    {/* <Banner /> */}
    <Footer />
  </div>
);

export { Base };
