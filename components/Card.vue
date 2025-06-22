<script setup>
defineProps({
  content: {
    type: String,
    default: "Card content"
  }
});
</script>

<template>
  <div class="card">
    <p>{{ content }}</p>
  </div>
</template>

<style lang="scss" scoped>
.card {
  @include card(#b1e0cd);
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  width: fit-content;
  min-width: 90px;
  text-align: left;
  font-size: 18px;
  margin: 0 0.5rem 0.3rem 0.5rem;
}
</style>