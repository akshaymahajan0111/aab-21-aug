import { z } from 'zod';
export const schemas = {
  pages: {
    home: z.object({
      "hero": z.object({
        "brandAlt": z.string(),
        "button": z.string(),
        "eyebrow": z.string(),
        "status": z.string(),
        "subtitle": z.string(),
        "title": z.string()
      })
    })
  }
};
export type Schemas = typeof schemas;