<script> 
    import { base } from '$app/paths';
    import {headerData, filterProjectsBy, activeTopic} from './store.js';
    import {fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import { createEventDispatcher } from 'svelte';
    import '../app.css'
    const dispatch = createEventDispatcher(); 
    
    import projects from '$lib/projects.json';
    
    $: filteredProjects = ($filterProjectsBy == 'all' ? 
        projects : 
        projects.filter(d=> d[$filterProjectsBy] > 1).sort((a,b)=> {return b[$filterProjectsBy]-a[$filterProjectsBy]}))
    </script>
    
    <div class='wrapper'>
        {#each filteredProjects as project (project)}
        <a href= {`${base}/${project.slug}`} in:fade={{duration:300}} animate:flip="{{duration: 500}}" class='item-wrapper' 
                on:mouseenter= {()=>headerData.change(project)}
                on:mouseleave= {()=>headerData.reset()}
            >
            <p>{project.description}</p>
            <div class='img-background'>
                <img src= "{base}/imgs/{project.imgUrl}" alt={project.imgAlt}>
            </div>
        </a>
        {/each}
        {#if $filterProjectsBy != 'all'}
        <div class='show-all'><button on:click={() =>{ activeTopic.set(null); filterProjectsBy.set('all')}}>Show All Projects</button></div>
        {/if}
    </div>
    
    
    <style>
        .wrapper {
            --img-width: 300px;
            display: grid;
            margin-top: 10px;
            grid-template-columns: repeat(auto-fit, minmax(var(--img-width), max-content));
            grid-gap: 40px;
            justify-content: center;
            padding: 30px 0 0;
            height: 70vh;
            overflow: auto;
        }
        .item-wrapper {
            height: fit-content;
            width: var(--img-width);
        }
        .item-wrapper img {
            width: 100%;
            filter: grayscale(1);
            opacity: .9;
            transition: filter 0.5s, opacity 0.5s;
        }
        .item-wrapper:hover img, .item-wrapper:focus img {
            filter: grayscale(0);
            opacity: 1;
        }
        p {
            text-align: center;
            margin: 0;
            transition: color 0.5s;
            font-weight: bold;
            font-size: 1.1rem;
        }
    
        .item-wrapper:hover p {
            filter: grayscale(0);
            opacity: 1;
            color: white;
        }
    
        div.img-background {
            background-color: var(--secondary-color);
        }
        div.img-background {
            max-width: var(--img-width);
            max-height: var(--img-width);
        }
        .show-all {
            display:flex;
            align-items: center;
            justify-content: center;
        }
        .show-all button {
            font-size: 1.3rem;
            background-color: transparent;
        }
    </style>