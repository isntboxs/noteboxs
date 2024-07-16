"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const MainNavHeader = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center space-x-4 md:flex">
      <Link
        href="/blog"
        className={cn(
          buttonVariants({
            variant: "ghost",
            size: "sm",
          }),
          "flex items-center gap-x-1",
          pathname === "/blog"
            ? buttonVariants({ variant: "secondary", size: "sm" })
            : buttonVariants({ variant: "ghost", size: "sm" })
        )}
      >
        <span className="text-sm font-medium">Blog</span>
      </Link>
      <Link
        href="/about"
        className={cn(
          buttonVariants({
            variant: "ghost",
            size: "sm",
          }),
          "flex items-center gap-x-1",
          pathname === "/about"
            ? buttonVariants({ variant: "secondary", size: "sm" })
            : buttonVariants({ variant: "ghost", size: "sm" })
        )}
      >
        <span className="text-sm font-medium">About</span>
      </Link>
    </nav>
  );
};

export default MainNavHeader;
