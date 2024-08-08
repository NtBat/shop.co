import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <ul className="flex gap-6">
        <li>
          <Link
            className="relative text-sm text-black after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:ease-in-out hover:after:w-full"
            to="/shop">
            Shop
          </Link>
        </li>
        <li>
          <Link
            className="relative text-sm text-black after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:ease-in-out hover:after:w-full"
            to="/sale">
            On Sale
          </Link>
        </li>
        <li>
          <Link
            className="relative text-sm text-black after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:ease-in-out hover:after:w-full"
            to="/new">
            New Arrivals
          </Link>
        </li>
        <li>
          <Link
            className="relative text-sm text-black after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:ease-in-out hover:after:w-full"
            to="/brands">
            Brands
          </Link>
        </li>
      </ul>
    </nav>
  );
}
