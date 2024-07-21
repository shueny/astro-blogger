import type {SidebarNavItem, SiteConfig} from '@/types';

export const siteConfig: SiteConfig = {
	name: 'Shueny',
	description:
		'An modern example app built using Astro v4 & shadcn/ui. Inspired by shadcn/taxonomy.',
	url: 'https://astro-nomy.vercel.app',
	ogImage: 'https://astro-nomy.vercel.app/og.jpg',
	links: {
		instagram: 'https://www.instagram.com/shueny_wang/',
		github: 'https://github.com/shueny',
	},
};

export const footerLinks: SidebarNavItem[] = [
	{
		title: 'Company',
		items: [
			{title: 'About', href: '#'},
			{title: 'Enterprise', href: '#'},
			{title: 'Partners', href: '#'},
			{title: 'Jobs', href: '#'},
		],
	},
	{
		title: 'Product',
		items: [
			{title: 'Security', href: '#'},
			{title: 'Customization', href: '#'},
			{title: 'Customers', href: '#'},
			{title: 'Changelog', href: '#'},
		],
	},
	{
		title: 'Docs',
		items: [
			{title: 'Introduction', href: '#'},
			{title: 'Installation', href: '#'},
			{title: 'Components', href: '#'},
			{title: 'Code Blocks', href: '#'},
		],
	},
];
