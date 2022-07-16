<script>
  import { onMount } from 'svelte';
  export let once = false;
  export let top = 0;
  export let bottom = 0;
  export let left = 0;
  export let right = 0;
  export let threshold = 0;
  let visible = false;
  let container;
  onMount(() => {
    if (typeof IntersectionObserver !== 'undefined') {
      const rootMargin = `${bottom}px ${left}px ${top}px ${right}px`;
      const observer = new IntersectionObserver(
        (entries) => {
          visible = entries[0].isIntersecting;
          if (visible && once) {
            observer.unobserve(container);
          }
        },
        {
          rootMargin,
          threshold,
        }
      );
      observer.observe(container);
      return () => observer.unobserve(container);
    }
    function handler() {
      const bcr = container.getBoundingClientRect();
      visible =
        bcr.bottom + bottom > 0 &&
        bcr.right + right > 0 &&
        bcr.top - top < window.innerHeight &&
        bcr.left - left < window.innerWidth;
      if (visible && once) {
        window.removeEventListener('scroll', handler);
      }
    }
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  });
</script>

<div bind:this="{container}">
  <slot visible="{visible}" />
</div>
