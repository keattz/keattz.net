import NavbarLink from "./link";

const navigation = [
  { name: "Blog", href: "/" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="container max-w-custom mx-auto px-4">
        <div className="flex h-16 items-center">
          <div className="space-x-4">
            {navigation.map((item) => (
              <NavbarLink key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
