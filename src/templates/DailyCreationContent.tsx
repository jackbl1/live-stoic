import { Meta } from "../layout/Meta";
import { Navbar } from "../components/Navbar";
import { AppConfig } from "../utils/AppConfig";
import { Footer } from "../components/Footer";
import { DailyCreationParagraphs } from "../daily-creation/DailyCreationParagraphs";
import { DailyCreationApp } from "../daily-creation/DailyCreationApp";

const DailyCreationContent = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <DailyCreationApp />
    <DailyCreationParagraphs />
    <Footer />
  </div>
);

export { DailyCreationContent };
