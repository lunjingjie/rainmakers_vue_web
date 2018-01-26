<template>
  <v-container fluid grid-list-xl class="px-5">
    <v-layout row wrap>
      <v-flex xs12 class="my-3">
        <v-card>
          <v-toolbar color="primary">
            <v-btn icon>
              <v-icon color="white">arrow_back</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon color="white">more_vert</v-icon>
            </v-btn>
          </v-toolbar>
          <v-container fluid class="px-0">
            <v-layout row wrap justify-center>
              <!-- api输入框 -->
              <v-flex xs6>
                <v-text-field
                  label="API"
                  v-model="api"
                  loading
                ></v-text-field>
                <v-alert type="error" :value="value">
                  please input your api url.
                </v-alert>
              </v-flex>
              <v-flex xs2>
                <v-btn color="primary" @click="outPutJson">TEST</v-btn>
              </v-flex>
              <!-- api json输出 -->
              <v-flex xs12>
                <v-divider color="#E0E0E0"></v-divider>
                <v-text-field
                  label=""
                  v-model="title"
                  counter
                  full-width
                  multi-line
                  single-line
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  import TestService from '@/service/test-service';

  export default {
    name: 'Index',
    data() {
      return {
        title: 'output result......',
        api: '',
        value: false,
      };
    },
    watch: {
      api() {
        this.value = false;
      },
    },
    methods: {
      outPutJson() {
        if (this.api === '') {
          this.value = true;
          return;
        }
        TestService.getUserList(this.api).then((res) => {
          this.title = JSON.stringify(res.data);
        }).catch((error) => {
          this.title = error;
        });
      },
    },
  };
</script>
