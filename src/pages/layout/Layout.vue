<template>
	<div>
	<appheader></appheader>
	<appNavBar></appNavBar>
	 <router-view></router-view>
	<appFooter></appFooter>
	</div>
</template>
<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Navigation from './Navigation.vue'  

export default
{
	name:'Layout',
	components:{
		'appheader':Header,
		'appFooter':Footer,
		'appNavBar':Navigation
			}
}
</script>

<style scoped>
</style>
