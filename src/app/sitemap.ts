import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://rahulsharma.vercel.app',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: 'https://rahulsharma.vercel.app/work',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://rahulsharma.vercel.app/projects',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://rahulsharma.vercel.app/about',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.5,
		},
		{
			url: 'https://rahulsharma.vercel.app/contact',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.5,
		},
	];
}
