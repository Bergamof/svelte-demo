<script>
	import routes from './routes';
	import Router, { link } from 'svelte-spa-router';
</script>

<nav>
	<a href="/" use:link data-testid="home-link">Home</a>
</nav>
<Router {routes} />
