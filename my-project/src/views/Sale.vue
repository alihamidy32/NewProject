<template>
<article>
  <add-stock/>
</article>
</template>

<script>
import AddStock from '../components/stock/AddStock.vue'
export default {
  components: { AddStock },

}
</script>

<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>