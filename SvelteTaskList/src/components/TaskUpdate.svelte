<script>
	import { taskStore } from '../stores/task-store';
	import { userStore } from '../stores/user-store';
	import { push } from 'svelte-spa-router';
	import { Task } from '../entities/task';

	function handleSubmit() {
		taskStore.addTask(task);
		push('/');
	}

	let task = new Task();
</script>

<h1>Create a task</h1>

<form on:submit|preventDefault={handleSubmit}>
	<div>
		<label for="name">Title</label>
		<input type="text" id="name" bind:value={task.title} />
	</div>
	<div>
		<label for="assigneeId">Assignee</label>
		<select id="assigneeId" bind:value={task.assigneeId}>
			<option value="">None</option>
			{#each $userStore as user}
				<option value={user.id}>{user.name}</option>
			{/each}
		</select>
	</div>
	<input type="submit" />
</form>
