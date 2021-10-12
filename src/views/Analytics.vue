<template>
    <div class="container">
        <div class="greeting">
            <span>Hi Filip,</span><br/>
            <span>Checkout your latest projects and their progress</span>
        </div>
        <div class="horizontal"/>
        <div class="wavy"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.container {
    padding: 52px 0 0 70px;
}

.greeting {
    font-family: AvenirN;
}

.greeting span:first-child {
    font-size: 18px;
    color: #37474f;
}

.greeting span {
    font-size: 14px;
    color: #78909c;
}

.horizontal {
    margin-top: 24px;
    width: 1170px;
    height: 2px;
    background-color: #dee3e7;
}

.wavy {
    padding-top: 43px;
}

</style>