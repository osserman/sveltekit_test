<script context="module">
	export const prerender = true;
</script>

<script>
	 //import Item from '$lib/Item.svelte';
	 //import ItemDetail from '../lib/ItemDetail.svelte';
	 //import Item2 from '$lib/Item2.svelte';
	 import ProjectGrid from '$lib/ProjectGrid.svelte'
</script>

<svelte:head>
	<title>Stephen's Portfolio</title>
	<meta name="description" content="Stephen Osserman Portfolio" />
</svelte:head>

<section>
    <ProjectGrid />
</section>

<style>
	section { 
		position: relative;
		padding: 0 5%;
	}

</style>