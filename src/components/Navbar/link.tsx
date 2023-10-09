"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarLink({
  href,
  name,
}: {
  href: string;
  name: string;
}) {
  const pathname = usePathname();
  return (
    <Link
      key={name}
      href={href}
      className={classNames(
        pathname.startsWith(href)
          ? "bg-neutral-900 text-green-400"
          : "text-zinc-300 hover:bg-zinc-800 hover:text-white",
        "font-medium px-3 py-2 rounded-md text-sm"
      )}
    >
      {name}
    </Link>
  );
}
