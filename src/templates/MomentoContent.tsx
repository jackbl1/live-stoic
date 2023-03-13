import { Meta } from "../layout/Meta";
import { Navbar } from "../components/Navbar";
import { AppConfig } from "../utils/AppConfig";
import { Footer } from "../components/Footer";
import { MomentoApp } from "../momento/MomentoApp";
import { MomentoParagraphs } from "../momento/MomentoParagraphs";

const MomentoContent = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <MomentoApp />
    <MomentoParagraphs />
    <Footer />
  </div>
);

export { MomentoContent };
