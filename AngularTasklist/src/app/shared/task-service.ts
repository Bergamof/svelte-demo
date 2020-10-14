import { Injectable } from '@angular/core';
import { Task } from '../entities/task';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaskService {
	private nextId = 1;
	private taskList: Task[] = [
		{ id: this.nextId++, completed: true, title: 'Example task' },
		{ id: this.nextId++, completed: false, title: 'Another task' }
	];
	private taskListObservable$: Subject<Task[]> = new BehaviorSubject<Task[]>(this.taskList);

	public getAll(): Observable<Task[]> {
		return this.taskListObservable$;
	}

	public addTask(task: Task): void {
		task.id = this.nextId++;
		this.taskList = [...this.taskList, task];
		this.taskListObservable$.next(this.taskList);
	}

	public changeTaskCompletion(taskToUpdate: Task, completion: boolean): void {
		this.taskListObservable$.next(this.taskList.map(task => {
			if (task.id === taskToUpdate.id) {
				task.completed = completion;
			}
			return task;
		}));
	}
}
