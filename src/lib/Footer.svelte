<script> 
	import {slide} from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher(); 
</script>

<footer>
    <div transition:slide>
        <p>Hi, I'm Stephen. I'm a Visualization Developer and Data Scientist with over a decade of experience working with political and civic data. My academic background includes degrees in <em>Ethnicity, Race, and Migration</em>; in <em>Music</em>; and in <em>Spatial Analysis for Public Health</em>. The past few years I've been doing more Data Storytelling work and this page contains a sample of projects I've worked on along this journey.
        <button class='close' on:click="{() => {dispatch('togglefooter')}}">Close</button> </p>
    </div>
</footer>

<style>
    button{
        background-color: transparent;
        border: none;
        display: inline;
        padding: 4px 6px;
        font-size: 1.1rem;
        font-weight: bold;
        text-transform: uppercase;
    }

    button.close{
        /*background-color: var(--secondary-color);*/
        font-size: 0.8rem;
        background: linear-gradient(
			#00000000 0%,
			var(--accent-color) 20%,
			var(--accent-color) 80%,
			#00000000 100%
		);

    }

    footer {
		position: fixed;
		bottom: 0;
		width: 100%;
		/*min-height: 30%;*/
		margin: 0;
		display: flex; 
		align-items: end;
		background: linear-gradient(
			var(--bg-blend-transparent) 0%,
			var(--primary-color) 8%,
			var(--primary-color) 100%
		);
	}

	footer p {
		padding: 10px max(20%, 20px) 0 ;
        font-size: 1.1rem;
	}
</style>