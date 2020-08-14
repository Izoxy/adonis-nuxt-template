export default {
	locales: [
		{
			code: 'en',
			name: 'English',
			file: 'en-US.ts',
		},
		{
			code: 'fr',
			name: 'Français',
			file: 'fr-FR.ts',
		},
	],
	strategy: 'no_prefix',
	defaultLocale: 'en',
	langDir: 'locales/',
	lazy: true,
	seo: true,
	vueI18n: {
		fallbackLocale: 'en',
	},
}
