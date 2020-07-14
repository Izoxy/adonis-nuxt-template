export default function ({ store, redirect }) {
	if (!store.auth.member.logged) {
		redirect('/authentication/login', 401)
	}
}
