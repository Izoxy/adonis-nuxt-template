/*
 ** Headers module configuration
 ** See https://nuxtjs.org/api/configuration-head
 ** See https://vue-meta.nuxtjs.org/api/#metainfo-properties
 */
export default {
	title: process.env.npm_package_name || 'Welcome to nuxtjs',
	meta: [
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{
			hid: 'description',
			name: 'description',
			content: process.env.npm_package_description || '',
		},
	],
	link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
}
