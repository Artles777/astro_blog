import { z } from "astro:content";

export default {
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        image: z.object({
          url: z.string(),
          alt: z.string(),
        }),
        author: z.string(),
        description: z.string(),
        pubDate: z.string(),
      })
}