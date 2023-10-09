import NavbarLink from "./link";

const navigation = [
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <nav className="bg-neutral-800 mb-4 shadow-lg">
      <div className="container max-w-custom mx-auto px-4">
        <div className="flex h-12 items-center">
          <div className="space-x-4">
            {navigation.map((item) => (
              <NavbarLink href={item.href} key={item.name} name={item.name} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
