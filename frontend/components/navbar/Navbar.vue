<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="dark" sticky>
			<b-navbar-brand href="#">App</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<b-nav-item href="#">Home</b-nav-item>
				</b-navbar-nav>

				<b-navbar-nav class="ml-auto">
					<b-nav-item-dropdown v-if="isLogged" right>
						<template v-slot:button-content>
							<b-avatar></b-avatar>
							{{ getFullName }}
						</template>
						<b-dropdown-item href="#">Profile</b-dropdown-item>
						<b-dropdown-item @click="handleLogout">Sign Out</b-dropdown-item>
					</b-nav-item-dropdown>
					<b-button v-else @click.prevent="toggleModal" right>Sign In</b-button>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
		<b-modal ref="login-modal" id="login" size="md" hide-footer title="Authentification">
			<b-form>
				<b-input-group prepend="@" class="custom-input-group mb-2 mr-sm-2 mb-sm-0">
					<b-input v-model="form.email" placeholder="Email"></b-input>
				</b-input-group>
				<b-input-group prepend="🔒" class="custom-input-group mb-2 mr-sm-2 mb-sm-0">
					<b-input v-model="form.password" type="password" placeholder="Password"></b-input>
				</b-input-group>
				<b-form-checkbox v-model="form.remember_me" name="remember-me" switch>
					Remember Me
				</b-form-checkbox>
				<br />
				<b-button @click.prevent="handleLogin">Sign In</b-button>
			</b-form>
		</b-modal>
	</div>
</template>

<script>
export default {
	name: 'Navbar',
	data() {
		return {
			form: {
				email: '',
				password: '',
				remember_me: false,
			},
		}
	},
	computed: {
		isLogged() {
			return this.$store.state.auth.member.logged
		},
		getFullName() {
			return this.$store.state.auth.member.user.identity
		},
	},
	methods: {
		toggleModal: function () {
			this.$refs['login-modal'].show()
		},
		handleLogout: async function () {
			await this.$store.dispatch('auth/logout')
			await this.$router.push('/')
		},
		handleLogin: async function () {
			if (this.form.email !== '' && this.form.password !== '') {
				await this.$store.dispatch('auth/login', this.form)
				if (this.isLogged) {
					this.$refs['login-modal'].hide()
				}
			}
		},
	},
}
</script>

<style lang="scss" src="./navbar.scss" scoped></style>
