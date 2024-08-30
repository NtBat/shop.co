import paymentForm from "@assets/payment-form.svg";
import { Logo, Newsletter } from "@components";
import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="mt-48 bg-gray-100 pb-5 pt-28">
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
                <Link to="/about" className="text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/works" className="text-sm">
                  Works
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-sm">
                  Career
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-[46%] lg:w-auto">
            <h3 className="font-semibold uppercase">Help</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/customer-support" className="text-sm">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link to="/delivery-details" className="text-sm">
                  Delivery Details
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-[46%] lg:w-auto">
            <h3 className="font-semibold uppercase">Faq</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/faq-account" className="text-sm">
                  Account
                </Link>
              </li>
              <li>
                <Link to="/faq-manage-deliveries" className="text-sm">
                  Manage Deliveries
                </Link>
              </li>
              <li>
                <Link to="/faq-orders" className="text-sm">
                  Orders
                </Link>
              </li>
              <li>
                <Link to="/faq-payments" className="text-sm">
                  Payments
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-[46%] lg:w-auto">
            <h3 className="font-semibold uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/free-ebooks" className="text-sm">
                  Free eBooks
                </Link>
              </li>
              <li>
                <Link to="/development-tutorial" className="text-sm">
                  Development Tutorial
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm">
                  How to - Blog
                </Link>
              </li>
              <li>
                <Link to="/youtube-playlist" className="text-sm">
                  Youtube Playlist
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-5 flex flex-col items-center justify-between gap-5 border-t border-solid border-gray-200 pt-5 lg:flex-row">
          <p className="text-sm">Shop.co © 2000-2024, All Rights Reserved</p>
          <div>
            <img src={paymentForm} alt="Flags credit card" loading="lazy" />
          </div>
        </div>
      </div>
    </footer>
  );
}
