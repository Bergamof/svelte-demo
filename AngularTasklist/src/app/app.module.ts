import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		AppComponent,
		TaskCardComponent,
		TaskListComponent,
		TaskUpdateComponent
	],
	imports: [
		BrowserModule,
		RouterModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
