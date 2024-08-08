import { Logo } from "@components";
import { Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <div className="flex items-center justify-center bg-black py-2 text-sm text-white">
        <p>
          Sign up and get 20% off to your first order.{" "}
          <a href="#" className="underline">
            Sign Up Now
          </a>
        </p>
      </div>
      <div className="container">
        <div className="flex items-center justify-between gap-4 bg-white py-8">
          <Logo />

          <div className="flex items-center gap-10">
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

            <form className="relative flex w-[35rem] items-center">
              <button type="submit" className="absolute left-4">
                <Search className="size-5 text-gray-400" />
              </button>
              <input
                type="search"
                placeholder="Search for products..."
                className="h-12 w-full rounded-3xl bg-gray-100 px-14 text-sm text-gray-400 transition-all placeholder:text-gray-400 focus:shadow-md focus:outline-none"
              />
            </form>
          </div>

          <div className="flex gap-4">
            <button>
              <ShoppingCart className="size-5" />
            </button>
            <Link to="/account" className="text-sm text-black">
              <User className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
