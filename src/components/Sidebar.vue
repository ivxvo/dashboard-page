<template>
    <nav>
        <ul class="menu">            
            <li v-for="item in items"
                :key="item.name"
                :class="{ active: item.name == selected }"                        
            >                       
                <router-link :to="item.path" @click="selected = item.name">
                    <img :src="require(`../assets/img/${item.img}`)" alt=""/>
                    <span>{{ item.text }}</span>
                </router-link>                      
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Sidebar",
    data() {
        return {
            selected: null,
            items: [
                {
                    name: "home",
                    text: "Home",
                    img: "Dashboard.png",
                    path: "/"                    
                },
                {
                    name: "timeManagement",
                    text: "Time Management",
                    img: "Clock.png",
                    path: "/time-management"                    
                },
                {
                    name: "inbox",
                    text: "Inbox",
                    img: "Box.png",
                    path: "/inbox"                    
                },
                {
                    name: "calendar",
                    text: "Calendar",
                    img: "Calendar.png",
                    path: "/calendar"                    
                },
                {
                    name: "analytics",
                    text: "Analytics",
                    img: "Activity.png",
                    path: "/analytics"                    
                },
                {
                    name: "settings",
                    text: "Settings",
                    img: "Cogwheel.png",
                    path: "/settings"                    
                }
            ]
        }
    }
}
</script>

<style scoped>
.menu {
    list-style: none;
    padding: 0;
    margin: 0;
    font:  14px "Open Sans";
}

.menu li {   
    display: flex;
    align-items: center; 
    height: 60px;
    color: #9ba3a7;
}

.menu li:first-child {
    background-color: #df468e;
}

.menu li:first-child a {
    color: #ffff;
}

.menu li span {
    padding-left: 21px;
}

.menu li a {
    display: flex;
    align-items: center;
    padding-left: 21px;
    text-decoration: none;
}

.menu li.active {
    background-color: #455a64;
}

.menu li.active a, .menu li.active img {
    color: #ffff;
}

a:visited {
    color: #9ba3a7;
}

@media all and (max-width: 845px) {
    .menu li a span {
        display: none;
    }

    .menu li img {
        padding: 0;
    }

    .menu li a {
        padding: 20px;
    }

    .menu li {
        height: 40px;
    }

    .menu {   
        display: flex;
        justify-content: space-around;
    }
}

@media all and (max-width: 335px) {
    .menu li a {
        padding: 19px;
    }

    .menu li {
        height: 30px;
    }
}

</style>