<script>
	import routes from './routes';
	import Router, { link } from 'svelte-spa-router';
</script>

<nav>
	<a href="/" use:link>Home</a>
</nav>
<Router {routes} />
