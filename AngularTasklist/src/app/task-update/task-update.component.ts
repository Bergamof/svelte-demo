import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/task-service';
import { Router } from '@angular/router';
import { UserService } from '../shared/user-service';
import { Task } from '../entities/task';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-task-update',
	template: `
		<h1>Create a task</h1>

		<form [formGroup]="taskForm" (ngSubmit)="handleSubmit()">
			<div>
				<label for="title">Title</label>
				<input type="text" id="title" formControlName="title" />
			</div>
			<div>
				<label for="assigneeId">Assignee</label>
				<select id="assigneeId" formControlName="assigneeId">
					<option value="">None</option>
					<option *ngFor="let user of userService.getAll()|async" [value]="user.id">{{user.name}}</option>
				</select>
			</div>
			<input type="submit" />
		</form>
	`
})
export class TaskUpdateComponent {
	public taskForm: FormGroup;

	constructor(private taskService: TaskService, private userService: UserService, private router: Router, formBuilder: FormBuilder) {
		this.taskForm = formBuilder.group({
			assigneeId: '',
			title: ''
		});
	}

	public handleSubmit(): void {
		const formControls = this.taskForm.controls;
		this.taskService.addTask({
			assigneeId: formControls.assigneeId.value ? +formControls.assigneeId.value : null,
			title: formControls.title.value,
			completed: false
		});
		this.router.navigateByUrl('/').catch(error => console.log(`Errors while navigating : ${error}`));
	}

}
