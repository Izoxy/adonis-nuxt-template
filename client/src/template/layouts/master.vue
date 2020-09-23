<template>
	<div>
		<client-only>
			<LangSwitcher />
		</client-only>
		<Nuxt />
	</div>
</template>

<script>
import LangSwitcher from '~/components/LangSwitcher'

export default {
	name: 'master',
	components: { LangSwitcher },
}
</script>

<style lang="scss" scoped>
body {
	width: 100%;
	min-height: 100%;
}
</style>
