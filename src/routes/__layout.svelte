<script>
	import Header from '$lib/Header.svelte';
	import '../app.css';
	import Footer from '$lib/Footer.svelte';
	let showFooter = false; 
</script>
<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@100..700&display=swap" rel="stylesheet">
</svelte:head>
{#if true}
<Header />
{/if}

<main>
	<slot />
</main>
<div class='footer-toggle'><button on:click={() => {showFooter = !showFooter}}>About Stephen</button> </div>
{#if showFooter}
<Footer on:togglefooter={() => {showFooter=!showFooter}}/>
{/if}
<style>

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1258px;
		margin: 0 auto;
		box-sizing: border-box;
	}
	
	.footer-toggle{
        position: fixed;
		bottom: 0px;
		width: 100%;
		border:none;
        background-color: transparent;
		padding: 25px 20px 20px 0px;
	}

	.footer-toggle button{
		color:  var(--text-color);
        border: none;
		padding: 16px 16px 4px;
    	font-size: 1.3rem;
    	right: 20px;
    	bottom: 16px;
    	position: fixed;       
		font-size: 1.1rem;
        text-transform: uppercase;
		background: linear-gradient(
			#00000000 0%,
			var(--accent-color) 50%,
			var(--accent-color) 100%
		);
	}
</style>
