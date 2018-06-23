<template>
<div class="footer">
    &copy; All rights reserved    {{ new Date().getFullYear() }}
</div>
</template>
<script>
    export default
    {
        name:'Footer'
        
    }
</script>
<style scoped>
.footer {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #efefef;
  text-align: center;
}
</style>