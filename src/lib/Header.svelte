<script>
    import { page } from '$app/stores';
    import { base } from '$app/paths';
	import '../app.css';
    import {headerData, filterProjectsBy, activeTopic} from './store.js';
	//console.log('$page.url', $page.url)
	console.log('base', base)

	const accentColor=  'rgb(255, 80, 39)';// '#802bb1';

	function mkGradient(n){
		let firstStopPct = Math.min(98, 100 - (n * 20));
		let secondStopPct = Math.min(98, firstStopPct + 30);
		return 'linear-gradient( rgba(0,0,0,0), rgba(0,0,0,0) ' + firstStopPct + '%, ' + accentColor + ' ' + secondStopPct + '%, ' + accentColor + ' 100%)';
	} 

</script> 
<div class='foo'>This is a header: {base} {activeTopic == null ? ' Not Active' : ' Active'}</div>
<header>
	<div class="center">
    <h1><a href="{base}/">Stephen Osserman</a></h1>
		
	</div>
</header>

<style>
    .foo {
        font-size: 30px;
    }
</style>