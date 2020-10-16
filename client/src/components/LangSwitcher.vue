<template>
	<div class="switcher-container">
		<div style="display: inline-flex;" :text="$i18n.locale.toUpperCase()" variant="primary" class="m-2">
			<div id="dropdown-header-label">{{ $t('headerLangs') }}</div>
			<div style="margin-left: 5px; cursor: pointer;" v-for="(lang, key) in availableLocales" :key="key" @click.prevent="changeLanguage(lang.code)">{{ lang.code.toUpperCase() }}</div>
		</div>
	</div>
</template>

<script>
import { useContext, computed } from '@nuxtjs/composition-api'

export default {
	setup() {
		const { store } = useContext()
		const availableLocales = computed(() => store.$i18n.locales.filter((i) => i.code != store.$i18n.locale))
		function changeLanguage(lang) {
			store.$i18n.setLocale(lang)
		}

		return {
			availableLocales,
			changeLanguage,
		}
	},
}
</script>

<style lang="scss" scoped>
.switcher-container {
	position: fixed;
	bottom: 10px;
	right: 10px;
	background-color: #5a45ff;
	color: white;
	padding: 0.8rem;
	border-radius: 24px;

	.dropdown {
		border-radius: 50% !important;
	}
}
</style>
