<script>
  import { base } from '$app/paths';
</script>

<nav class="nav">
	<div class="logo-container">
		<a href="{`${base}/`}">
			<figure class="navbar-brand">
				<img class="logo reuters-graphics" src="https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-dark.svg" alt='Reuters graphics logo' />
			</figure>
		</a>
	</div>
	<slot></slot>
</nav>

<style lang="scss">
  nav {
    margin-bottom: 3rem;
  }
</style>