<script>
	import TaskCard from './TaskCard.svelte';
	import { taskStore } from '../stores/task-store';
	import { link } from 'svelte-spa-router';
</script>

<h1>Svelte TaskList</h1>

<a href="/tasks/new" use:link>Create a task</a>
{#if $taskStore.length > 0}
	<ul>
		{#each $taskStore as task}
			<TaskCard {task} />
		{/each}
	</ul>
{:else}
	<div>No task</div>
{/if}
