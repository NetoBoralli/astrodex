import { defineCollection, z } from "astro:content";

const pokemon = defineCollection({
    type: "content",
    schema: z.object({
        id: z.number(),
        title: z.string(),
        image: z.string(),
        types: z.string().array(),
    }),
});

export const collections = { pokemon };