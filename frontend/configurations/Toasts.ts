/*
 ** Toasts module configuration
 ** See https://github.com/nuxt-community/modules/tree/master/packages/toast
 */
export default {
	position: 'top-center',
	register: [
		{
			name: 'error',
			message: ({ message }) => message,
			options: {
				position: 'bottom-left',
				duration: 5000,
				keepOnHover: true,
				icon: 'do_not_disturb',
				type: 'error',
				action: {
					text: 'fermer',
					onClick: (e, toastObject) => {
						toastObject.goAway(0)
					},
				},
			},
		},
		{
			name: 'success',
			message: ({ message }) => message,
			options: {
				position: 'bottom-left',
				duration: 5000,
				keepOnHover: true,
				icon: 'check',
				type: 'success',
				action: {
					text: 'fermer',
					onClick: (e, toastObject) => {
						toastObject.goAway(0)
					},
				},
			},
		},
		{
			name: 'info',
			message: ({ message }) => message,
			options: {
				position: 'bottom-left',
				duration: 5000,
				keepOnHover: true,
				icon: 'info',
				type: 'info',
				action: {
					text: 'fermer',
					onClick: (e, toastObject) => {
						toastObject.goAway(0)
					},
				},
			},
		},
	],
}
