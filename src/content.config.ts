import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/articles",
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    excerpt: z.string(),
    image: z.string().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

const services = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/services",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    order: z.number().default(0),
    active: z.boolean().default(true),
    link: z.string().optional(),
  }),
});

const gallery = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/gallery",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string(),
    order: z.number().default(0),
    active: z.boolean().default(true),
  }),
});

export const collections = {
  articles,
  services,
  gallery,
};
