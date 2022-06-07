<script>
    import { page } from '$app/stores';
    import { base } from '$app/paths';
	import '../app.css';
    import {headerData, filterProjectsBy, activeTopic} from './store.js';

	const accentColor=  'rgb(255, 80, 39)';// '#802bb1';

	function mkGradient(n){
		let firstStopPct = Math.min(98, 100 - (n * 20));
		let secondStopPct = Math.min(98, firstStopPct + 30);
		return 'linear-gradient( rgba(0,0,0,0), rgba(0,0,0,0) ' + firstStopPct + '%, ' + accentColor + ' ' + secondStopPct + '%, ' + accentColor + ' 100%)';
	} 

</script> 

<header>
	<div class="center">
        <h1><a href="{base}/">Stephen Osserman</a></h1>
		<div class='btn-group'>
			{#each ['analytics','infoViz','mapping'] as topic }
			<a href='{base}/' class:active= {$activeTopic == topic}
				style="background-image: {mkGradient($headerData[topic])}"
				on:click={(event) => {
					if($page.url.pathname == '/'){console.log('preventing default'); event.preventDefault()}
					if($activeTopic == topic){
						activeTopic.set(null) ; 
						filterProjectsBy.set('all');
					} else {
						activeTopic.set(topic); 
						filterProjectsBy.set(topic);
					}
				}}>{topic[0].toUpperCase() + topic.slice(1)}</a>
			{/each}
		</div>
	</div>
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position:relative; 
	}


	.center {
		display: flex;
		margin: 0 auto;
		flex-direction: column;
		align-items:center;
		padding-top: 20px;
		font-family: 'Roboto Flex', sans-serif;

	}
	.center h1 { 		
		font-weight: 100;
		text-transform: uppercase;
		font-size: 2.5rem;
		letter-spacing: 0.3rem;
		margin: 0;
	}
	.center a { 		
		color: var(--text-color);
		transition: color 0.3s;
	}
	.center a:hover { 	
		text-decoration: none;	
		color: #d1d7e090;
	}
	.center .btn-group { 
		display: flex;
		align-items: center;
		gap: 20px;
		width: 100%;
	}
	.center .btn-group a { 
		flex: 1; 
		text-align: center;
		border: none;
		font-weight: 200;
		font-size: 1.6rem;
		padding: 0.8rem 0 .3rem;
		letter-spacing: 0.05rem;
		position: relative;
		width: 100%;
		background-color: transparent;
		transition: color 0.3s;
	}

	.center .btn-group a:hover:not(.active){ 
		color: #d1d7e090;
	}
	.center .btn-group a.active { 
		/*border-right: 1px solid #802bb1;
		border-left: 1px solid #802bb1;
		font-weight: 400;*/
		box-shadow: 4px 7px 10px #050505;
		
	}

</style>
