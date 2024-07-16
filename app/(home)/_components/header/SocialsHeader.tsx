import Link from "next/link";
import { FaGithub, FaSpotify } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { SiteConfig } from "@/config/SiteConfig";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const SocialsHeader = () => {
  return (
    <nav className="hidden items-center space-x-2 md:flex">
      <Link
        href={SiteConfig.socials.github}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonVariants({ variant: "ghost" }), "h-8 w-8 p-0")}
      >
        <FaGithub className="h-4 w-4" />
        <span className="sr-only">GitHub</span>
      </Link>
      <Link
        href={SiteConfig.socials.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonVariants({ variant: "ghost" }), "h-8 w-8 p-0")}
      >
        <FaXTwitter className="h-4 w-4" />
        <span className="sr-only">Twitter</span>
      </Link>
      <Link
        href={SiteConfig.socials.spotify}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonVariants({ variant: "ghost" }), "h-8 w-8 p-0")}
      >
        <FaSpotify className="h-4 w-4" />
        <span className="sr-only">Spotify</span>
      </Link>
    </nav>
  );
};

export default SocialsHeader;
