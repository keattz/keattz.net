import Meta from "./meta";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="max-w-xl mx-auto p-5">
      <Meta />
      <h2 className="font-bold mb-5 text-4xl">
        <Link href="/" className="hover:underline">
          keattz.net
        </Link>
      </h2>
      <main>{children}</main>
    </div>
  );
}
