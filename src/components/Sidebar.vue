<template>
    <nav>
        <ul class="menu">            
            <li v-for="item in items"
                :key="item.name"
                :class="{ active: item.name == selected }"                        
            >       
                <img :src="require(`../assets/img/${item.img}`)" alt=""/>
                <router-link :to="item.path" @click="selected = item.name">
                    {{ item.text }}
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

.menu li img {
    padding-left: 21px;
}

.menu li a {
    padding-left: 16px;
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
</style>