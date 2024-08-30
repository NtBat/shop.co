import paymentForm from "@assets/payment-form.svg";
import { Logo, Newsletter } from "@components";
import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="mt-32 bg-gray-100 pb-5 pt-28 lg:mt-48">
      <div className="relative -mt-48">
        <Newsletter />
      </div>
      <div className="container-custom">
        <div className="mt-8 flex flex-wrap justify-between gap-5">
          <div className="w-full space-y-5 lg:w-auto">
            <Logo />
            <p className="text-sm lg:max-w-64">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="group flex h-7 w-7 items-center justify-center rounded-full border border-solid border-gray-400 bg-white hover:bg-black"
                aria-label="Twitter logo">
                <Twitter className="group-hover:text-white" size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook logo"
                className="group flex h-7 w-7 items-center justify-center rounded-full border border-solid border-gray-400 bg-white hover:bg-black">
                <Facebook className="group-hover:text-white" size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram logo"
                className="group flex h-7 w-7 items-center justify-center rounded-full border border-solid border-gray-400 bg-white hover:bg-black">
                <Instagram className="group-hover:text-white" size={18} />
              </a>
              <a
                href="#"
                aria-label="Github logo"
                className="group flex h-7 w-7 items-center justify-center rounded-full border border-solid border-gray-400 bg-white hover:bg-black">
                <Github className="group-hover:text-white" size={18} />
              </a>
            </div>
          </div>
          <div className="w-[46%] lg:w-auto">
            <h3 className="font-semibold uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/about"
                  className="relative text-sm after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:ease-in-out hover:after:w-full">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="relative text-sm after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:ease-in-out hover:after:w-full">
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/works"
                  className="relative text-sm after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:ease-in-out hover:after:w-full">
                  Works
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  className="relative text-sm after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:ease-in-out hover:after:w-full">
                  Career
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-[46%] lg:w-auto">
            <h3 className="font-semibold uppercase">Help</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/customer-support"
                  className="relative text-sm after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:ease-in-out hover:after:w-full">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link
                  to="/delivery-details"
                  className="relative text-sm after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:ease-in-out hover:after:w-full">
                  Delivery Details
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="relative text-sm after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:ease-in-out hover:after:w-full">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="relative text-sm after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:ease-in-out hover:after:w-full">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-[46%] lg:w-auto">
            <h3 className="font-semibold uppercase">Faq</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/faq-account"
                  className="relative text-sm after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:ease-in-out hover:after:w-full">
                  Account
                </Link>
              </li>
              <li>
                <Link
                  to="/faq-manage-deliveries"
                  className="relative text-sm after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:ease-in-out hover:after:w-full">
                  Manage Deliveries
                </Link>
              </li>
              <li>
                <Link
                  to="/faq-orders"
                  className="relative text-sm after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:ease-in-out hover:after:w-full">
                  Orders
                </Link>
              </li>
              <li>
                <Link
                  to="/faq-payments"
                  className="relative text-sm after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:ease-in-out hover:after:w-full">
                  Payments
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-[46%] lg:w-auto">
            <h3 className="font-semibold uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/free-ebooks"
                  className="relative text-sm after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:ease-in-out hover:after:w-full">
                  Free eBooks
                </Link>
              </li>
              <li>
                <Link
                  to="/development-tutorial"
                  className="relative text-sm after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:ease-in-out hover:after:w-full">
                  Development Tutorial
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="relative text-sm after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:ease-in-out hover:after:w-full">
                  How to - Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/youtube-playlist"
                  className="relative text-sm after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:ease-in-out hover:after:w-full">
                  Youtube Playlist
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-5 flex flex-col items-center justify-between gap-5 border-t border-solid border-gray-200 pt-5 lg:flex-row">
          <p className="relative text-sm after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:ease-in-out hover:after:w-full">
            Shop.co © 2000-2024, All Rights Reserved
          </p>
          <div>
            <img src={paymentForm} alt="Flags credit card" loading="lazy" />
          </div>
        </div>
      </div>
    </footer>
  );
}
