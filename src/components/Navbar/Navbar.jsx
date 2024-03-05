import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Free Tools", href: "#", current: false },
  { name: "Resource Center", href: "#", current: false },
  { name: "Get Started", href: "#", current: false },
  { name: "Crypto Taxes", href: "#", current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Disclosure as="nav" className="bg-[#f8fafc]">
      {({ open }) => (
        <>
          <div className="mx-auto px-4 sm:px-6 lg:px-12 lg:py-1">
            <div className="relative flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex items-center flex-shrink-0">
                <img className="h-6 w-auto" src="logo.png" alt="KoinX Logo" />
              </div>

              {/* Menu Items */}
              <div className="hidden sm:flex sm:items-center sm:ml-6 gap-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-[#1d4ed8] px-6 font-semibold tracking-wide text-white"
                        : "text-gray-[#1e293b] hover:bg-[#e2e8f0] hover:text-[#1e293b] font-semibold tracking-wide",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {showMenu &&
                navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
