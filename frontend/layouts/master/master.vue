<template>
	<div>
		<Navbar/>
		<Nuxt/>
	</div>
</template>

<script>
	import Navbar from "~/components/navbar/Navbar";

	export default {
		name: "master",
		components: {Navbar}
	}
</script>

<style lang="scss" src="./style.scss" scoped></style>
