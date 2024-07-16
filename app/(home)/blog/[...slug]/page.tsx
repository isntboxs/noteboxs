import { notFound } from "next/navigation";
import { posts } from "#site/content";

import { MDXContent } from "../../_components/blog/mdxComponent";

interface BlogPostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: BlogPostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);
  return post;
}

export async function generateStaticParams(): Promise<
  BlogPostPageProps["params"][]
> {
  return posts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="prose dark:prose-invert container max-w-2xl py-8 sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl">
      <div className="flex flex-col rounded-lg border border-foreground/15 bg-foreground/10 p-4">
        <div>
          <h1>{post.title}</h1>
          {post.description ? (
            <p className="-mt-3 text-muted-foreground">{post.description}</p>
          ) : null}
        </div>
        <hr />
        <MDXContent code={post.body} />
      </div>
    </article>
  );
}
