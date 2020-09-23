<template>
	<div class="main">
		<h1 v-html="$t('welcome')"></h1>
		<p>{{ $t('description') }}</p>
	</div>
</template>

<script>
export default {
	layout: 'master',
}
</script>

<style>
.main {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 40%;
	margin: auto;
}
img {
	width: 100%;
}
h1 {
	text-align: center;
}
p {
	margin: auto;
	text-align: center;
	opacity: 0.5;
	width: 80%;
}
</style>
