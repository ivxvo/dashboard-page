<template>
  
  <div class="main-container">
    <div class="header">
      <div class="logo">
        <span class="logo1">@just</span><span class="logo2">Free</span>
      </div>
      <div class="search">
        <Search></Search>
      </div>
      <div class="user"></div>
    </div>
    <div class="sidebar">
      <Sidebar></Sidebar>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
  
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import Search from "./components/Search.vue";

export default {
  name: 'App',
  components: {
    Sidebar,
    Search
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

.main-container {
  margin: auto;
  background-color: #f5f5f5;
  max-width: 1550px;
  display: grid;
  grid-template-columns: 230px 1320px;
  grid-template-rows: 70px calc(100vh - 70px);
}

.header {
  grid-column: 1 / 3;
  /* background-color: #1e88e5; */
  display: grid;
  grid-template-columns: 230px 1104px 216px;
  grid-template-rows: 70px;
}

.logo {
  color: #ffff;
  background-color: #1e88e5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.logo1 {
  font-family: Tide200;
}

.logo2 {
  font-family: Tide400;
}

.search, .user {
  background-color: #e0e0e0;
}

.search {
  display: flex;
  align-items: center;
}

.sidebar {
    background-color: #37474f;

}

</style>
