import { writable } from 'svelte/store';
import { tweened } from 'svelte/motion';

const defaultHeaderData = {
        analytics: 1, 
        infoViz: 2,
        mapping: 1
    }
function manageHeaderData() { 
	const { subscribe, set } = tweened(defaultHeaderData,{
		duration: 500
	});

    return {
        subscribe, 
        change: (data) => set({
            analytics: data.analytics, 
            infoViz: data.infoViz,
            mapping: data.mapping
        }),
        reset: () => set(defaultHeaderData)
    }	
}

export const headerData = manageHeaderData();

export const filterProjectsBy = writable('all'); 

export const activeTopic = writable(null); 
