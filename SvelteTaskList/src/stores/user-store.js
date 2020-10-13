import { writable } from 'svelte/store';

import { User } from '../entities/user';

function createUserList() {
	const { subscribe } = writable([new User(1, 'Adrien')]);

	return { subscribe };
}

export const userStore = createUserList();
