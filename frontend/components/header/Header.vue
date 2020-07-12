<template>
	<div class="header-container">
		<b-carousel
			id="header"
			v-model="slide"
			:interval="4000"
			controls
			background="gray"
			img-width="1920"
			img-height="1080"
			class="carousel"
			@sliding-start="onSlideStart"
			@sliding-end="onSlideEnd">
			<b-carousel-slide img-src="https://picsum.photos/1024/480/?image=1"></b-carousel-slide>
		</b-carousel>
		<button class="btn-discover btn-dark btn">Discover</button>
	</div>
</template>

<script>
	export default {
		name: "Header",
		data() {
			return {
				slide: 0,
				sliding: null
			}
		},
		methods: {
			onSlideStart(slide) {
				this.sliding = true
			},
			onSlideEnd(slide) {
				this.sliding = false
			}
		}
	}
</script>

<style lang="scss" src="./header.scss" scoped></style>
