<template>
  <div class="container">
    <app-show-card></app-show-card>
  </div>
</template>

<script>
  // import InitialDeck from './components/InitialDeck.vue';
  import ShowCard from './components/ShowCard.vue';

  export default {
    components: {
      // 'app-initial-deck': InitialDeck,
      'app-show-card': ShowCard
    }
  }
</script>

<style>
</style>
