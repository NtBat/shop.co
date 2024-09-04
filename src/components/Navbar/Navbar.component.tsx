import { useMenu } from "@hooks";
import { Link } from "react-router-dom";

export function Navbar() {
  const { data: menuItems, isLoading } = useMenu();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <nav>
      <ul className="flex flex-col gap-6 lg:flex-row">
        {menuItems?.map((item) => (
          <li key={item.id}>
            <Link
              className="relative text-sm text-black after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:ease-in-out hover:after:w-full"
              to={item.link}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
