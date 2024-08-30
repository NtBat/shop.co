import paymentForm from "@assets/payment-form.svg";
import { Logo, Newsletter } from "@components";
import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    href: "#",
    label: "Twitter logo",
    icon: Twitter,
  },
  {
    href: "#",
    label: "Facebook logo",
    icon: Facebook,
  },
  {
    href: "#",
    label: "Instagram logo",
    icon: Instagram,
  },
  {
    href: "#",
    label: "Github logo",
    icon: Github,
  },
];

const sections = [
  {
    title: "Company",
    links: [
      { name: "About", to: "/about" },
      { name: "Features", to: "/features" },
      { name: "Works", to: "/works" },
      { name: "Career", to: "/career" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "Customer Support", to: "/customer-support" },
      { name: "Delivery Details", to: "/delivery-details" },
      { name: "Terms & Conditions", to: "/terms" },
      { name: "Privacy Policy", to: "/privacy-policy" },
    ],
  },
  {
    title: "Faq",
    links: [
      { name: "Account", to: "/faq-account" },
      { name: "Manage Deliveries", to: "/faq-manage-deliveries" },
      { name: "Orders", to: "/faq-orders" },
      { name: "Payments", to: "/faq-payments" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Free eBooks", to: "/free-ebooks" },
      { name: "Development Tutorial", to: "/development-tutorial" },
      { name: "How to - Blog", to: "/blog" },
      { name: "Youtube Playlist", to: "/youtube-playlist" },
    ],
  },
];

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
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className="group flex h-7 w-7 items-center justify-center rounded-full border border-solid border-gray-400 bg-white hover:bg-black">
                    <IconComponent
                      className="group-hover:text-white"
                      size={18}
                    />
                  </a>
                );
              })}
            </div>
          </div>
          {sections.map((section, index) => (
            <div key={index} className="w-[46%] lg:w-auto">
              <h3 className="font-semibold uppercase">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.to}
                      className="relative text-sm after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:ease-in-out hover:after:w-full">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
