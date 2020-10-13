import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<nav>
			<a href="/">Home</a>
		</nav>
		<router-outlet></router-outlet>
	`
})
export class AppComponent {
	title = 'AngularTasklist';
}
