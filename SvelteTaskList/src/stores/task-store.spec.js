import { taskStore } from './task-store'
import { Task } from '../entities/task';

describe('Task Store', () => {
	it('should return a subscribe method', () => {
		expect(taskStore.subscribe).toBeDefined();
	})

	it('should return newly created task', (done) => {
		// Given
		const newTask = new Task(undefined, false, 1, 'a test');
		let allTasks = [];

		// When
		taskStore.addTask(newTask);

		// Then
		taskStore.subscribe(tasks => {
			allTasks = tasks;
			done();
		})

		expect(allTasks.find(task => task == newTask)).toEqual(newTask);
	})
})
