import { Logo, Navbar } from "@components";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleClass = () => {
    setIsMenuActive(!isMenuActive);
  };

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

      <div className="container-custom">
        <div className="flex items-center justify-between gap-4 bg-white py-8">
          <div className="flex items-center gap-3">
            <button
              className="flex lg:hidden"
              onClick={toggleClass}
              aria-label="Toggle menu">
              <Menu />
            </button>
            <Logo />
          </div>

          <div
            data-testid="menu"
            className={`${!isMenuActive ? "-translate-x-full" : "-translate-x-0"} fixed left-0 top-0 flex h-full w-full flex-col items-start gap-5 bg-white px-4 py-5 transition duration-200 ease-in-out lg:relative lg:left-auto lg:top-auto lg:flex lg:h-auto lg:w-auto lg:-translate-x-0 lg:flex-row lg:items-center lg:gap-10 lg:px-0 lg:py-0`}>
            <button
              className="absolute right-4 top-5 lg:hidden"
              onClick={toggleClass}>
              <X />
            </button>

            <Navbar />

            <form className="relative -order-1 mt-14 flex w-full items-center lg:order-last lg:mt-0 lg:w-[35rem]">
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
            <button aria-label="Open shopping cart">
              <ShoppingCart className="size-5" />
            </button>
            <Link
              to="/account"
              aria-label="Go to user account"
              className="text-sm text-black">
              <User className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
