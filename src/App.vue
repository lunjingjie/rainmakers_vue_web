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
<style>
.primary {
  background-color: #1867c0;
}
.error {
  background-color: #ff5252;
}
.warning {
  background-color: #ffc107;
}
.success {
  background-color: #4caf50;
}
.info {
  background-color: #2196f3;
}
</style>
