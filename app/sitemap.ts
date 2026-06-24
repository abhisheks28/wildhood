import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://wildhoodphoto.in',
      lastModified: new Date(),
    },
  ]
}
