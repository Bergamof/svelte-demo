export class Task {
	constructor(id, completed = false, assigneeId, title) {
		this.id = id;
		this.completed = completed;
		this.assigneeId = assigneeId;
		this.title = title;
	}
}
