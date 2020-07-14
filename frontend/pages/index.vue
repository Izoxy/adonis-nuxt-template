<template>
	<div>
		<Header/>
		<!-- It's an example for the utilisation of the sidebar
		<b-row>
			<b-col cols="2">
				<Sidebar/>
			</b-col>
			<b-col cols="10">
			</b-col>
		</b-row>
		-->
	</div>
</template>

<script>
import Header from "~/components/header/Header";
import Sidebar from "~/components/sidebar/Sidebar";

export default {
	layout: 'master/master',
	components: {
		Sidebar,
		Header
	}
}
</script>

<style></style>
