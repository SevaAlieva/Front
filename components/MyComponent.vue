<script setup>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import Banner from '~/components/Banner.vue';
import Card from '~/components/Card.vue';
import Sidebar from '~/components/Sidebar.vue';
import MainContent from '~/components/MainContent.vue';
</script>

<template>
  <div class="container">
    <Header />
    <Banner />
    
    <div class="content-block">
      <h2 class="hello-text">Hello world!</h2>
      <p class="subtext">Look at my website</p>
    </div>
    
    <div class="cards-row">
      <Card content="Here" />
      <Card content="And here" />
    </div>
    
    <div class="main-container">
      <Sidebar position="left" title="Считалочка:" content="Эники\nБэники\nЕли вареники" />
      <MainContent />
      <Sidebar position="right" content="Обучение такому фокусу стоит 100кк$, за подробностями в лс" />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 100%;
  margin: 0;
  padding: 0;
}
  
.content-block {
  text-align: left;
  margin: 0.5rem 0 0.5rem 1rem;
}

.hello-text {
  font-size: 30px;;
  margin-bottom: 0.3rem;
}

  .subtext {
    font-size: 1rem;
  }

.cards-row {
  display: flex;
  margin: 0.5rem 0 0 1rem;
  gap: 0.5rem;
}

.main-container {
  display: flex;
  text-align: center;
  margin-top: 0.5rem;
  width: 100%;
}

.sidebar {
  flex: 1;
}
  
.main-content {
  flex: 1.5;
}
</style>