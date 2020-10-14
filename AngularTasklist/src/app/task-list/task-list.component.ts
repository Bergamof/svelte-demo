import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/task-service';

@Component({
	selector: 'app-task-list',
	template: `
		<h1>Angular TaskList</h1>

		<a routerLink="/tasks/new">Create a task</a>

		<ng-container *ngIf="taskService.getAll()|async as taskList">
			<ng-container *ngIf="taskList.length>0; else notask">
				<ul *ngFor="let task of taskList">
					<app-task-card [task]="task"></app-task-card>
				</ul>
			</ng-container>
		</ng-container>

		<ng-template #notask>
			<div>No task</div>
		</ng-template>
	`
})
export class TaskListComponent implements OnInit {

	constructor(public taskService: TaskService) {
	}

	ngOnInit(): void {
	}

}
