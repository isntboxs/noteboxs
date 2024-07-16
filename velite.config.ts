import { defineCollection, defineConfig, s } from "velite";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const posts = defineCollection({
  name: "Posts",
  pattern: "**/*.{md,mdx}",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      published: s.boolean().default(true),
      image: s.string().optional(),
      author: s.string().optional(),
      category: s.string().optional(),
      tags: s.array(s.string()).optional(),
      draft: s.boolean().optional(),
      body: s.mdx() || s.markdown(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:9]-[.ext]",
    clean: true,
  },
  collections: { posts },
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
