<template>
  
  <div class="main-container">
    <div class="header">
      <div class="logo center-center">
        <span class="logo1">@just</span><span class="logo2">Free</span>
      </div>
      <div class="search">
        <Search></Search>
      </div>
      <div class="user">
        <button @click="showMsg">
          <img src="./assets/img/Bell.png" alt="">
        </button>
        <div class="circle notify center-center">{{ numNotify }}</div>
        <div class="vertical"/>
        <Dropdown
          :list="dataList"
          @selected="onSelected"
        ></Dropdown>
        <button class="circle avatar">{{ symbol }}</button>
      </div>
    </div>
    <div class="sidebar">
      <Sidebar></Sidebar>
    </div>
    <div id="rview">
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
    },
    showMsg() {
      alert(`You have ${this.numNotify} notifications`);
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

.main-container {
  margin: auto;
  background-color: #f5f5f5;
  max-width: 1550px;
  display: grid;
  grid-template-columns: 230px minmax(600px, 1320px);
  grid-template-rows: 70px auto;
}

.header {
  grid-column: 1 / 3;
  display: grid;
  grid-template-columns: 230px minmax(150px, 1104px) auto;
  grid-template-rows: 70px;
  background-color: #e0e0e0;
}

.center-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  color: #ffff;
  background-color: #1e88e5;  
  font-size: 18px;
}

.logo1 {
  font-family: Tide200;
}

.logo2 {
  font-family: Tide400;
}

.search {
  display: flex;
  align-items: center;
}

.search .search-group {
  width: 100%;
  padding: 0 34px;
}

.user {
  display: flex;
  align-items: center;
}

.circle {      
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

.user button {
  border: none;
  background-color: #e0e0e0;
  padding: 0;
  cursor: pointer;
}

button.avatar {
  font-size: 16px;
  background-color: #37474f;
  width: 40px;
  height: 40px;
  margin: 0 33px 0 14px;
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

@media all and (max-width: 845px) {
    /* .sidebar {
        grid-column: 1 / 3;
        grid-row: 4 / 5;
    } */

    .sidebar {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }

    .main-container {     
      padding-bottom: 60px;
      grid-template-columns: minmax(320px, 1fr);
      grid-template-rows: 110px auto;
    }

    .header {
      grid-template-columns: minmax(110px, 1fr) minmax(210px, 3fr);
      grid-template-rows: 60px 50px;
    }

    .search {
      grid-column: 1 / 3;
      grid-row: 2 / 3;
    }

    .search, .search-group input {
      background-color: #f5f5f5;
    }

    #rview {
      grid-column: 1 / 3;
      grid-row: 3 / 4;
    }

    .user {
      margin-left: auto;
    }

    button.avatar {
      margin: 0 10px;
    }
}


@media all and (max-width: 385px) {
    .main-container {     
      grid-template-rows: 90px auto;
    }

    .header {
      grid-template-rows: 50px 40px;
    }

    .search .search-group {
      padding: 0 10px;
    }
}

@media all and (max-width: 335px) {
    .main-container {     
      padding-bottom: 50px;
    }
}

</style>
