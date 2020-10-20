import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskUpdateComponent } from './task-update.component';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../shared/routing';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

describe('TaskUpdateComponent', () => {
	let component: TaskUpdateComponent;
	let fixture: ComponentFixture<TaskUpdateComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterTestingModule.withRoutes(routes)],
			providers: [FormBuilder],
			declarations: [TaskUpdateComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TaskUpdateComponent);
		component = fixture.componentInstance;
		TestBed.inject(Router);

		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
