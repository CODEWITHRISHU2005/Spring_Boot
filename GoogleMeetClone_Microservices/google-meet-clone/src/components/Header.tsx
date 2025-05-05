"use client";

import Link from 'next/link';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

// Navigation menu items for Solutions dropdown
const solutionsItems = [
  {
    title: "For Individuals",
    href: "#",
    description: "Google Workspace Individual",
  },
  {
    title: "For Business",
    href: "#",
    description: "Google Workspace Business",
  },
  {
    title: "For Enterprise",
    href: "#",
    description: "Google Workspace Enterprise",
  },
  {
    title: "Education",
    href: "#",
    description: "Google Workspace for Education",
  },
  {
    title: "Nonprofits",
    href: "#",
    description: "Google for Nonprofits",
  },
];

// Navigation menu items for Products dropdown
const productItems = [
  {
    title: "Gmail",
    href: "#",
    description: "Custom business email",
  },
  {
    title: "Drive",
    href: "#",
    description: "Cloud storage",
  },
  {
    title: "Meet",
    href: "#",
    description: "Video conferencing",
  },
  {
    title: "Chat",
    href: "#",
    description: "Messaging for teams",
  },
  {
    title: "Calendar",
    href: "#",
    description: "Shared calendars",
  },
  {
    title: "Docs",
    href: "#",
    description: "Word processing",
  },
  {
    title: "Sheets",
    href: "#",
    description: "Spreadsheets",
  },
  {
    title: "Slides",
    href: "#",
    description: "Presentation builder",
  },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-900 dark:border-gray-800">
      <div className="google-container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://ext.same-assets.com/2256776582/1294131253.svg"
              alt="Google Meet"
              width={24}
              height={24}
            />
            <span className="font-google-sans text-[#5f6368] dark:text-gray-300 text-xl">Meet</span>
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent font-google-sans text-[#5f6368] dark:text-gray-300">Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {solutionsItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              href={item.href}
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent font-google-sans text-[#5f6368] dark:text-gray-300">Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {productItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              href={item.href}
                            >
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className="font-google-sans text-[#5f6368] dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-transparent">
                      Industries
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className="font-google-sans text-[#5f6368] dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-transparent">
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Desktop CTA buttons */}
        <div className="hidden md:flex md:items-center md:gap-4">
          <ThemeToggle />
          <Button variant="outline" className="btn-outline rounded-md font-google-sans dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
            Try Meet for work
          </Button>
          <Button variant="outline" className="btn-outline rounded-md font-google-sans dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
            Sign in
          </Button>
          <Button className="btn-primary rounded-md font-google-sans">
            Go to app
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4">
                <div className="py-4">
                  <h4 className="mb-4 font-google-sans text-lg font-medium">Solutions</h4>
                  {solutionsItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block py-2 text-sm font-google-sans text-[#5f6368] dark:text-gray-300 hover:text-black dark:hover:text-white"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="py-4">
                  <h4 className="mb-4 font-google-sans text-lg font-medium">Products</h4>
                  {productItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block py-2 text-sm font-google-sans text-[#5f6368] dark:text-gray-300 hover:text-black dark:hover:text-white"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="py-4">
                  <h4 className="mb-4 font-google-sans text-lg font-medium">Industries</h4>
                  <Link
                    href="#"
                    className="block py-2 text-sm font-google-sans text-[#5f6368] dark:text-gray-300 hover:text-black dark:hover:text-white"
                  >
                    Healthcare
                  </Link>
                  <Link
                    href="#"
                    className="block py-2 text-sm font-google-sans text-[#5f6368] dark:text-gray-300 hover:text-black dark:hover:text-white"
                  >
                    Retail
                  </Link>
                </div>
                <div className="py-4">
                  <Button variant="outline" className="w-full mb-2 btn-outline rounded-md font-google-sans dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
                    Try Meet for work
                  </Button>
                  <Button variant="outline" className="w-full mb-2 btn-outline rounded-md font-google-sans dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
                    Sign in
                  </Button>
                  <Button className="w-full btn-primary rounded-md font-google-sans">
                    Go to app
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
