export default function ({ store, redirect }) {
	if (store.auth.member.logged) {
		redirect('/', 401)
	}
}
