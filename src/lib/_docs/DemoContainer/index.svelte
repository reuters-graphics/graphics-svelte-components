<script>
  export let fluid = false;
</script>

<div id='demo-container' class:fluid={fluid}>
  <div>
    <slot></slot>
  </div>
</div>

<style lang='scss'>
  #demo-container {
    margin: 2rem auto;
    
    padding: 20px;
    
    div {
      max-width: 1200px;
      margin: 20px auto;
      background-color: white;
      border: 1px solid #ccc;
      padding: 20px 0;
    }

    &.fluid {
      margin: 5rem 0;
      padding: 0;

      div {
        max-width: initial;
        width: 100%;
        padding: 0px 15px;
        border: 0;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        margin: 0;
      }
    }
  }
</style>