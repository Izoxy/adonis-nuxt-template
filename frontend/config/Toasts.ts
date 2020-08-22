/*
 ** Toasts module configuration
 ** See https://github.com/nuxt-community/modules/tree/master/packages/toast
 */
import { props, configuration } from '~/contracts/toast'

const configuration: configuration = {
	position: 'bottom-left',
	duration: 5000,
	keepOnHover: true,
}

export default {
	position: 'top-center',
	register: [
		{
			name: 'error',
			message: ({ message }: props) => message,
			options: {
				position: configuration.position,
				duration: configuration.duration,
				keepOnHover: configuration.keepOnHover,
				icon: 'do_not_disturb',
				type: 'error',
				action: {
					text: 'fermer',
					onClick: (e: any, toastObject: any) => {
						toastObject.goAway(0)
					},
				},
			},
		},
		{
			name: 'success',
			message: ({ message }: props) => message,
			options: {
				position: configuration.position,
				duration: configuration.duration,
				keepOnHover: configuration.keepOnHover,
				icon: 'check',
				type: 'success',
				action: {
					text: 'fermer',
					onClick: (e: any, toastObject: any) => {
						toastObject.goAway(0)
					},
				},
			},
		},
		{
			name: 'info',
			message: ({ message }: props) => message,
			options: {
				position: configuration.position,
				duration: configuration.duration,
				keepOnHover: configuration.keepOnHover,
				icon: 'info',
				type: 'info',
				action: {
					text: 'fermer',
					onClick: (e: any, toastObject: any) => {
						toastObject.goAway(0)
					},
				},
			},
		},
	],
}
