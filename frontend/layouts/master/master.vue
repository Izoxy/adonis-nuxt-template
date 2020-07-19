<template>
	<div>
		<client-only>
			<Navbar />
			<LangSwitcher />
		</client-only>
		<Nuxt />
	</div>
</template>

<script>
import Navbar from '~/components/navbar/Navbar'
import LangSwitcher from "~/components/langswitcher/LangSwitcher";

export default {
	name: 'master',
	components: { Navbar, LangSwitcher },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
