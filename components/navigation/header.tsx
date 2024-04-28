import { ThemeController } from "@/components/navigation/theme-controller";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="text-base font-bold w-full p-5 container font-sora px-10">
      <ul className="flex items-center gap-4">
        <li className="flex-1">
          <Link
            href="/"
            className="navbar_link relative"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#skills"
            className="navbar_link relative"
          >
            Skills
          </Link>
        </li>

        <li>
          <ThemeController />
        </li>
      </ul>
    </nav>
  );
}
