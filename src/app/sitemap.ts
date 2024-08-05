import { MetadataRoute } from 'next'
import { docs } from "#site/content";


const url = 'https://ui.gesturs.com';


export default function sitemap(): MetadataRoute.Sitemap {

  const docRoutes = docs.map((doc) => {
    return {
      url: `${url}/docs/${doc.slugAsParams}`,
      lastModified: doc.date,
    }
  })

  return [
    ...docRoutes,
    {
      url: url,
      lastModified: new Date(),
    }
  ]
}