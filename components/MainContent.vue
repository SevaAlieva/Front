<script setup>
const showText1 = ref(true);

const toggleText = () => {
  showText1.value = !showText1.value;
};
</script>

<template>
  <div class="main-content">
    <div class="content-wrapper">
      <h2 class="title">Сейчас будет фокус</h2>
      <div class="action-block">
        <p v-if="showText1" class="text-1">
          Хлопни три раза в ладоши, 15 раз покрутись, прыгни 5 раз и нажми на кнопку, и текст поменяется
        </p>
        <p v-else class="text-2">
          Молодец! Сделай то же самое и текст вернётся
        </p>
        <button class="switch-btn" @click="toggleText">Тык сюда pls</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-content {
  background: #dbc7c3;
  border-radius: 8px;
  padding: 1rem;
  min-height: calc(100vh - 300px);
  display: flex;
  margin: 0 4px;
  flex: 1.5;

  .content-wrapper {
    margin: auto;
    width: 100%;
    text-align: center;

    .title {
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }

    .action-block {
      .text-1,
      .text-2 {
        margin-bottom: 1rem;
      }

      .switch-btn {
        background: #b1e0cd;
        border: none;
        padding: 0.5rem 1rem;
        margin-top: 1rem;
        cursor: pointer;
        border-radius: 4px;
        transition: background 0.2s;

        &:hover {
          background: darken(#b1e0cd, 10%);
        }
      }
    }
  }
}
</style>