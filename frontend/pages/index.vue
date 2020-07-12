<template>
	<div>
		<Header/>
		<b-row>
			<b-col cols="3">
				<Sidebar/>
			</b-col>
			<b-col cols="7">

			</b-col>
			<b-col cols="2">

			</b-col>
		</b-row>
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
