import SiteBrand from "../SiteBrand";
import MainNavHeader from "./MainNavHeader";
import MobileNavHeader from "./MobileNavHeader";
import SocialsHeader from "./SocialsHeader";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 w-full border-b border-border bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="container flex h-14 max-w-2xl items-center sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl">
        <div className="flex flex-1 items-center justify-start gap-x-3">
          <MobileNavHeader />
          <SiteBrand />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <MainNavHeader />
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-3">
          <SocialsHeader />
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
