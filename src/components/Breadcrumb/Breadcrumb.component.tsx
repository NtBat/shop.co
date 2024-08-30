import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

type BreadcrumbProps = {
  breadcrumbItems: { name: string; path: string; isCurrently?: boolean }[];
};

export function Breadcrumb({ breadcrumbItems }: BreadcrumbProps) {
  return (
    <ul className="flex items-center gap-2">
      <li className="flex items-center gap-1">
        <Link to="/" className="text-sm">
          Home
        </Link>
        <ChevronRight size={18} />
      </li>
      {breadcrumbItems.map((item, index) => (
        <li key={index} className="flex items-center gap-1">
          {item.isCurrently ? (
            <span className="text-sm text-gray-500">{item.name}</span>
          ) : (
            <>
              <Link to={item.path} className="text-sm">
                {item.name}
              </Link>
              <ChevronRight size={18} />
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
