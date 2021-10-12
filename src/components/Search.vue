<template>
    <div class="search-group">
        <img src="../assets/img/Search.png" alt="">
        <input type="text" placeholder="Search">
    </div>
</template>

<style scoped>
.search-group {
    display: flex;
    align-items: center;
}

.search-group input {
    padding-left: 18px;
    border: none;
    background-color: #e0e0e0;
    width: 100%;
    color: #7e8e9f;
    font: 14px AvenirN;
}

.search-group input:focus-visible {
    outline: none;
}
</style>