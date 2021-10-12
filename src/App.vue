<template>
  
  <div class="main-container">
    <div class="header">
      <div class="logo">
        <span class="logo1">@just</span><span class="logo2">Free</span>
      </div>
      <div class="search">
        <Search></Search>
      </div>
      <div class="user">
        <img src="./assets/img/Bell.png" alt="">
        <div class="circle notify">{{ numNotify }}</div>
        <div class="vertical"/>
        <Dropdown
          :list="dataList"
          @selected="onSelected"
        ></Dropdown>
        <div class="circle avatar">{{ symbol }}</div>
      </div>
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
import Dropdown from "./components/Dropdown.vue";

export default {
  name: 'App',
  components: {
    Sidebar,
    Search,
    Dropdown
  },
  data() {
    return {
      numNotify: 8,
      username: "Filip J.",
      dataList: [
                {
                    name: "Filip J.",
                    id: 1
                },
                {
                    name: "Tom B.",
                    id: 2
                }
            ]
    }
  },
  methods: {
    onSelected(id) {
      this.username = this.dataList.find(item => item.id == id).name;
    }
  },
  computed: {
    symbol() {
      return this.username.charAt(0);
    }
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

.user {
  display: flex;
  align-items: center;
}

.circle {  
  display: flex;
  align-items: center;
  justify-content: center;  
  color: #ffff;
  border-radius: 50%;
  -moz-border-radius: 50%;
	-webkit-border-radius: 50%;
  font-family: "Open Sans";
  font-weight: bold;
}

.notify {
  position: relative;
  top: -10px;
  left: -10px;
  font-size: 10px;
  background-color: #1e88e5;
  width: 18px;
  height: 18px;
}

.avatar {
  font-size: 16px;
  background-color: #37474f;
  width: 40px;
  height: 40px;
  margin-left: 14px;
}

.vertical {
  width: 2px;
  background-color: #a1b1c2;
  height: 24px;
  margin-left: 10px;
}

.sidebar {
    background-color: #37474f;

}

</style>
