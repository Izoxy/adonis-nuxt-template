<template>
	<div class="main">
		<img src="https://github.com/Izoxy/adonis-nuxt-template/blob/master/assets/banner.png?raw=true" alt="" />
		<h1>Welcome to Adonis-Nuxt-Template</h1>
	</div>
</template>

<script>
import Header from '~/components/header/Header'
import Sidebar from '~/components/sidebar/Sidebar'

export default {
	layout: 'master/master',
	components: {
		Sidebar,
		Header,
	},
}
</script>

<style>
.main {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 50%;
	margin: auto;
}
img {
	width: 100%;
}
h1 {
	text-align: center;
}
</style>
