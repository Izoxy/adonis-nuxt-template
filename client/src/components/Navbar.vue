<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="dark" sticky>
			<b-navbar-brand href="#">Izoxy</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<b-nav-item href="#">Accueil</b-nav-item>
				</b-navbar-nav>

				<b-navbar-nav class="ml-auto">
					<b-nav-item-dropdown v-if="this.$auth.loggedIn" right>
						<template v-slot:button-content>
							<b-avatar></b-avatar>
							{{ identity }}
						</template>
						<b-dropdown-item href="#">Mon profil</b-dropdown-item>
						<b-dropdown-item @click="handleLogout">Se déconnecter</b-dropdown-item>
					</b-nav-item-dropdown>
					<b-button v-else @click.prevent="toggleModal" right>Connexion</b-button>
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
				<b-form-checkbox v-model="form.remember_me" name="remember-me" switch>Se souvenir de moi</b-form-checkbox>
				<br />
				<b-button @click.prevent="handleLogin">Connexion</b-button>
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
	methods: {
		toggleModal: function () {
			this.$refs['login-modal'].show()
		},
		handleLogout: async function () {
			await this.$auth.logout()
			await this.$router.push('/')
		},
		handleLogin: async function () {
			try {
				await this.$auth.loginWith('local', {
					data: {
						email: this.form.email,
						password: this.form.password,
						remember_me: this.form.remember_me,
					},
				})
			} catch (error) {
				console.log(error)
			}
		},
	},
	computed: {
		identity() {
			return this.$auth.user.firstname + ' ' + this.$auth.user.lastname
		},
	},
}
</script>

<style lang="scss" scoped>
.custom-input-group {
	margin-bottom: 10px !important;
}
.b-avatar {
	margin-right: 10px;
}
.navbar {
	height: 70px;
	@media screen and (min-width: 576px) {
		padding: 0 10%;
	}
}
</style>
