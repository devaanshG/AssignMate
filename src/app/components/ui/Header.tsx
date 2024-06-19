import { Menu, UserRound } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-24 w-[90vw] border-b-2 rounded-md flex justify-between items-center fixed top-0 left-[50%] translate-x-[-50%] z-0">
      <p className="text-2xl">
        Assign<span className="font-bold">Mate</span>
      </p>
      <ul className="flex text-xl mr-4 h-14 items-center">
        <li className="hover:bg-ecstasy-300 rounded-md p-4 transition-colors">
          Try it
        </li>
        <li className="hover:bg-ecstasy-300 rounded-md p-4 transition-colors">
          Pricing
        </li>
        <li className="hover:bg-ecstasy-300 rounded-md p-4 transition-colors">
          About
        </li>
        <li className="hover:bg-ecstasy-300 rounded-md p-4 transition-colors">
          Contact
        </li>
      </ul>

      <nav className="flex items-center">
        <Link href={"/register"}>
          <UserRound
            size={45}
            strokeWidth={1.25}
            className="mr-4 hover:stroke-[1.5] hover:translate-y-[-2px] transition-all duration-300 cursor-pointer"
          />
        </Link>
        <Menu
          size={50}
          strokeWidth={1.25}
          className="hover:stroke-[1.5] hover:translate-y-[-2px] transition-all duration-300 cursor-pointer max-sm:block hidden"
        />
      </nav>
    </header>
  );
}
