import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../entities/task';
import { TaskService } from '../shared/task-service';
import { UserService } from '../shared/user-service';

@Component({
	selector: 'app-task-card',
	template: `
		<li class="task">
			<label for="completion">
				<input
					id="completion"
					type="checkbox"
					[checked]=task.completed
					(change)="changeTaskCompletion()" />
				{{task.completed ? 'Completed' : 'In progress'}}
			</label>

			<h1>{{task.id}} - {{task.title}}</h1>
			<div>{{taskUserName}}</div>
		</li>
	`,
	styles: [`
		.task {
			background: aquamarine;
			border: 2px solid #cccccc;
			border-radius: 10px;

			list-style-type: none;

			margin: 5px;
			padding: 10px;
			width: 500px;
		}
	`]
})
export class TaskCardComponent implements OnInit {

	@Input()
	public task: Task = null;

	public taskUserName = '';

	constructor(private taskService: TaskService, private userService: UserService) {
	}

	ngOnInit(): void {
		this.userService.getAll().subscribe(userList => {
			this.taskUserName = userList.find(user => user.id === this.task.assigneeId)?.name ?? '';
		});
	}

	public changeTaskCompletion(): void {
		this.taskService.changeTaskCompletion(this.task, !this.task.completed);
	}
}
