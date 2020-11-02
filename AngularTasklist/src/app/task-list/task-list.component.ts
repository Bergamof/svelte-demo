import { Component } from '@angular/core';
import { TaskService } from '../shared/task-service';
import { Observable } from 'rxjs';
import { Task } from '../entities/task';

@Component({
	selector: 'app-task-list',
	template: `
		<h1>Angular TaskList</h1>

		<a routerLink="/tasks/new">Create a task</a>
		<ng-container *ngIf="allTasksObservable|async as taskList">
			<ng-container *ngIf="taskList.length>0; else notask">
				<ul>
					<app-task-card *ngFor="let task of taskList" [task]="task"></app-task-card>
				</ul>
				<div>{{ (allTasksObservable|async).length }} task{{ (allTasksObservable|async).length > 1 ? 's' : '' }}</div>
			</ng-container>
		</ng-container>

		<ng-template #notask>
			<div>No task</div>
		</ng-template>
	`
})
export class TaskListComponent {
	public allTasksObservable: Observable<Task[]>;

	constructor(taskService: TaskService) {
		this.allTasksObservable = taskService.getAll();
	}
}
