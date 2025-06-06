"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cva } from "class-variance-authority";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

import "./nav.css";

interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
}

const navList: NavItem[] = [
  { name: "Event", href: "/" },
  { name: "Declaration", href: "/declaration" },
  {
    name: "Foundation",
    href: "/foundation",
    children: [
      { name: "Justice Fund", href: "/foundation/justice-fund" },
      { name: "Tech Fairness Fund", href: "/foundation/tech-fairness-fund" },
    ],
  },
  { name: "About", href: "/about" },
];

// 样式变体
const menuItemStyles = cva(
  "relative px-5 py-2.5 cursor-pointer transition-colors rounded-[5px]",
  {
    variants: {
      isActive: {
        true: "font-bold text-[var(--selected-text-color)] text-white",
        false: "hover:text-accent-foreground",
      },
    },
  }
);

const triggerStyles = cva("bg-transparent! p-0 h-auto font-normal text-[16px]");

export default function Nav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  const renderNavItem = (item: NavItem) => {
    const hasChildren = Boolean(item.children?.length);
    const active = isActive(item.href);

    if (hasChildren) {
      return (
        <NavigationMenuItem
          key={item.name}
          className={menuItemStyles({ isActive: active })}
        >
          <NavigationMenuTrigger className={triggerStyles()}>
            {item.name}
          </NavigationMenuTrigger>
          <NavigationMenuContent
            style={{ background: "#9871FF", zIndex: 2 }}
            className="flex flex-col min-w-[200px] backdrop-blur-xs p-2 border rounded-md shadow-md"
          >
            {item.children?.map((child) => (
              <div
                className={`custom-group flex my-1 items-center`}
                key={child.name}
              >
                <Link
                  href={child.href}
                  className="block px-3 py-2 text-[16px] font-normal hover:font-bold rounded-sm"
                >
                  {child.name}
                </Link>
                <div
                  className={`w-[7px] h-[7px] rounded-full bg-[#FF2C2C] opacity-0 transition-opacity`}
                />
              </div>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    }

    return (
      <NavigationMenuItem
        key={item.name}
        className={menuItemStyles({ isActive: active })}
      >
        <Link href={item.href} className="no-underline">
          {item.name}
        </Link>
      </NavigationMenuItem>
    );
  };

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="flex gap-[74px] text-[16px] font-normal">
        {navList.map(renderNavItem)}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
