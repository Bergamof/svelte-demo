import { Injectable } from '@angular/core';
import { User } from '../entities/user';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class UserService {
	private userList: User[] = [{ id: 1, name: 'Adrien' }];
	private userListObservable$: Subject<User[]> = new BehaviorSubject(this.userList);

	public getAll(): Observable<User[]> {
		return this.userListObservable$;
	}
}
