 
<script>
    import {page} from '$app/stores';
    import { base } from '$app/paths';
    import '../app.css';
    import {fade } from 'svelte/transition';


    import projects from '$lib/projects.json';

    const project= projects.filter(d=> d.slug == $page.params.slug)[0];

    const images = project.detail.carouselImgs
    console.log(images)
    // Carousel import and prep

    import { onMount } from 'svelte';
//import Arrow from 'svelte-carousel/src/components/Arrow/Arrow.svelte';
//import Carousel from 'svelte-carousel/src/components/Carousel/Carousel.svelte';
//import Dot from 'svelte-carousel/src/components/Dot/Dot.svelte';

    let Carousel; // for saving Carousel component class
    let carousel; // for calling methods of the carousel instance
 
    onMount(async () => {
    const module = await import('svelte-carousel');
        Carousel = module.default;
    });

   /* const handleNextClick = () => {
        carousel.goToNext()
    }*/

</script>

<div>
{#if !project}
    <div>Project Not Found</div>
    <a id='close' href="./">Close</a>
{:else}
    <div in:fade="{{ duration: 300}}">
        <h2>{project.detail.title} <a id='close' href="./">Close</a></h2>

        <div class='wrapper'>
            <div id='img-carousel'>
                <svelte:component
                    this={Carousel}
                    bind:this={carousel}
                    let:loaded
                    let:showPrevPage
                    let:showNextPage
                >
                    
                    <button slot="prev" on:click={showPrevPage} class="custom-arrow custom-arrow-prev">
                        &#10094;
                    </button>
                    {#each images as img, imageIndex (img)}
                        <div class="img-container">
                        {#if loaded.includes(imageIndex)}
                            <img src = "{base}/imgs/{img.src}" alt={img.alt} />
                        {/if}
                        </div>
                     {/each}
                     <button slot="next" on:click={showNextPage} class="custom-arrow custom-arrow-next">
                        &#10095;
                     </button>
                </svelte:component>

               <!-- <button on:click={handleNextClick}>Next</button>-->

            </div>
            <!-- <img src = {project.imgUrl} alt= {project.imgAlt}/> -->
            <div>
                <p>{@html project.detail.body}</p>
                <p><strong>Languages and Tools: </strong>{project.detail.languages}</p>
                {#if project.detail.externalLinks}
                    {#if project.detail.externalLinks.length > 1}
                        <h3>See more:</h3>
                        <ul>
                            {#each project.detail.externalLinks as link}
                                <li><a href={link.url} target="_blank">{link.text}</a></li>
                            {/each}
                        </ul>
                    {:else}
                        <p><strong>Project Website: </strong><a href={project.detail.externalLinks[0].url} target="_blank">{project.detail.externalLinks[0].text}</a></p>
                    {/if}
                {/if}
                <a id='return' href="./">Return to project list</a>
            </div>
        </div>
    </div>
{/if}
</div>



<style> 

a, h2, h3 { 
    color: var(--text-color);
}

.wrapper {
    display: flex;
    gap: 30px;
}
#img-carousel {
    width: 50%;
}
.custom-arrow {
    border: none;
    background-color: transparent;
    color: #FFFFFF55;
    font-size: 3rem;
}

a#close,a#return {
    padding: 4px 6px;
    background-color: var(--secondary-color);
    font-size: 0.8rem;
    font-weight: bold;
    text-transform: uppercase;
}
a#return { 
    background-color: var(--primary-color);
}
h2{
    font-size: 1.5rem;
}
img {
    width: 100% 
    /* min(50%, 500px);
    margin-right: 16px;*/
}

ul {
    margin-left: 20px;    
    padding-inline-start: 0px;
    margin-top: 10px;
}
li {
    list-style: none;
    font-size: 1rem;
    line-height: 2;
}
li a{
    text-decoration: underline ;/*var(--accent-color) solid 1px;*/
    color:white;
}
p a{
    text-decoration: underline ;/*var(--accent-color) solid 1px;*/
    color:white;
}
li a:hover, p a:hover {
    text-decoration: none ;
}

</style>