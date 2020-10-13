import { writable } from 'svelte/store';

import { Task } from '../entities/task';

function createTaskList() {
	let nextId = 1;

	const { subscribe, update } = writable([
		new Task(nextId++, true, 1, 'Example task'),
		new Task(nextId++, false, 1, 'Another task')
	]);

	return {
		subscribe,
		addTask: (taskToAdd) =>
			update((taskList) => {
				taskToAdd.id = nextId++;
				return [...taskList, taskToAdd];
			}),

		changeTaskCompletion: (taskToUpdate, completion) =>
			update((taskList) =>
				taskList.map((task) => {
					if (task.id === taskToUpdate.id) {
						task.completed = completion;
					}
					return task;
				})
			)
	};
}

export const taskStore = createTaskList();
