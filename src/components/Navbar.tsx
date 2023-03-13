import { Logo } from "./Logo";
import Link from "next/link";
import { PeazeButton } from "./PeazeButton";

const Navbar = () => (
  <div className="flex justify-between items-center p-4 bg-gray-800">
    <div>
      <Link href="/">
        <Logo xl />
      </Link>
    </div>
    <div>
      <Link
        href="/momento"
        className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-600 mx-2"
      >
        Momento
      </Link>
      <Link
        href="/daily-creation"
        className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-600 mx-2"
      >
        Daily Creation
      </Link>
      <Link
        href="/about"
        className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-600 mx-2"
      >
        About
      </Link>
      {/* <Wallet /> */}
      <PeazeButton />
    </div>
  </div>
);

export { Navbar };
