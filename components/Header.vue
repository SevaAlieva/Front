<script setup>

</script>

<template>
  <header>
    <div class="header-container">
      <div class="content-block">
        <h2>Текст для хэдэра</h2>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header-container {
  @include card(#b1b3e0);
  border: none;
  text-align: left;
  padding: 0.5rem 1rem;
  font-size: 14px;
  margin: 0 0.5rem 0.3rem 0.5rem;
}
</style>