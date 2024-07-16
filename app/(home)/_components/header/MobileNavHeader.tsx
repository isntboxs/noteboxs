"use client";

import { useState } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaGithub, FaSpotify } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { SiteConfig } from "@/config/SiteConfig";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import BoxsLogo from "@/components/Logo";

const MobileNavHeader = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="h-8 w-8 p-0 md:hidden"
          onClick={() => setOpen((open) => !open)}
        >
          <BiMenuAltLeft className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <MobileLink
            href="/"
            className="flex items-center"
            onOpenChange={setOpen}
          >
            <BoxsLogo className="h-6 w-6 fill-current" />
            <SheetTitle className="ml-2 text-xl font-bold">
              {SiteConfig.title}
            </SheetTitle>
          </MobileLink>
          <SheetDescription></SheetDescription>
          <hr />
        </SheetHeader>
        <div className="ml-8 grid gap-4 py-4">
          <MobileLink
            href="/blog"
            className={cn(
              "flex items-center text-lg",
              pathname === "/blog" && "font-bold"
            )}
            onOpenChange={setOpen}
          >
            Blog
          </MobileLink>
          <MobileLink
            href="/about"
            className={cn(
              "flex items-center text-lg",
              pathname === "/about" && "font-bold"
            )}
            onOpenChange={setOpen}
          >
            About
          </MobileLink>
        </div>
        <SheetFooter>
          <SheetClose asChild onClick={() => setOpen(false)}>
            <div className="flex w-full items-center justify-center space-x-3">
              <Link
                href={SiteConfig.socials.github}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" })
                )}
              >
                <FaGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href={SiteConfig.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" })
                )}
              >
                <FaXTwitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href={SiteConfig.socials.spotify}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" })
                )}
              >
                <FaSpotify className="h-5 w-5" />
                <span className="sr-only">Spotify</span>
              </Link>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavHeader;

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  onOpenChange?: (open: boolean) => void;
}

export const MobileLink = ({
  children,
  onOpenChange,
  href,
  className,
  ...props
}: MobileLinkProps) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
};
