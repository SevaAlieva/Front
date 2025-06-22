<script setup>
import { computed } from 'vue';

const props = defineProps({
  position: {
    type: String,
    default: "left",
    validator: (value) => ["left", "right"].includes(value)
  },
  title: {
    type: String,
    default: ""
  },
  content: {
    type: String,
    default: ""
  }
});

const contentLines = computed(() => {
  return props.content.replace(/\\n/g, '\n').split('\n');
});
</script>

<template>
  <div :class="['sidebar', position]">
    <div class="content-container">
      <p v-if="title" class="title">{{ title }}</p>
      
      <ul class="centered-list">
        <li v-for="(item, index) in contentLines" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  @include card(#C1867B);
  padding: 1rem;
  min-height: calc(100vh - 300px); 
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  border-radius: 8px;
  flex: 1;

  .content-container {
    margin: auto;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .centered-list {
      list-style-type: none;
      padding-left: 0;
      width: 100%;
      
      li {
        position: relative;
        padding-left: 1.5rem;
        margin-bottom: 0.5rem;
        text-align: left;
        
        &::before {
          content: "•";
          position: absolute;
          left: 0;
        }
      }
    }
  }

  &.left {
    margin-right: 1rem;
  }
  
  &.right {
    margin-left: 1rem;
  }
}

.centered-text {
  margin: 0;
  padding: 0 1rem;
  text-align: center;
}

.plain-text {
  flex-grow: 1;
}
</style>