<template>
	<aside class="sidebar">
		<div class="sidebar-container">
			<div class="sidebar-item">
				<p class="side-item-title">Title</p>
				<a href="#" class="side-item-sublink">Subtitle</a>
			</div>
			<div class="sidebar-item">
				<p class="side-item-title">Title 2</p>
				<a href="#" class="side-item-sublink">Subtitle 2</a>
			</div>
		</div>
	</aside>
</template>

<script>
export default {
	name: 'Sidebar',
}
</script>

<style lang="scss" scoped>
.sidebar {
	border-top: #47494e solid 1px;
	margin: 40px 20px;

	.sidebar-container {
		padding: 10px;
		font-family: Roboto, sans-serif;

		.sidebar-item {
			.side-item-title {
				font-size: 1.5rem;
				margin-top: 15px;
				margin-bottom: 0;
			}

			.side-item-sublink {
				text-decoration: none;
				color: #7f828b;
				font-size: 1rem;
				margin-left: 20px;
				font-style: italic;
			}
		}
	}
}
</style>
