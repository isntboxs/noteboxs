import Link from "next/link";

import { SiteConfig } from "@/config/SiteConfig";
import BoxsLogo from "@/components/Logo";

const SiteBrand = () => {
  return (
    <Link href={SiteConfig.url} className="flex items-center space-x-1">
      <BoxsLogo className="h-4 w-4 fill-current" />
      <span className="text-xl font-bold">{SiteConfig.title}</span>
    </Link>
  );
};

export default SiteBrand;
