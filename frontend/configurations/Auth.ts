export default {
	localStorage: false,
	cookie: {
		options: {
			expires: 10,
		},
	},
	strategies: {
		local: {
			endpoints: {
				login: { url: '/authentication/login', method: 'post', propertyName: 'token' },
				logout: { url: '/authentication/logout', method: 'post' },
				user: { url: '/authentication/user/me', method: 'get', propertyName: 'user' },
			},
			tokenType: 'bearer',
			globalToken: true,
		},
	},
}
