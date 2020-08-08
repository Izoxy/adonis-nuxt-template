<template>

	<div class="switcher-container">
		<b-dropdown id="dropdown-dropup" dropup :text="this.$i18n.locale.toUpperCase()" variant="primary" class="m-2">
			<b-dropdown-header id="dropdown-header-label">
				{{$t('headerLangs')}}
			</b-dropdown-header>
			<b-dropdown-item v-for="lang in availableLocales" @click.prevent="changeLanguage(lang.code)">{{lang.code.toUpperCase()}}</b-dropdown-item>
		</b-dropdown>
	</div>

</template>

<script>
	export default {
		name: 'LangSwitcher',
		computed: {
			availableLocales () {
				return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
			}
		},
		methods: {
			changeLanguage(lang) {
				this.$i18n.setLocale(lang)
			}
		}
	}

</script>

<style lang="scss" src="./langswitcher.scss" scoped></style>
