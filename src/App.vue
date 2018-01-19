<template>
  <index>
    <v-container>
      <router-view></router-view>
    </v-container>
  </index>
</template>

<script>
  import Index from './pages/Index';

  export default {
    components: {
      Index,
    },
    name: 'app',
  };
</script>
