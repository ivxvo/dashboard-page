<template>
    <nav>
        <ul class="menu">
            <!-- <li><router-link>Home</router-link></li> -->
            <li>
                <img src="../assets/Dashboard.png" alt="">
                Home</li>
            <li>
                <img src="../assets/Clock.png" alt="">
                Time Management
            </li>
            <li>
                <img src="../assets/Box.png" alt="">
                Inbox
            </li>
            <li>
                <img src="../assets/Calendar.png" alt="">
                Calendar
            </li>
            <li>
                <img src="../assets/Activity.png" alt="">
                Analytics
            </li>
            <li>
                <img src="../assets/Cogwheel.png" alt="">
                Settings
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.menu {
    list-style: none;
    padding: 0;
    margin: 0;
}

.menu li {
    height: 60px;
    color: #9ba3a7;
}

.menu li:first-child {
    color: #ffff;
    background-color: #df468e;
}
</style>