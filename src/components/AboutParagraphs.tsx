import { VerticalFeatureRow } from "./feature/VerticalFeatureRow";
import { Section } from "../layout/Section";

const AboutParagraphs = () => (
  <Section
    title="About Live Stoic"
    description="Live Stoic is a project to help you live a better life through stoic philosophy. We will be releasing games and exercises to make you think about your life with a stoic mindset.
    All features will be open sourced and built on the Solana blockchain."
  >
    <VerticalFeatureRow
      title="What is Stoicism?"
      description="Stoicism is a philosophy that teaches you to live a good life by accepting the things you cannot change and focusing on the things you can."
      image="/assets/images/virtues.png"
      imageAlt="stoicism diagram"
    />
    <VerticalFeatureRow
      title="Marcus Aurelius"
      description="Marcus Aurelius was an Emporer of Rome who practiced stoicism. He wrote a book called Meditations which is a collection of his thoughts and reflections, and is considered one of the most important stoic texts."
      image="/assets/images/marcus-aurelius.jpeg"
      imageAlt="Marcus Aurelius"
      reverse
    />
    <VerticalFeatureRow
      title="Epictetus"
      description="Epictetus was a stoic philosopher who lived in Greece. He was a slave who was freed by his master and went on to become a teacher. He wrote a book called The Enchiridion which is a collection of his stoic teachings."
      image="/assets/images/epictetus.jpeg"
      imageAlt="Epictetus"
    />
    <VerticalFeatureRow
      title="Seneca"
      description="Seneca was a stoic philosopher from Rome who was a tutor to the emperor Nero. He wrote a book called Letters from a Stoic in which he wrote letters to his friend Lucilius about stoicism."
      image="/assets/images/seneca.png"
      imageAlt="Seneca"
      reverse
    />
  </Section>
);

export { AboutParagraphs };
