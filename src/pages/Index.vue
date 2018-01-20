<template>
  <div>
    <v-btn color="warning">Success</v-btn>
    <v-btn color="primary">Error</v-btn>
    <v-btn color="success">Warning</v-btn>
    <v-btn color="info">Info</v-btn>
    <v-toolbar color="error">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Link One</v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  name: 'Index',
};
</script>
