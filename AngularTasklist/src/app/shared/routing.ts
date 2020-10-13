import { Routes } from '@angular/router';
import { TaskListComponent } from '../task-list/task-list.component';
import { TaskUpdateComponent } from '../task-update/task-update.component';

export const routes: Routes = [
		{ path: '', component: TaskListComponent },
		{ path: 'tasks/new', component: TaskUpdateComponent }
	]
;
