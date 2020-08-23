<template>
	<div>
		<client-only>
			<Navbar />
			<LangSwitcher />
		</client-only>
		{{ this.$auth.loggedIn }}
		<Nuxt />
	</div>
</template>

<script>
import Navbar from '~/components/Navbar'
import LangSwitcher from '~/components/LangSwitcher'

export default {
	name: 'master',
	components: { Navbar, LangSwitcher },
}
</script>

<style lang="scss" scoped>
body {
	width: 100%;
	min-height: 100%;
}
</style>
