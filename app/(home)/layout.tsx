import SiteHeader from "./_components/header/SiteHeader";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      {children}
    </div>
  );
};

export default HomeLayout;
