import { VerticalFeatureRow } from "../components/feature/VerticalFeatureRow";
import { Section } from "../layout/Section";
import Image from "next/image";

const DailyCreationParagraphs = () => (
  <>
    <div className="mt-20 flex flex-wrap">
      <div className="w-full sm:w-1/2 sm:px-6">
        <h3 className="text-center text-3xl text-gray-900 font-semibold">
          Rules
        </h3>
        <ul className="mt-6 text-xl leading-9">
          <li>
            - Each day a new creative exercise will appear in the app above.
          </li>
          <li>- Simply follow the instructions and submit your creation. </li>
          <li>
            - This app is built open-sourced on the Polygon blockchain so your
            progress will be immutably tracked and rewards will be given at
            milestones and retroactively.
          </li>
          <li>
            - Make this brain exercise part of your routine and receive the
            benefits, internal and external.
          </li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 p-6">
        <Image
          src="/assets/images/daily-creation.png"
          alt="daily creation"
          width={540}
          height={540}
        />
      </div>
    </div>
    <Section
      title="About Daily Creation"
      description="The ancient stoics held sacred their morning routines. Rather than filled with consumption of thoughtless media like the mornings of today, the ancient stoics preached intention, creativity, and boundless energy directed towards accomplishing their goals of the day. Daily Creation is a project to help you shift your morning routine away from whatever media sources usually fill your time. Focus your energy on creation instead."
    >
      <VerticalFeatureRow title="" description="" image="" imageAlt="" />
    </Section>
  </>
);

export { DailyCreationParagraphs };
