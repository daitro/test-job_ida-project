<template>
  <div id="app">
    <ProductsPage />
  </div>
</template>

<script>
import ProductsPage from "../src/pages/ProductsPage.vue";

export default {
  name: "App",
  components: {
    ProductsPage,
  },
};
</script>

<style lang="scss">
#app {
  font-family: "SourceSansPro";
}
</style>
