<script>
  export let title = 'My title';
  export let ariaLabel = 'Arial label';
  export let id = 'id';
  export let src = '';
  export let maxWidth = 660;
  export let scrolling = 'no';

  // title="Global abortion access"
  // ariaLabel="Stacked Bars"
</script>

<div class="datawrapper-chart" style="{`max-width: ${maxWidth}px`}">
  <iframe
    title="{title}"
    aria-label="{ariaLabel}"
    id="{id}"
    src="{src}"
    scrolling="{scrolling}"
    frameborder="0"
    style="width: 0; min-width: 100% !important; border: none;"></iframe>
  <script type="text/javascript">
    !(function () {
      'use strict';
      window.addEventListener('message', function (e) {
        if (void 0 !== e.data['datawrapper-height']) {
          var t = document.querySelectorAll('iframe');
          for (var a in e.data['datawrapper-height'])
            for (var r = 0; r < t.length; r++) {
              if (t[r].contentWindow === e.source)
                t[r].style.height = e.data['datawrapper-height'][a] + 'px';
            }
        }
      });
    })();
  </script>
</div>

<style lang="scss">
  .datawrapper-chart {
    // max-width: 660px;
    margin: auto;
    //border: 1px solid red;
  }
</style>
