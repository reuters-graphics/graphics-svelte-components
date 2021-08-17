<div id='demo-container'>
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
  }
</style>