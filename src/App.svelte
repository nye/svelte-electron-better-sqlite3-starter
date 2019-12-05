<script>
	import { onMount } from 'svelte';
	import { routes } from './routes';
	import { Router } from 'svelte-hash-router';

	import { isLoading } from './stores/ui';

	import { init as ipcInit } from './ipc';
	import GlobalStyles from './styles/GlobalStyles.svelte';
	import Topbar from './components/Topbar.svelte';

	// Init IPC comunication with the backend
	ipcInit();

	// LOADING //////////////////////////

	isLoading.set(true);

	const unsubscribe = isLoading.subscribe(value => {
		if(value) console.log('is loading');
		else console.log('is NOT loading');
	});

	onMount(async () => {
		isLoading.set(false);
	});
</script>


<div class="wrapper">
	<Topbar/>
	<Router/>
</div>


<style lang="scss">
	.wrapper{
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		overflow: hidden;
	}
</style>
