"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarLink({ item }) {
  const pathname = usePathname();
  return (
    <Link
      key={item.name}
      href={item.href}
      className={classNames(
        pathname.startsWith(item.href)
          ? "bg-gray-900"
          : "text-gray-300 hover:bg-gray-700 hover:text-white",
        "font-medium px-3 py-2 rounded-md text-sm"
      )}
    >
      {item.name}
    </Link>
  );
}
