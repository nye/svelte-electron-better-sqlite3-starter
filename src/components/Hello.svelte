<script>
	import { isLoading } from './../stores/ui';
	import { send } from './../ipc';

	const handleTest1Click = async () => {
		alert(await send('test'));
	};

	const handleTest2Click = async () => {
		isLoading.set(true);

		const user = await send('get-user', { user_id: 1 });

		alert("I'm " + user.name + "!");

		isLoading.set(false);
	};
</script>


<button type="button" class="btn" on:click|preventDefault={handleTest1Click}>Test</button>
<button type="button" class="btn" on:click|preventDefault={handleTest2Click}>Get my name from the database</button>


<style lang="scss">
	button{
		margin-top: 20px;
		border: 1px solid #aaa;
		border-radius: 4px;
		background: #eee;
		padding: 7px 15px;
	}
</style>
