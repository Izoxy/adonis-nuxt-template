/*
 ** Toasts module configuration
 ** See https://github.com/nuxt-community/modules/tree/master/packages/toast
 */
export default {
	position: 'top-center',
	register: [
		{
			name: 'my-error',
			message: 'Oops...Something went wrong',
			options: {
				type: 'error',
			},
		},
	],
}
