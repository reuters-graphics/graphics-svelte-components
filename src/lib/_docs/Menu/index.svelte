<script>
  import { base } from '$app/paths';
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faCog } from '@fortawesome/free-solid-svg-icons/faCog.js';
  import { faHome } from '@fortawesome/free-solid-svg-icons/faHome.js';
  import { faGithubAlt } from '@fortawesome/free-brands-svg-icons/faGithubAlt.js';

  export let components = [];
  
  let open = false;
</script>

{#if open}
<div
  id='overlay'
  on:click={() => { open = false; }}
>

</div>
   <!-- content here -->
{/if}

<nav class:open={open}>
  <div class='nav-container'>
    <button
      on:click={() => { open = !open; }}
    >
      <Fa fw size={'md'} icon={faCog} />
    </button>
    <ul>
      <li class="stationary"><a href="{`${base}/`}" rel="external"><Fa fw icon={faHome} /> Home</a></li>
      <li class="stationary"><a href="https://github.com/reuters-graphics/graphics-svelte-components" rel="external"><Fa fw icon={faGithubAlt} /> Repo</a></li>
      <hr />
      {#each components as component}
        {#if (component.title && component.slug)}
        <a href="{`${base}/components/${component.slug}/`}" ><li>{component.title}</li></a>
        {/if}
      {/each}
      
    </ul>
  </div>
</nav>

<style lang="scss">
@import "~@reuters-graphics/style-main/scss/fonts/mixins";

div#overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

nav {
  background-color: #333;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  position: fixed;
  top: 0px;
  left: -200px;
  width: 200px;
  transition: all 0.25s;
  z-index: 99999999999;
  &.open {
    left: 0;
    div.nav-container {
      button {
        transform: rotate(90deg);
        
        right: -25px;
        color: #999;
        &:hover {
          right: -40px;
        }
      }
    }
  }

  div.nav-container {
    position: relative;
    padding: 20px 30px 10px 10px;
    height: 100vh;

    button {
      transform: rotate(0deg);
      transition: all 0.5s;
      position: absolute;
      right: -28px;
      top: 59px;
      font-size: 3rem;
      border: 0px;
      padding: 0;
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      border-radius: 50%;
      background: transparent;
      color: #ccc;
      &:hover {
        right: -50px;
        color: #999;
      }
    }
  }

  ul {
    margin: 0;
    list-style-type: none;
    padding: 0;
    @include font-display;
    letter-spacing: 1px;
    font-weight: 200;
    a {
        color: #ccc;
        text-decoration: none !important;
      }
    
    hr {
      border-top: 1px solid #999;
    }
    li {
      
      transition: all 0.4s;
      &:hover {
        padding-left: 10px;
      }
      &.stationary:hover{
        padding-left: 0;
      }
    }
  }
}
</style>