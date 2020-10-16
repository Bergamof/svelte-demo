import { userStore } from './user-store'

describe('User Store', () => {
	it('should return a subscribe method', () => {
		expect(userStore.subscribe).toBeDefined();
	})
})
