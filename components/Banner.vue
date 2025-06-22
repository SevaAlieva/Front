<script setup>
defineProps({
  title: {
    type: String,
    default: "Banner"
  },

});
</script>

<template>
  <div class="banner">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  @include card(#b1c7e0);
  margin: 1rem 0;
  border: none;
  font-size: 14px;
  padding: 0.5rem 1rem;
  text-align: left;
  margin: 0 0.5rem 0.3rem 0.5rem;
}
  .subtext {
    margin-top: 0.5rem;
  }

</style>