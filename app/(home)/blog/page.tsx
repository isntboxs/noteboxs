import { posts } from "#site/content";

import { sortPosts } from "@/lib/formatPosts";

import { BlogCard } from "../_components/blog/BlogCard";

const BlogPage = () => {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const displayPosts = sortedPosts;

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
        {displayPosts?.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {displayPosts.map((post) => {
              const { title, description, slug, date } = post;
              return (
                <BlogCard
                  key={slug}
                  title={title}
                  description={description}
                  slug={slug}
                  date={date}
                />
              );
            })}
          </div>
        ) : (
          <p>No blog post found.</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
