<template>
	<div id="app">Hello, {{name}}</div>
</template>

<style lang="scss">
@mixin white-bg {
	background-color: #fff;
}
* {
	margin: 0;
	padding: 0;
}
#app {
	opacity: .5;
	@include white-bg;
}
</style>

<script>
export default {
	name: "app",
	data() {
		return { name: "JowayYoung" };
	}
};
</script>