import TaskList from './components/TaskList.svelte';
import TaskUpdate from './components/TaskUpdate.svelte';


const routes = {
	'/': TaskList,
	'/tasks/new': TaskUpdate
};

export default routes;
