import { MetadataRoute } from 'next';
// import { prisma } from '@/lib/db';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || 'https://pk-folio.vercel.app').replace(/\/$/, '');

  // Get all published blogs
  // const blogs = await prisma.blog.findMany({
  //   where: { published: true },
  //   select: {
  //     slug: true,
  //     updatedAt: true,
  //   },
  //   orderBy: {
  //     updatedAt: 'desc',
  //   },
  // });

  // const blogUrls = blogs.map((blog: { slug: string; updatedAt: Date }) => ({slug: string; updatedAt: Date }) => ({
  //   url: `${baseUrl}/blog/${blog.slug}`,
  //   lastModified: blog.updatedAt,
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.8,
  // }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/skills`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    // ...blogUrls, // Uncomment when database is set up
  ];
}