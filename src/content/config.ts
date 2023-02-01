import { defineCollection } from "astro:content";
import blogSchema from "../core/schemas/blogSchema";

export const collection = {
    blog: defineCollection(blogSchema)
};