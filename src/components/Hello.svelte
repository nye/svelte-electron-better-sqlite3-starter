<script>
	import { isLoading } from './../stores/ui';

	const handleSayHelloClick = async () => {
		isLoading.set(true);

		const user = await window.ipc.callMain('get-user', 1);

		alert('Hello ' + user.name + '!');
		isLoading.set(false);
	};
</script>


<button type="button" class="btn" on:click|preventDefault={handleSayHelloClick}>Say Hello</button>


<style lang="scss">
	button{
		margin-top: 20px;
		border: 1px solid #aaa;
		border-radius: 4px;
		background: #eee;
		padding: 7px 15px;
	}
</style>
