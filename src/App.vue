<template>
    <div id="app">
        <!--<div id="nav">-->
        <!--<router-link to="/">Home</router-link> |-->
        <!--<router-link to="/about">About</router-link>-->
        <!--</div>-->
        <router-view/>
    </div>
</template>

<script>
  import json from '@/assets/test.json';
  import { mapActions } from 'vuex';

  export default {
    name: 'app',
    created() {
      try {
        this.setData(json);
      } catch (e) {
        console.error('Данные не загружены');
      }
    },
    methods: {
      ...mapActions({
        setData: 'data/setData'
      })
    }

  };
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
