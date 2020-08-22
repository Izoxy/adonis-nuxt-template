export default {
	path: '/sitemap.xml',
	hostname: process.env.baseUrl,
	cacheTime: 720000,
	gzip: true,
	generate: false,
	// exclude: ['/login', '/admin/**'],
}
