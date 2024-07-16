import SampleBlogCard from "../_components/blog/BlogCard";

const BlogPage = () => {
  return (
    <div className="container max-w-2xl py-8 sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl">
      <div className="flex flex-col gap-4 rounded-lg border border-foreground/15 bg-foreground/10 p-4">
        <div className="flex flex-1 flex-col space-y-2">
          <h1 className="text-2xl font-bold">Blog</h1>
          <p className="text-base text-muted-foreground">
            Anything what i write here and all of things web dev.
          </p>
        </div>
        <hr />
        <SampleBlogCard />
      </div>
    </div>
  );
};

export default BlogPage;
