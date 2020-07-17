export default {
	baseUrl:
		process.env.NODE_ENV === 'developpement'
			? 'http://localhost:3333/' // developpement
			: 'http://localhost:3333/', // production
}
