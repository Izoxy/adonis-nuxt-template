export default {
	strategies: {
		local: {
			endpoints: {
				login: { url: '/authentication/web/login', method: 'post' },
				logout: { url: '/authentication/web/logout', method: 'post' },
				user: { url: '/authentication/user/me', method: 'get', propertyName: 'user' },
			},
			tokenRequired: false,
			tokenType: false,
		},
	},
	redirect: {
		login: '/authentication/login',
		logout: '/',
		callback: '/account',
		home: '/',
	},
	resetOnError: true,
}
