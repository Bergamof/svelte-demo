<script>
	import { taskStore } from '../stores/task-store';

	import { userStore } from '../stores/user-store';

	export let task;

	let taskUserName = '';

	userStore.subscribe((userList) => {
		console.log(userList);
		const user = userList.find((user) => user.id === task.assigneeId);
		taskUserName = user ? user.name : '';
	});

	function changeCompletion() {
		taskStore.changeTaskCompletion(task, !task.completed);
	}
</script>

<style>
	.task {
		background: aquamarine;
		border: 2px solid #cccccc;
		border-radius: 10px;

		list-style-type: none;

		margin: 5px;
		padding: 10px;
		width: 500px;
	}
</style>

<li class="task">
	<label for="completion-task-{task.id}">
		<input
			id="completion-task-{task.id}"
			type="checkbox"
			checked={task.completed}
			on:change={taskStore.changeTaskCompletion(task, !task.completed)} />
		{task.completed ? 'Completed' : 'In progress'}
	</label>

	<h1>{task.id} - {task.title}</h1>
	<div>{taskUserName}</div>
</li>
